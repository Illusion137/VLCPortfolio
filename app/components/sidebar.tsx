import { BsCameraReelsFill } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";
import { IoLibrarySharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { PageType } from "../types";

function SidebarButton(props: {
    text: string;
    current_page: PageType;
    children?: React.ReactNode;
    set_page: React.Dispatch<React.SetStateAction<PageType>>
;
}){
    const page_id = props.text.trim().toLowerCase().replaceAll(' ', '_');
    const selected = page_id === props.current_page;
    return (
        <a aria-label={"selected" + selected}  id={page_id} href={"#" + page_id} onClick={() => props.set_page(page_id as PageType)} className="target flex flex-row mb-1 w-1/1 hover:bg-blue-200 target:bg-neutral-300">
            <p className="flex text-amber-500 self-center ml-2 mr-2.5 text-2xl">{props.children}</p>
            <p className="flex text-black self-center text-sm">{props.text}</p>
        </a>
    );
}
export default function Sidebar(props: {
    current_page: PageType;
    set_page: React.Dispatch<React.SetStateAction<PageType>>;
}){

    const page_title = props.current_page.split('_').map(str => str.split('').map((s,i) => i === 0 ? s.toUpperCase() : s).join('')).join(' ');
    return (
        <div className="flex-1/4 min-w-35 max-w-50 container bg-zinc-100">
            <h1 className="text-black font-black ml-1 font-stretch-expanded">{page_title}</h1>
            <SidebarButton text="Home" current_page={props.current_page} set_page={props.set_page}><FaHome/></SidebarButton>
            <SidebarButton text="Portfolio" current_page={props.current_page} set_page={props.set_page}><IoLibrarySharp/></SidebarButton>
            <SidebarButton text="Media Library" current_page={props.current_page} set_page={props.set_page}><FaPhotoVideo/></SidebarButton>
            <SidebarButton text="Demo Reel" current_page={props.current_page} set_page={props.set_page}><BsCameraReelsFill/></SidebarButton>
            <SidebarButton text="Contact" current_page={props.current_page} set_page={props.set_page}><MdContactSupport/></SidebarButton>
        </div>
    );
};