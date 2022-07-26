import React from 'react';
import {FaPowerOff} from 'react-icons/fa';

function Display({display, on, clickHandler, value, adjustVolume}) {

    return (
        <div className={`absolute flex flex-col justify-between items-center bottom-full w-3/5 h-[38%] bg-black-one rounded-t-md`}>
            <div id="vol-control" className={`relative flex justify-center items-center bg-black-two w-[90%] h-[40%] mt-1`}>
                <input className={`w-full hover:cursor-pointer`} max='1' min='0' onChange={(ev) => adjustVolume(ev)} step='0.01' type='range' value={value} />
            </div>

            <div className={`flex justify-between items-center w-[90%] h-[38%] mb-1`}>
                <div id="display" className={`w-[80%] h-full bg-[black] shadow-inner shadow-white font-display-default font-extrabold text-center text-xl text-red border  border-white border-r-0 border-b-0`}>
                    {display}
                </div>
                <div onClick={() => clickHandler()} className={`flex justify-center items-center hover:cursor-pointer w-7 h-7 ${on ? 'bg-red': 'bg-[gray]'} rounded-full`}>
                    <FaPowerOff size={`24px`} className={`text-white`} />
                </div>
            </div>
        </div>
    );
}

export default Display;