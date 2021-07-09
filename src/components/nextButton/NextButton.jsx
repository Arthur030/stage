import React from 'react';
import { ReactComponent as Next } from './next.svg';
import "./main.css"

// function NextButton() {
//     let configs = require('../../config.json');
//     if(configs.config.next.valueOf(true)){
//         return <button 
//                     type="button"
//                     className="next-button"
//                     aria-label="next"
//                     >
//                     <Next />
//                 </button>;
//         } else {
//             return (null);
//         }
//     }

const NextButton = ({nextClick}) => (
    <button 
        type="button"
        className="next-button"
        aria-label="Next"
        onClick={nextClick}
    >
        <Next />
    </button>
)

export default NextButton
