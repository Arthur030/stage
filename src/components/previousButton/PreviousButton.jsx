import React from 'react';
import { ReactComponent as Previous } from './prev.svg';
import "./main.css"

// function PreviousButton() {
//     let configs = require('../../config.json');
//     if(configs.config.previous.valueOf(true)){
//     return <button 
//                 type="button"
//                 className="next-button"
//                 aria-label="next"
//                 >
//                 <Previous />
//             </button>;
//     } else {
//         return (null);
//     }
// }
const PreviousButton = ({previousClick}) => (
    <button 
        type="button"
        className="previous-button"
        aria-label="Previous"
        onClick={previousClick}
    >
        <Previous />
    </button>
)


export default PreviousButton