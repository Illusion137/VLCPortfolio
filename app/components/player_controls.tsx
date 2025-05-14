import {
	RefObject,
	useEffect,
    useState,
} from "react";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import { FaFastForward, FaFastBackward, FaStop } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { ImLoop } from "react-icons/im";
import { RiPlayList2Fill } from "react-icons/ri";
import { IoMdShuffle } from "react-icons/io";
import { duration_to_string, random_of } from "../utils";
import { all_media, VLCMedia } from "../media";
import Video from "next-video";
import VolumeSlider from "./volume_slider";
import PlaybackSlider from "./playback_slider";
import { Tooltip } from "react-tooltip";

export function PlayerControlsButtonLarge(props: {
	children: React.ReactNode;
	on_press: () => void
}) {
	return (
		<button className="flex justify-center bg-white hover:bg-sky-100 hover:border-sky-600 w-7 h-7 rounded-md border-black border-1 p-[15px]" onClick={props.on_press}>
			<p className="text-neutral-500 self-center text-2xl">{props.children}</p>
		</button>
	);
}
export function PlayerControlsButtonSmall(props: {
	children: React.ReactNode;
	on_press: () => void;
}) {
	return (
		<button className="flex justify-center bg-white hover:bg-sky-100 hover:border-sky-600 w-5 h-5 rounded-sm border-black border-1 p-[11px] mx-0.5" onClick={props.on_press}>
			<p className="text-neutral-500 self-center text-md">{props.children}</p>
		</button>
	);
}

