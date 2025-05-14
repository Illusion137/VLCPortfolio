import {
	IoVolumeHigh,
	IoVolumeMedium,
	IoVolumeLow,
	IoVolumeOff,
} from "react-icons/io5";
import { between, clamp } from "../utils";
import Image from "next/image";

function VolumeSliderIcon(props: { volume: number }) {
	return (
		<div className="relative left-1.5">
			<p className="text-neutral-500 relative top-3 z-1 text-xl"><IoVolumeOff/></p>
			<p className="text-amber-500 relative bottom-2 left-[4px] text-xl">
				{between(props.volume, 1, 1.25) ? (
					<IoVolumeHigh className="relative right-[0px]"/>
				) : between(props.volume, 0.5, 1) ? (
					<IoVolumeMedium className="relative right-[1px]"/>
				) : between(props.volume, 0.25, 0.5) ? (
					<IoVolumeLow className="relative right-[2px]"/>
				) : null}
			</p>
		</div>
	);
}
let mouseDown = 0;
document.body.onmousedown = function() { 
    ++mouseDown;
}
document.body.onmouseup = function() {
    --mouseDown;
}    
export default function VolumeSlider(props: { 
    value: number, 
    set_value: React.Dispatch<React.SetStateAction<number>> 
}) {
	const slider_width = 100;
	const slider_height = 20;

    return (
        <div className="flex flex-row h-9 overflow-hidden">
            <VolumeSliderIcon volume={props.value}/>
            <p className="text-gray-400 font-black text-[11px] left-5.5 top-0.5 relative">{Math.floor(props.value * 100)}%</p>
            <div className="relative h-8 overflow-hidden right-3" onMouseDown={((event) => {
                props.set_value(clamp((event.nativeEvent.offsetX / 98) * 1.25, 0, 1.25));
            })} onMouseMove={(event) => {
                if(mouseDown)
                    props.set_value(clamp((event.nativeEvent.offsetX / 98) * 1.25, 0, 1.25));
            }}>
                <Image draggable={false} className="relative z-10" alt="Volume-Slider-Base" src="/base_volume_slider.png" width={slider_width} height={slider_height}/>
                <Image draggable={false} style={{clipPath: `inset(0 ${98 - 98 * (props.value / 1.25)}px 0 0`}} className="relative bottom-7.5 z-0" alt="Volume-Slider-Color" src="/color_volume_slider.png" width={slider_width} height={slider_height}/>
            </div>
        </div>
    );
}
