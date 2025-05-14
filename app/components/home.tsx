import Image from 'next/image';
import { all_media, VLCMedia } from '../media';

export default function Home(props: {
    play_video: (media: VLCMedia) => void
}){

    const workflow_img_size = 70;
    const demo_reel_media = all_media.find(media => media.title === "Demo Reel (2025)")!
    return (
        <div className="flex h-[calc(100vh-60px)] overflow-auto bg-black flex-row">
            <div className="w-1/3 m-20 mt-20">
                <h1 className="font-semibold text-5xl w-90">{"Hi, I'm Daniel, a Videographer"}</h1>
                <h2 className='mt-3'>--Subtext--</h2>
                {/* <Image className='w-114 h-156 absolute bottom-[60px] opacity-50' width={200} height={250} style={{objectFit: 'cover'}} src="/dog_ranbozo.webp" alt="DogRanbozo"/> */}
            </div>
            <div className='grid grid-row-3 mt-20'>
                <div>
                    <h2 className='font-extrabold text-2xl'>Demo Reel 2025</h2>
                    <Image className='hover:opacity-70' onDoubleClick={() => {props.play_video(demo_reel_media)}} alt={demo_reel_media.title} key={demo_reel_media.title} width={640} height={360} style={{margin: 4}} src={`https://image.mux.com/${demo_reel_media.media_json.providerMetadata.mux.playbackId}/animated.gif?width=320&height=180&fps=8&start=4&end=10`}/>
                </div>
                <div>
                    <h2 className='font-extrabold text-2xl'>About Me</h2>
                    <p>Im a Videographer that likes to work with many different mediums such as Directing, Screenwriting, Editing, VFX, 3D Modeling & Animation, and 2D Animation.</p>
                </div>
                <div>
                    <h2 className='font-extrabold text-2xl'>My Workflow</h2>
                    <h3 className='text-xl'>2020-2023</h3>
                    <div className="flex flex-row space-x-4">
                        <Image src="/shotcut-logo.webp" alt="Shotcut" width={workflow_img_size} height={workflow_img_size} />
                        <Image src="/hitfilm-express-icon.webp" alt="Hitfilm Express" width={workflow_img_size} height={workflow_img_size} />
                        <Image src="/Audacity_Logo.webp" alt="Audacity" width={workflow_img_size} height={workflow_img_size} />
                        <Image src="/Calligrakrita-logo.webp" alt="Krita" width={workflow_img_size} height={workflow_img_size} />
                    </div>
                    <h3 className='text-xl'>2024-Present</h3>
                    <div className="flex flex-row space-x-4">
                        <Image src="/Adobe_Premiere_Pro_CC_icon.svg.webp" alt="Adobe Premiere Pro" width={workflow_img_size} height={workflow_img_size} />
                        <Image src="/Adobe_After_Effects_CC_icon.svg.webp" alt="Adobe After Effects" width={workflow_img_size} height={workflow_img_size} />
                        <Image src="/Adobe_Audition_CC_icon_(2020).svg.webp" alt="Adobe Audition" width={workflow_img_size} height={workflow_img_size} />
                        <Image src="/logic-pro-icon.webp" alt="Logic Pro" width={workflow_img_size} height={workflow_img_size} />
                        <Image src="/blender-icon.webp" alt="Blender" width={workflow_img_size + (0.2 * workflow_img_size)} height={workflow_img_size} />
                        <Image src="/Calligrakrita-logo.webp" alt="Krita" width={workflow_img_size} height={workflow_img_size} />
                    </div>
                </div>
            </div>

        </div>
    );
}