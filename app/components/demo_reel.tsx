import Video from 'next-video';
import sillyVideo from '../../videos/sample-5s.mp4.json';
import ConnectedPlayer from './players';

export default function DemoReel(){
    return (
        <div className="flex h-1/1 container bg-black">
            <Video as={ConnectedPlayer} autoplay={true} controls={false} src={sillyVideo} />
        </div>
    );
}