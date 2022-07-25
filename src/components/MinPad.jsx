import React from 'react';

function MinPad() {
  return (
    <>
        <div className={`pad absolute -left-8 -top-8 flex justify-center items-center bg-black-one rounded-full w-20 h-20`}>
          <div className={`flex justify-center items-center w-[90%] h-[90%] bg-white rounded-full`}>
            <div id="hi-hat" className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full text-white`}>
              Q
              <audio id="Q" src="" className={`clip`}></audio>
            </div>
          </div>
        </div>
    </>
  );
}

export default MinPad;