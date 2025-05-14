import { MouseEventHandler, RefObject, useEffect, useState } from "react";
import { clamp } from "../utils";

export default function PlaybackSlider(props: {
    time: number|undefined;
    set_time: React.Dispatch<React.SetStateAction<number|undefined>>;
    connected_player_ref: RefObject<HTMLVideoElement | null>
}){
    const [mouse_down, set_mouse_down] = useState(false);
    const [track_width, set_track_width] = useState(500);

    const update_time: MouseEventHandler<HTMLDivElement> = (event) => {
        if(props.time === undefined || props.connected_player_ref.current?.duration === undefined) return;
        const duration = props.connected_player_ref.current?.duration;
        const new_time = clamp((event.nativeEvent.offsetX / track_width) * duration, 0, duration);
        if(props.connected_player_ref.current){
            props.connected_player_ref.current.currentTime = new_time;
        }
    }

    useEffect(() => {
        const handle_resize = () => {
            set_track_width(document.getElementById("PlaybackSlider")?.clientWidth ?? 500);
        };
        window.addEventListener('resize', handle_resize);

        set_track_width(document.getElementById("PlaybackSlider")?.clientWidth ?? 500);
		
        return () => {
            window.removeEventListener('resize', handle_resize);
        };
    }, []);

    return (
        <div draggable={false} id="PlaybackSlider" className="track self-center mx-3 rounded-2xl w-full h-[10px] bg-gradient-to-b from-neutral-400 to-neutral-200" 
            onMouseLeave={() => {set_mouse_down(false); }} 
            onMouseUp={() => {set_mouse_down(false); }} 
            onMouseDown={(event) => {set_mouse_down(true); update_time(event);}} 
            onMouseMove={(event) => {
                if(mouse_down) update_time(event);
        }}>
            <div draggable={false} className="filled-track bg-gradient-to-b from-blue-500 to-sky-700 relative rounded-2xl h-[10px]" style={{width: 
                (props.time && props.connected_player_ref.current?.duration) ? 
                    ( track_width * (props.time/props.connected_player_ref.current.duration) ) : 0 }}>

            </div>
        </div>
    );
}