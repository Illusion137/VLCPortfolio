import Video from 'next-video';
import sillyVideo from '../../videos/sample-5s.mp4.json';

export default function Portfolio(){
    return (
        <div className="h-29/30 grid grid-cols-2 m-2 overflow-y-scroll">
            <Video style={{margin: 4, opacity: 0.8}} autoplay={false} controls={false} src={sillyVideo} />
            <Video style={{margin: 4}} autoplay={false} controls={false} src={sillyVideo} />
            <Video style={{margin: 4, opacity: 0.8}} autoplay={false} controls={false} src={sillyVideo} />
            <Video style={{margin: 4, opacity: 0.8}} autoplay={false} controls={false} src={sillyVideo} />
            <Video style={{margin: 4, opacity: 0.8}} autoplay={false} controls={false} src={sillyVideo} />
            <Video style={{margin: 4, opacity: 0.8}} autoplay={false} controls={false} src={sillyVideo} />
            <Video style={{margin: 4, opacity: 0.8}} autoplay={false} controls={false} src={sillyVideo} />
            <Video style={{margin: 4, opacity: 0.8}} autoplay={false} controls={false} src={sillyVideo} />
        </div>
    );
}