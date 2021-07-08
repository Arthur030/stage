import React from 'react';
import { ReactComponent as Next } from './next.svg';
import "./main.css"

function NextButton() {
    let configs = require('../../config.json');
    if(configs.config.next.valueOf(true)){
        return <button 
                    type="button"
                    class="next-button"
                    aria-label="next"
                    >
                    <Next />
                </button>;
        } else {
            return (null);
        }
    }

export default NextButton
