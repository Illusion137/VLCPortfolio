import { all_media, VLCMedia } from "../media";
import { duration_to_string } from "../utils";

function MediaItem(props: {
    data: VLCMedia; 
    index: number
}){
    return (
        <div className="flex flex-row" style={{backgroundColor: props.index % 2 === 0 ? "#E0E0E0" : "white"}}>
            <p className="text-black ml-2 text-sm min-w-55">{props.data.title}</p>
            <p className="text-black ml-3 text-sm min-w-16">{duration_to_string(props.data.duration).duration}</p>
            <p className="text-black ml-4 text-sm min-w-12">{props.data.date.toLocaleDateString().split('/').map((item, index) => index == 2 ? item.replace('20', '') : item).join('/')}</p>
            <p className="text-black ml-5 text-sm min-w-18 max-w-18">{props.data.roles.join(', ')}</p>
            <p className="text-black ml-6 text-sm min-w-10 pr-5">{props.data.about}</p>
        </div>
    )
}

export default function MediaLibrary(){
    return (
        <div className="h-30/30 overflow-y-scroll">
            <div className="flex flex-row">
                <p className="text-black ml-2 mr-50">Title</p>
                <p className="text-black mr-5">Duration</p>
                <p className="text-black mr-8">Date</p>
                <p className="text-black mr-15">Roles</p>
                <p className="text-black">About</p>
            </div>
            {
                all_media.map((item, index) => (<MediaItem data={item} index={index} key={item.title}/>))
            }
        </div>
    );
}