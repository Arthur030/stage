import React from "react";
import { ReactComponent as Play } from '../../assets/play.svg';
import "./main.css";
import configs from "../../config.json"

function PlayButton() {

    
    if(configs.config.playButton.valueOf(true)){
    return <button 
            type="button"
            class="play-button"
            aria-label="Play"
            >
            <Play />
    </button>;
    } else {
        return <div className="hide-play-button"></div>;
    }

}


export default PlayButton;