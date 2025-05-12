"use client"
import { PageType } from './types';
import React, { useEffect, useRef, useState } from 'react'
import PlayerControls from "./components/player_controls";
import Sidebar from './components/sidebar';
import Home from './components/home';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import MediaLibrary from './components/media_library';
import Video from 'next-video';
import { all_media, VLCMedia } from './media';

function GetMainComponent(page: PageType, play_video: (media: VLCMedia) => void){
    switch(page){
        default:
        case "home": return (<Home play_video={play_video}/>);
        case "portfolio": return (<Portfolio play_video={play_video}/>);
        case "media_library": return (<MediaLibrary play_video={play_video}/>);
        case "contact": return (<Contact/>);
    }
}

export default function MainPage() {
    const [page, set_page] = useState<PageType>("home");
    const [connected_player_props, set_connected_player_props] = useState<React.ComponentPropsWithoutRef<typeof Video>>({});
    const connected_player_ref = useRef<HTMLVideoElement>(null);

    const [playing_media, set_playing_media] = useState<VLCMedia>(all_media[3]);

    function play_video(media: VLCMedia){
        set_playing_media(media);
        set_page('connected_player');
    }

    useEffect(() => {
        if(page === "demo_reel"){
            set_playing_media(all_media.find(media => media.title === "Demo Reel (2025)")!);
        }
    },[page]);

	return (
		<div className="flex h-screen w-screen flex-col bg-zinc-100" aria-label="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-1 max-h-700 flex-row w-1/1 ">
                <Sidebar current_page={page} set_page={set_page}/>
                <div className="flex-3/4 bg-white border-gray-500 border-2">
                    { page === "connected_player" || page === "demo_reel" ? 
                        (
                            <div className="flex h-[calc(100vh-60px)] overflow-auto bg-black justify-center items-center">
                                <Video ref={connected_player_ref} muted={false} controls={false } src={playing_media.media_json as never} {...connected_player_props}/>
                            </div>
                        )
                        : GetMainComponent(page, play_video) }
                </div>
            </div>
            <PlayerControls set_connected_player_props={set_connected_player_props} connected_player_ref={connected_player_ref} />
		</div>
	);
}
{/* <Video as={Player} autoplay={true} controls={false} src={sillyVideo} /> */}
