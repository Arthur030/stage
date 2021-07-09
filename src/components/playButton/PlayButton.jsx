import React from "react";
import { ReactComponent as Play } from '../playButton/play.svg';
import "./main.css";
import { ReactComponent as Pause } from '../playButton/pause.svg';


// function PlayButton() {
    
//     if(configs.config.playButton.valueOf(true)){
//         isPlaying
//     return <button 
//             type="button"
//             class="play-button"
//             aria-label="Play"
//             onClick={isPlaying(false)}
//             >
//             <Play />
//     </button>;
//     } else {
//         return <div className="hide-play-button"></div>;
//     }

// }

const PlayButton = ({playPauseClick, isPlaying}) => 
(
    isPlaying ? (<button 
    type="button"
    className="pause-button"
    aria-label="Pause"
    onClick={ () => playPauseClick(false)}
    >
    <Pause />
</button>) : (<button 
        type="button"
        className="play-button"
        aria-label="Play"
        onClick={ () => playPauseClick(true)}
        >
        <Play />
    </button>)
    
    
)


export default PlayButton;