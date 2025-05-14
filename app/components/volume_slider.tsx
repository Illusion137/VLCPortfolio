import {
	IoVolumeHigh,
	IoVolumeMedium,
	IoVolumeLow,
	IoVolumeOff,
} from "react-icons/io5";
import { between, clamp } from "../utils";
import Image from "next/image";
import { MouseEventHandler, RefObject, useState } from "react";

function VolumeSliderIcon(props: { 
    volume: number;
}) {
	return (
		<div className="relative left-1.5">
			<p className="text-neutral-500 relative top-3 z-1 text-xl"><IoVolumeOff/></p>
			<p className="text-amber-500 relative bottom-2 left-[4px] text-xl">
				{between(props.volume, 0.75, 1.25) ? (
					<IoVolumeHigh className="relative right-[0px]"/>
				) : between(props.volume, 0.25, 0.75) ? (
					<IoVolumeMedium className="relative right-[1px]"/>
				) : between(props.volume, 0.1, 0.25) ? (
					<IoVolumeLow className="relative right-[2px]"/>
				) : null}
			</p>
		</div>
	);
}

export default function VolumeSlider(props: { 
    value: number;
    set_value: React.Dispatch<React.SetStateAction<number>>;
    connected_player_ref: RefObject<HTMLVideoElement | null>
}) {
    const [mouse_down, set_mouse_down] = useState(false);
    
	const slider_width = 100;
	const slider_height = 20;

    const min_value = 0.0;
    const max_value = 1.0;    

    const update_volume: MouseEventHandler<HTMLDivElement> = (event) => {
        const new_volume = clamp((event.nativeEvent.offsetX / 98) * max_value, min_value, max_value);
        props.set_value(new_volume);
        if(props.connected_player_ref.current){
            props.connected_player_ref.current.volume = new_volume;
        }
    }

    return (
        <div className="flex flex-row h-9 overflow-hidden">
            <VolumeSliderIcon volume={props.value}/>
            <p className="text-gray-400 font-black text-[11px] left-5.5 top-0.5 relative">{Math.floor(props.value * 100)}%</p>
            <div className="relative h-8 overflow-hidden right-3" 
                onMouseLeave={() => {set_mouse_down(false); }} 
                onMouseUp={() => {set_mouse_down(false); }} 
                onMouseDown={(event) => {set_mouse_down(true); update_volume(event);}} 
                onMouseMove={(event) => {
                    if(mouse_down) update_volume(event);
            }}>
                <Image draggable={false} className="relative z-10" alt="Volume-Slider-Base" src="/base_volume_slider.png" width={slider_width} height={slider_height}/>
                <Image draggable={false} style={{clipPath: `inset(0 ${98 - 98 * (props.value / max_value)}px 0 0`}} className="relative bottom-[28.5px] z-0" alt="Volume-Slider-Color" src="/color_volume_slider.png" width={slider_width} height={slider_height}/>
            </div>
        </div>
    );
}
