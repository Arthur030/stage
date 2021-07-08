import React from 'react';
import { ReactComponent as Previous } from './prev.svg';
import "./main.css"

function PreviousButton() {
    let configs = require('../../config.json');
    if(configs.config.previous.valueOf(true)){
    return <button 
                type="button"
                class="next-button"
                aria-label="next"
                >
                <Previous />
            </button>;
    } else {
        return (null);
    }
}

export default PreviousButton