export default function PlayerControls(props: {
	connected_player_ref: RefObject<HTMLVideoElement | null>;
	set_connected_player_props: React.Dispatch<React.SetStateAction<React.ComponentPropsWithoutRef<typeof Video>>>;
	set_is_media_loading: React.Dispatch<React.SetStateAction<boolean>>;
    set_sidebar_visible: React.Dispatch<React.SetStateAction<boolean>>;
    play_video: (media: VLCMedia) => void;
}) {
	const { connected_player_ref, set_connected_player_props } = props;
	const [current_time, set_current_time] = useState<number|undefined>(connected_player_ref.current?.currentTime);
	const [duration, set_duration] = useState<number|undefined>(connected_player_ref.current?.duration);
	const [is_playing, set_is_playing] = useState<boolean>(false);
	const [volume, set_volume] = useState<number>(1.0);
	const [is_media_loading, set_is_media_loading] = useState<boolean>(false);

	useEffect(() => {
		if(is_playing === true){
			connected_player_ref.current?.play();
		}
		else {
			connected_player_ref.current?.pause();
		}
	},[is_playing, connected_player_ref]);

	useEffect(() => {
		const handle_spacebar = (event: KeyboardEvent) => {
			if(event.key === ' '){
				set_is_playing(playing => !playing);
			}
		}

        const handle_arrow_keys = (event: KeyboardEvent) => {
            if(!connected_player_ref.current) return;
            if(event.key === "ArrowLeft"){
				connected_player_ref.current.currentTime = Math.max(connected_player_ref.current.currentTime - 5, 0);
            }
            else if(event.key === "ArrowRight"){
				connected_player_ref.current.currentTime = Math.min(connected_player_ref.current.currentTime + 5, connected_player_ref.current.duration);
            }
            else if(event.key === "ArrowUp"){
				connected_player_ref.current.volume = Math.min(connected_player_ref.current.volume + 0.05, 1);
            }
            else if(event.key === "ArrowDown"){
				connected_player_ref.current.volume = Math.max(connected_player_ref.current.volume - 0.05, 0.01);
            }
        }

		set_connected_player_props(() => ({
			onCanPlay: () => {
				if(connected_player_ref.current?.volume && is_media_loading === true)
					connected_player_ref.current.volume = volume;
				props.set_is_media_loading(false);
                set_is_media_loading(false);
				connected_player_ref.current?.play();
				set_duration(connected_player_ref.current?.duration ? connected_player_ref.current?.duration : 0);
			},
			onTimeUpdate: () => {
				set_current_time(connected_player_ref.current?.currentTime ? connected_player_ref.current?.currentTime : 0);
			},
			onPlay: () => {
				set_is_playing(true);
			},
			onPause: () => {
				set_is_playing(false);
			},
			onClick: () => {
				set_is_playing(playing => !playing);
			},
			onVolumeChange: () => {
				set_volume(connected_player_ref.current?.volume ?? 1.0);
			}
		}));

		window.addEventListener('keypress', handle_spacebar);
		window.addEventListener('keydown', handle_arrow_keys);

		return () => {
			window.removeEventListener('keypress', handle_spacebar);
			window.removeEventListener('keydown', handle_arrow_keys);
		};
	}, []);

	return (
		<div className="text-black bg-zinc-100 w-1/1 h-15">
			<div className="flex flex-row justify-between ml-3 mr-3">
				<p className="text-sm min-w-6">{duration_to_string(current_time).duration}</p>
                {/* <input
					className="w-1/1 ml-3 mr-3 appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-sky-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
					type="range"
					value={current_time ?? 0}
					max={duration}
					onChange={(event) => {
						const new_time = Number(event.target.value);
						set_current_time(new_time);
						if(connected_player_ref.current?.currentTime){
							connected_player_ref.current.currentTime = new_time;
						}
					}}
                    step={0.01}/> */}
                    <PlaybackSlider time={current_time} set_time={set_current_time} connected_player_ref={connected_player_ref}/>
				<p className="text-sm min-w-6">{duration_to_string(duration).duration}</p>
			</div>
			<div className="flex flex-row ml-1 mr-2 space-x-2 pb-0 items-center">
				<PlayerControlsButtonLarge on_press={() => set_is_playing(playing => !playing)}>
					{is_playing ? <IoPauseSharp/> : <IoPlaySharp  />}
				</PlayerControlsButtonLarge>
                <div className="mx-1.5"/>
				<PlayerControlsButtonSmall on_press={() => {
					if(connected_player_ref.current?.currentTime)
                        if(connected_player_ref.current.currentTime - 5 < 0){
                            connected_player_ref.current.currentTime = 0;
                        }
                        else {
                            connected_player_ref.current.currentTime -= 5;
                        }
					}}>
					<FaFastBackward />
				</PlayerControlsButtonSmall>
				<PlayerControlsButtonSmall on_press={() => set_is_playing(false)}>
					<FaStop  />
				</PlayerControlsButtonSmall>
				<PlayerControlsButtonSmall on_press={() => {
					if(connected_player_ref.current?.currentTime)
						connected_player_ref.current.currentTime += 5;
					}}>
					<FaFastForward />
				</PlayerControlsButtonSmall>
                <div className="mx-1.5"/>
                <div className="mx-0" data-tooltip-id='subcontrols-tooltips' data-tooltip-content="Fullscreen" data-tooltip-place='top'>
                    <PlayerControlsButtonSmall on_press={() => { props.connected_player_ref.current?.requestFullscreen({navigationUI: "show"}) }}>
                        <MdFullscreen/>
                    </PlayerControlsButtonSmall>
                </div>
                <div className="mx-0" data-tooltip-id='subcontrols-tooltips' data-tooltip-content="Toggle Sidebar" data-tooltip-place='top'>
                    <PlayerControlsButtonSmall on_press={() => { props.set_sidebar_visible(is_visible => !is_visible); }}>
                        <RiPlayList2Fill/>
                    </PlayerControlsButtonSmall>
                </div>
                <div className="mx-0" data-tooltip-id='subcontrols-tooltips' data-tooltip-content="Loop" data-tooltip-place='top'>
                    <PlayerControlsButtonSmall on_press={() => { set_connected_player_props(prop => ({...prop, loop: !prop.loop})) }}>
                        <ImLoop/>
                    </PlayerControlsButtonSmall>
                </div>
                <div className="mx-0" data-tooltip-id='subcontrols-tooltips' data-tooltip-content="Play Random Video" data-tooltip-place='top'>
                    <PlayerControlsButtonSmall on_press={() => { props.play_video(random_of(all_media)); }}>
                        <IoMdShuffle/>
                    </PlayerControlsButtonSmall>
                </div>

                
                <div className="grow"/>
                {/* <input
					className="w-1/8 ml-3 mr-1"
					type="range"
					value={volume ?? 0}
                    min={0.01}
					max={1}
					onChange={(event) => {
						const new_volume = Number(event.target.value);
						set_volume(new_volume);
						if(connected_player_ref.current?.volume){
							connected_player_ref.current.volume = volume;
						}
					}}
                step={0.01}/> */}
				<VolumeSlider value={volume} set_value={set_volume} connected_player_ref={connected_player_ref}/>
			</div>
            <Tooltip delayShow={500} style={{backgroundColor: 'white', color: "black", paddingTop: 0, paddingBottom: 0, paddingLeft: 5, paddingRight: 5,  "--rt-opacity": 1}} id="subcontrols-tooltips" />
		</div>
	);
}
