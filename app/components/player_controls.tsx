import {
	RefObject,
	useEffect,
    useState,
} from "react";
import { FaPlay, FaStop, FaBackward, FaForward } from "react-icons/fa";
import Video from "next-video";
import { duration_to_string } from "../utils";


export function PlayerControlsButton(props: {
	children: React.ReactNode;
	on_press: () => void
}) {
	return (
		<button className="flex justify-center bg-gray-300 w-5 h-5 rounded-xs border-black border-1 p-3" onClick={props.on_press}>
			<p className="text-gray-700 self-center">{props.children}</p>
		</button>
	);
}

export default function PlayerControls(props: {
	connected_player_ref: RefObject<HTMLVideoElement | null>;
	set_connected_player_props: React.Dispatch<
		React.SetStateAction<React.ComponentPropsWithoutRef<typeof Video>>
	>;
}) {
	const { connected_player_ref, set_connected_player_props } = props;


	useEffect(() => {
		set_connected_player_props({
			onCanPlay: () => {
				connected_player_ref.current?.play();
                set_duration(connected_player_ref.current?.duration ? connected_player_ref.current?.duration : 0);
			},
            onTimeUpdate: () => {
                set_current_time(connected_player_ref.current?.currentTime ? connected_player_ref.current?.currentTime : 0);
            }
		});
	}, []);

	const [current_time, set_current_time] = useState<number|undefined>(connected_player_ref.current?.currentTime);
	const [duration, set_duration] = useState<number|undefined>(connected_player_ref.current?.duration);

	return (
		<div className="text-black bg-white w-1/1">
			<div className="flex flex-row justify-between ml-3 mr-3">
				<p className="text-sm min-w-6">{duration_to_string(current_time).duration}</p>
                <input
					className="w-1/1 ml-3 mr-3"
					type="range"
					value={current_time}
					max={duration}
                    step={0.01}/>
				<p className="text-sm min-w-6">{duration_to_string(duration).duration}</p>
			</div>
			<div className="flex flex-row ml-1 mr-2 space-x-2 pb-2">
				<PlayerControlsButton on_press={() => connected_player_ref.current?.play()}>
					<FaPlay />
				</PlayerControlsButton>
				<PlayerControlsButton on_press={() => {
					if(connected_player_ref.current?.currentTime)
						connected_player_ref.current.currentTime = 0;
					}}>
					<FaBackward />
				</PlayerControlsButton>
				<PlayerControlsButton on_press={() => connected_player_ref.current?.pause()}>
					<FaStop />
				</PlayerControlsButton>
				<PlayerControlsButton on_press={() => {
					if(connected_player_ref.current?.currentTime)
						connected_player_ref.current.currentTime += 10;
					}}>
					<FaForward />
				</PlayerControlsButton>
			</div>
		</div>
	);
}
