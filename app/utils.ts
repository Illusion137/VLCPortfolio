export function duration_to_string(track_duration: number|undefined): {left: number, duration: string} {
    if(track_duration === undefined) return {left: 0, duration: "--:--"};
    track_duration = Math.round(track_duration);
    if(track_duration/3600 >= 1) {
        const hours = Math.floor(track_duration / 3600);
        const minutes = Math.floor(track_duration % 3600 / 60);
        const seconds = Math.floor(track_duration % 3600 % 60);
        return {left: 40, duration: `${String(hours)}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`};
    } else if(track_duration / 60 >= 1) {
        const minutes = Math.floor(track_duration / 60);
        const seconds = Math.floor(track_duration % 60);
        return {left: 50, duration: `${String(minutes)}:${String(seconds).padStart(2,'0')}`};
    } else return {left: 58, duration: `0:${String(track_duration).padStart(2,'0')}`};
}

export function random_of<T>(arr: T[]): T {
    const randidx = Math.floor(Math.random() * (Math.floor(arr.length) - 0) + 0);
    return arr[randidx];
}