import React from 'react';

function MaxPad() {
  return (
    <>
        <div className={`pad absolute -bottom-14 -right-14 flex justify-center items-center bg-black-one rounded-full w-28 h-28`}>
          <div className={`flex justify-center items-center w-[90%] h-[90%] bg-white rounded-full`}>
            <div id="tom2" className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full text-white`}>
              C
              <audio id="C" src="" className={`clip`}></audio>
            </div>
          </div>
        </div>
    </>
  )
}

export default MaxPad;