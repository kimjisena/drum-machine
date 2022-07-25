import React from 'react';
import {FaPowerOff} from 'react-icons/fa';

function Display() {
  return (
    <div className={`absolute flex flex-col justify-between items-center bottom-full w-3/5 h-[38%] bg-black-one`}>
        <div id="display" className={`w-[70%] h-[40%] bg-black-two shadow-inner mt-1 font-display-two text-center text-md text-red`}>HI HAT 2</div>

        <div id="controls" className={`flex justify-between items-center w-[90%] h-[38%] mb-1`}>
            <div className={`bg-[gray] w-[80%]`}>volume</div>
            <div className={`flex justify-center items-center w-7 h-7 bg-[gray] rounded-full`}>
                <FaPowerOff size={`24px`} className={`text-white`} />
            </div>
        </div>
    </div>
  );
}

export default Display;