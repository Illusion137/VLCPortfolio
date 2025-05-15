import Image from 'next/image';
import { all_media, VLCMedia } from '../media';
import { Tooltip } from 'react-tooltip'


export default function Home(props: {
    play_video: (media: VLCMedia) => void
}){

    const workflow_img_size = 70;
    const demo_reel_media = all_media.find(media => media.title === "Demo Reel (2025)")!
    const last_time_media = all_media.find(media => media.title === "The Last Time - Director's Cut")!
    return (
        <div className="flex h-[calc(100vh-60px)] overflow-auto bg-white text-black flex-row">
            <Image data-tooltip-content="Me :D (Daniel Raygoza)" data-tooltip-id='workflow-logo' data-tooltip-place='top' draggable={false} className='w-2/11 max-w-[300px] right-[0px] bottom-[57px] absolute' width={200} height={250} src="/dog_ranbozo.webp" alt="DogRanbozo"/>
            <div className="w-1/3 m-20 mt-20">
                <div className='flex flex-row'>
                    <h1 className="font-semibold text-5xl">{"Hi, I'm Daniel"}</h1>
                    <Image data-tooltip-content={`${new Date().getFullYear()}, Illusive`} data-tooltip-id='workflow-logo' className='relative invert-25 bottom-1.5 w-[60px] h-[60px] ' alt={"Logo"} key={"Logo"} width={60} height={60} src={`/logo.webp`}/>
                </div>
                <h2 className='mt-3'>A videographer that works in many different positions in film such as directing, screenwriting, editing, VFX, 3D modeling & animation, and 2D animation.</h2>
                <h2 className='mt-3'>{"Most of my work is in short-films, however I've also worked on 2D animations, on advertisements, and also worked on news packages for "}<a className='text-blue-500' href='https://www.youtube.com/@BuenaFilmTV'>Buena Film&TV
                </a>.</h2>
                <h2 className='mt-3'>{"I'm most proud of "}<i>{"The Last Time - Director's Cut. "}</i>The original cut won 2nd place in the 9th Annual Buena Film Festival. This short film demonstrates the use of audio mixing, sound design, cinematography, color grading, VFX, transitions and graphics.</h2>
                <Image data-tooltip-id='double-click-video' data-tooltip-content="Double click video to play" data-tooltip-place='top-end' className='hover:opacity-70 my-8' onDoubleClick={() => {props.play_video(last_time_media)}} alt={last_time_media.title} key={last_time_media.title} width={640} height={360} src={`https://image.mux.com/${last_time_media.media_json.providerMetadata.mux.playbackId}/animated.gif?width=320&height=180&fps=8&start=4&end=10`}/>
                <h2 className='mt-3'>This website design is inspired by the <a className='text-blue-500' href='https://www.videolan.org/vlc/'>VLC Media Player.</a></h2>
            </div>
            <div className='flex flex-col mt-20'>
                <div>
                    <h2 className='font-extrabold text-2xl'>Demo Reel 2025</h2>
                    <Image data-tooltip-id='double-click-video' data-tooltip-content="Double click video to play" data-tooltip-place='top-end' className='hover:opacity-70' onDoubleClick={() => {props.play_video(demo_reel_media)}} alt={demo_reel_media.title} key={demo_reel_media.title} width={640} height={360} style={{margin: 4}} src={`https://image.mux.com/${demo_reel_media.media_json.providerMetadata.mux.playbackId}/animated.gif?width=320&height=180&fps=8&start=4&end=10`}/>
                </div>
                <div className='my-5'/>
                <div>
                    <h2 className='font-extrabold text-2xl'>My Workflow</h2>
                    <h3 className='text-xl'>2020-2023</h3>
                    <div className="flex flex-row space-x-4">
                        <Image data-tooltip-content="Shotcut - Video Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/shotcut-logo.webp" alt="Shotcut" width={workflow_img_size} height={workflow_img_size} />
                        <Image data-tooltip-content="HitFilm Express - Video Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/hitfilm-express-icon.webp" alt="Hitfilm Express" width={workflow_img_size} height={workflow_img_size} />
                        <Image data-tooltip-content="CapCut - Video Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/capcut.webp" alt="Hitfilm Express" width={workflow_img_size} height={workflow_img_size} />
                        <Image data-tooltip-content="Audacity - Audio Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/Audacity_Logo.webp" alt="Audacity" width={workflow_img_size} height={workflow_img_size} />
                        <Image data-tooltip-content="Krita - Graphics Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/Calligrakrita-logo.webp" alt="Krita" width={workflow_img_size} height={workflow_img_size} />
                    </div>
                    <h3 className='text-xl'>2024-Present</h3>
                    <div className="flex flex-row space-x-4">
                        <Image data-tooltip-content="Adobe Premiere Pro - Video Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/Adobe_Premiere_Pro_CC_icon.svg.webp" alt="Adobe Premiere Pro" width={workflow_img_size} height={workflow_img_size} />
                        <Image data-tooltip-content="Adobe After Effects - Motion Graphics Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/Adobe_After_Effects_CC_icon.svg.webp" alt="Adobe After Effects" width={workflow_img_size} height={workflow_img_size} />
                        <Image data-tooltip-content="Adobe Audition - Audio Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/Adobe_Audition_CC_icon_(2020).svg.webp" alt="Adobe Audition" width={workflow_img_size} height={workflow_img_size} />
                        <Image data-tooltip-content="Logic Pro - Digital Audio Workstation (DAW)" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/logic-pro-icon.webp" alt="Logic Pro" width={workflow_img_size} height={workflow_img_size} />
                        <Image data-tooltip-content="Blender - 3D Computer Graphics Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/blender-icon.webp" alt="Blender" width={workflow_img_size + (0.2 * workflow_img_size)} height={workflow_img_size} />
                        <Image data-tooltip-content="Krita - Graphics Editor" data-tooltip-id='workflow-logo' data-tooltip-place='top' src="/Calligrakrita-logo.webp" alt="Krita" width={workflow_img_size} height={workflow_img_size} />
                    </div>
                </div>
            </div>
            <Tooltip delayShow={200} style={{backgroundColor: 'white', "--rt-opacity": 1, color: "black", paddingTop: 0, paddingBottom: 0, paddingLeft: 5, paddingRight: 5}} id="workflow-logo" />
            <Tooltip delayShow={0} style={{backgroundColor: 'white', "--rt-opacity": 1, color: "black", paddingTop: 0, paddingBottom: 0, paddingLeft: 5, paddingRight: 5}} id="double-click-video" />
        </div>
    );
}