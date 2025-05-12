// import Video from 'next-video';
import Image from 'next/image';
import { all_media, VLCMedia } from '../media';

export default function Portfolio(props: {
    play_video: (media: VLCMedia) => void
}){
    return (
        <div className="grid grid-cols-2 m-2 overflow-y-scroll bg-black">
            {all_media.map(media => (
                <Image className='hover:opacity-70' onDoubleClick={() => {props.play_video(media)}} alt={media.title} key={media.title} width={640} height={360} style={{margin: 4}} src={`https://image.mux.com/${media.media_json.providerMetadata.mux.playbackId}/animated.gif?width=320&height=180&fps=8`}/>
            ))}
        </div>
    );
}