// import Video from 'next-video';
import Image from 'next/image';
import { all_media, VLCMedia } from '../media';

export default function Portfolio(props: {
    play_video: (media: VLCMedia) => void
}){
    return (
        <div className="grid grid-cols-2 h-[calc(100vh-60px)] overflow-y-scroll bg-black">
            {all_media.map(media => (
                <div key={media.title} className='relative m-0.5'>
                    <Image className='hover:opacity-70' onDoubleClick={() => {props.play_video(media)}} alt={media.title} width={640} height={360} style={{margin: 4}} src={`https://image.mux.com/${media.media_json.providerMetadata.mux.playbackId}/animated.gif?width=320&height=180&fps=8`}/>
                    <p className='font-black bg-black absolute z-10 left-2 top-2'>{media.title}</p>
                </div>
            ))}
        </div>
    );
}