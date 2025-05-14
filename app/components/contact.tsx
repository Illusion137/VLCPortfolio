import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

//https://www.albionresearch.com/tools/obfuscator

export default function Contact(){
    return (
        <div className="flex h-[calc(100vh-60px)] max-w-[calc(100vw-200px)] overflow-auto bg-white text-black flex-col">
            <div className="m-10 border-2 overflow-hidden border-black">
                <div className="m-30">
                    <div className="flex flex-row">
                        <h1 className="font-semibold text-5xl min-w-50">Email</h1>
                        <h2 className="font-extrabold text-4xl">raygoza.d@hotmail.com</h2>
                    </div>
                    <div className="flex flex-row">
                        <h1 className="font-semibold text-5xl min-w-50">Phone</h1>
                        <h2 className="font-extrabold text-4xl">(520) 210-2324</h2>
                    </div>
                    <h1 className="font-semibold text-5xl min-w-50">Socials</h1>
                    <div className="flex flex-row items-center mt-4">
                        <a className="text-7xl hover:opacity-70 text-pink-500 mr-4" href="https://www.instagram.com/_illusion137/"><FaInstagram /></a>
                        <a className="text-7xl hover:opacity-70 text-blue-400 mr-4" href="https://x.com/IllusionPrimal"><FaTwitter /></a>
                        <a className="text-7xl hover:opacity-70 text-black mr-4" href="https://github.com/Illusion137"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}