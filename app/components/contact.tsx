import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

//https://www.albionresearch.com/tools/obfuscator

export default function Contact(){
    return (
        <div className="flex h-1/1 bg-white text-black flex-col">
            <div className="m-10 border-2 border-black">
                <div className="m-30">
                    <div className="flex flex-row">
                        <h1 className="font-semibold text-5xl min-w-50">Email</h1>
                        <h2 className="font-extrabold text-4xl min-w-50">raygoza.d@hotmail.com</h2>
                    </div>
                    <div className="flex flex-row">
                        <h1 className="font-semibold text-5xl min-w-50">Phone</h1>
                        <h2 className="font-extrabold text-4xl min-w-50">(520) 210-2324</h2>
                    </div>
                    <h1 className="font-semibold text-5xl min-w-50">Socials</h1>
                    <div className="flex flex-row items-center">
                        <a className="text-6xl hover:opacity-70 text-pink-500 mr-4" href="https://www.instagram.com/_illusion137/"><FaInstagram /></a>
                        <a className="text-7xl hover:opacity-70 text-red-500 mr-4" href="https://www.youtube.com/@Illusion137"><FaYoutube /></a>
                        <a className="text-7xl hover:opacity-70 text-blue-400 mr-4" href="https://x.com/IllusionPrimal"><FaTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}