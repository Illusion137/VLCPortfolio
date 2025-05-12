import Image from 'next/image';

export default function Home(){
    return (
        <div className="flex h-1/1 bg-black items-center flex-col">
            <h1 className="font-semibold text-3xl ">{"Hi, I'm Daniel, a Videographer"}</h1>
            <h2>--Videographer--</h2>

            <h2>Demo Reel 2025</h2>
            [Demo Reel]

            <h2>My Workflow</h2>
            <h3>2020-2023</h3>
            <div className="flex flex-row space-x-4">
                <Image src="/shotcut-logo.png" alt="Shotcut" width={100} height={100} />
                <Image src="/hitfilm-express-icon.png" alt="Hitfilm Express" width={100} height={100} />
                <Image src="/Audacity_Logo.png" alt="Audacity" width={100} height={100} />
                <Image src="/Calligrakrita-logo.png" alt="Krita" width={100} height={100} />
            </div>
            <h3>2024-Present</h3>
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
    );
}