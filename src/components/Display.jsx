import React, {useState} from 'react';
import {FaPowerOff} from 'react-icons/fa';

function Display() {
    const [on, setOn] = useState(true);
    const [display, setDisplay] = useState('ON');

    return (
        <div className={`absolute flex flex-col justify-between items-center bottom-full w-3/5 h-[38%] bg-black-one rounded-t-md`}>
            <div id="vol-control" className={`relative flex justify-center items-center bg-[gray] w-[90%] h-[40%] mt-1`}>
                <div id='track' className={`bg-[black] w-full h-1`}></div>
                <div id='slider' className={`absolute left-3 h-[90%] w-2 bg-black-one`}></div>
            </div>
        
            <div className={`flex justify-between items-center w-[90%] h-[38%] mb-1`}>
                <div id="display" className={`w-[80%] h-full bg-[black] shadow-inner shadow-white font-display-two text-center text-md text-red border  border-white border-r-0 border-b-0`}>
                    {display}
                </div>
                <div className={`flex justify-center items-center w-7 h-7 bg-[gray] rounded-full`}>
                    <FaPowerOff size={`24px`} className={`${on ? 'text-yellow': 'text-white'}`} />
                </div>
            </div>
        </div>
    );
}

export default Display;