import Image from 'next/image';
import { all_media, VLCMedia } from '../media';

export default function Home(props: {
    play_video: (media: VLCMedia) => void
}){

    const demo_reel_media = all_media.find(media => media.title === "Demo Reel (2025)")!
    return (
        <div className="flex h-1/1 bg-black flex-row">
            <div className="w-1/3 m-20 mt-20">
                <h1 className="font-semibold text-5xl w-90">{"Hi, I'm Daniel, a Videographer"}</h1>
                <h2 className='mt-3'>--Subtext--</h2>
            </div>
            <div className='mt-20'>
                <h2 className='font-extrabold text-4xl'>Demo Reel 2025</h2>
                <Image className='hover:opacity-70' onDoubleClick={() => {props.play_video(demo_reel_media)}} alt={demo_reel_media.title} key={demo_reel_media.title} width={640} height={360} style={{margin: 4}} src={`https://image.mux.com/${demo_reel_media.media_json.providerMetadata.mux.playbackId}/animated.gif?width=320&height=180&fps=8&start=4&end=10`}/>

                <h2 className='font-extrabold text-4xl'>My Workflow</h2>
                <h3 className='text-3xl'>2020-2023</h3>
                <div className="flex flex-row space-x-4">
                    <Image src="/shotcut-logo.png" alt="Shotcut" width={100} height={100} />
                    <Image src="/hitfilm-express-icon.png" alt="Hitfilm Express" width={100} height={100} />
                    <Image src="/Audacity_Logo.png" alt="Audacity" width={100} height={100} />
                    <Image src="/Calligrakrita-logo.png" alt="Krita" width={100} height={100} />
                </div>
                <h3 className='text-3xl'>2024-Present</h3>
                <div className="flex flex-row space-x-4">
                    <Image src="/Adobe_Premiere_Pro_CC_icon.svg.png" alt="Adobe Premiere Pro" width={100} height={100} />
                    <Image src="/Adobe_After_Effects_CC_icon.svg.png" alt="Adobe After Effects" width={100} height={100} />
                    <Image src="/Adobe_Audition_CC_icon_(2020).svg.png" alt="Adobe Audition" width={100} height={100} />
                    <Image src="/logic-pro-icon.png" alt="Logic Pro" width={100} height={100} />
                    <Image src="/blender-icon.png" alt="Blender" width={120} height={100} />
                    <Image src="/Calligrakrita-logo.png" alt="Krita" width={100} height={100} />
                </div>
                
                <a>Contact</a>
            </div>

        </div>
    );
}