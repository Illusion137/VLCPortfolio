import last_time from '../videos/last_time.mp4.json';
import robotics from '../videos/robotics.mp4.json';
import snack_shack from '../videos/snack_shack.mp4.json';
import portable_album from '../videos/portable_album.mp4.json';
import alone_newsroom from '../videos/alone_newsroom.mp4.json';
import grinch_jerktonium from '../videos/grinch_jerktonium.mp4.json';
import hand_washing_guys from '../videos/hand_washing_guys.mp4.json';
import rambling_rumors from '../videos/rambling_rumors.mp4.json';
import colby from '../videos/colby.mp4.json';
import demo_reel_2025 from '../videos/demo_reel_2025.mp4.json';

export interface VLCMedia {
    title: string;
    media_json: typeof last_time;
    thumbnail_path: string;
    duration: number;
    date: Date;
    roles: string[];
    about: string;
}

export const all_media: VLCMedia[] = [
    {
        title: "The Last Time - Director's Cut",
        media_json: last_time,
        thumbnail_path: "last_time.png",
        duration: 360 + 20,
        date: new Date("May 5, 2025"),
        roles: ["Director", "Editor", "Color", "VFX"],
        about: "Three boys wanting to get big on YouTube try and record paranormal activity but things are more paranormal than they expected : Original-cut won 2nd place in a local film competition",
    },
    {
        title: "Robotics Newspackage",
        media_json: robotics,
        thumbnail_path: "robotics.png",
        duration: 60 + 20,
        date: new Date("Feburary 11, 2025"),
        roles: ["Director", "Editor"],
        about: "Newspackage of the Buena Robotics Club, 1726 N.E.R.D.S",
    },
    {
        title: "Snack Shack Newspackage",
        media_json: snack_shack,
        thumbnail_path: "snack_shack.png",
        duration: 55,
        date: new Date("April 24, 2025"),
        roles: ["Director", "Editor"],
        about: "Newspackage of the reopening of Buena Highschool's Snack Shack",
    },
    {
        title: "Portable Video Album Intro",
        media_json: portable_album,
        thumbnail_path: "portable_album.png",
        duration: 5,
        date: new Date("May 1, 2025"),
        roles: ["Editor", "VFX", "3D Artist"],
        about: "An intro animation to an ad promoting a Portable Video Album that would be sold by Buena High School",
    },
    {
        title: "Alone in the Newsroom",
        media_json: alone_newsroom,
        thumbnail_path: "alone_newsroom.png",
        duration: 120 + 17,
        date: new Date("March 5, 2025"),
        roles: ["Director", "Editor", "Color", "VFX"],
        about: "Two friends go to film the local news, however one of them starts to go crazy, will he be able to finish the news?",
    },
    {
        title: "The Grinch That Made Jerktonium",
        media_json: grinch_jerktonium,
        thumbnail_path: "grinch_jerktonium.png",
        duration: 120 + 31,
        date: new Date("December 16, 2024"),
        roles: ["Director", "Editor", "VFX"],
        about: "The Grinch see's jolliness during the season and trys to infect everyone with Jerktonium",
    },
    {
        title: "Hand Washing Guys",
        media_json: hand_washing_guys,
        thumbnail_path: "hand_washing_guys.png",
        duration: 60 + 24,
        date: new Date("May 15, 2024"),
        roles: ["Screenwriter", "Editor"],
        about: "A spanish car dealership commerical by the Hand Washing Guys",
    },
    {
        title: "Rambling Rumors",
        media_json: rambling_rumors,
        thumbnail_path: "rambling_rumors.png",
        duration: 120 + 35,
        date: new Date("May 20, 2023"),
        roles: ["Editor"],
        about: "My friend is getting false rumors spread of him",
    },
    // {
    //     title: "Isaiah Edit (Snippet)",
    //     file_path: isaiah_edit_snippet,
    //     thumbnail_path: "isaiah_edit_snippet.png",
    //     duration: 4,
    //     date: new Date("January 21, 2024"),
    //     roles: ["Editor", "VFX"],
    //     about: "A snippet version of the full edit of my best friend, Isaiah, aka Lafou",
    // },
    {
        title: "Colby - BTV Intro Animation",
        media_json: colby,
        thumbnail_path: "colby.png",
        duration: 5,
        date: new Date("September 10, 2024"),
        roles: ["Animator"],
        about: "An animation of the BTV mascot Colby in a run cycle",
    },
    // {
    //     title: "HomuraA",
    //     file_path: homura_a,
    //     thumbnail_path: "homura_a.png",
    //     duration: 3,
    //     date: new Date("April 20, 2024"),
    //     roles: ["Animator"],
    //     about: "A recreation of a animation of Homura",
    // },
    {
        title: "Demo Reel (2025)",
        media_json: demo_reel_2025,
        thumbnail_path: "demo_reel_2025.png",
        duration: 60 + 30,
        date: new Date("May 11, 2025"),
        roles: ["Editor", "VFX"],
        about: "A demo reel showcasing all of my works up till 2025",
    },
];