// import Video from 'next-video';
import Image from 'next/image';
import { all_media, VLCMedia } from '../media';

export default function Portfolio(props: {
    play_video: (media: VLCMedia) => void
}){
    return (
        <div className="grid grid-cols-2 p-2 h-[calc(100vh-60px)] overflow-y-scroll bg-black">
            {all_media.map(media => (
                <div key={media.title} className='relative'>
                    <Image className='hover:opacity-70 px-1 w-full' onDoubleClick={() => {props.play_video(media)}} alt={media.title} width={640} height={360} style={{margin: 4}} unoptimized={true} src={`https://image.mux.com/${media.media_json.providerMetadata.mux.playbackId}/animated.gif?width=320&height=180&fps=8&start=${media.thumbnail_start ?? 0}`}/>
                    <p className='font-black bg-black absolute z-10 left-4 top-3'>{media.title}</p>
                </div>
            ))}
        </div>
    );
}