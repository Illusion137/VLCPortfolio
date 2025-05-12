"use client"
import { PageType } from './types';
import React, { useRef, useState } from 'react'
import PlayerControls from "./components/player_controls";
import Sidebar from './components/sidebar';
import Home from './components/home';
import Contact from './components/contact';
import DemoReel from './components/demo_reel';
import Portfolio from './components/portfolio';
import MediaLibrary from './components/media_library';
import Video from 'next-video';
import sillyVideo from '../videos/sample-5s.mp4.json';

function GetMainComponent(page: PageType){
    switch(page){
        default:
        case "home": return (<Home/>);
        case "portfolio": return (<Portfolio/>);
        case "demo_reel": return (<DemoReel/>);
        case "contact": return (<Contact/>);
        case "media_library": return (<MediaLibrary/>);
    }
}

export default function MainPage() {
    const [page, set_page] = useState<PageType>("home");
    const [connected_player_props, set_connected_player_props] = useState<React.ComponentPropsWithoutRef<typeof Video>>({});
    const connected_player_ref = useRef<HTMLVideoElement>(null);

	return (
		<div className="flex h-screen w-screen flex-col" aria-label="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-1 max-h-185 flex-row w-1/1 ">
                <Sidebar current_page={page} set_page={set_page}/>
                <div className="flex-16/9 container bg-white border-gray-500 border-2">
                    { page === "connected_player" ? 
                        (
                            <div className="flex h-1/1 container bg-black">
                                <Video ref={connected_player_ref} muted={true} controls={false} src={sillyVideo as never} {...connected_player_props}/>
                            </div>
                        )
                        : GetMainComponent(page) }
                </div>
            </div>
            <PlayerControls set_connected_player_props={set_connected_player_props} connected_player_ref={connected_player_ref} />
		</div>
	);
}
{/* <Video as={Player} autoplay={true} controls={false} src={sillyVideo} /> */}
