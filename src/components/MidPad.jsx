import React from 'react'

function MidPad() {
  return (
    <>
        <div className={`pad absolute top-[25%] flex justify-center items-center bg-black-one rounded-full w-24 h-24`}>
          <div className={`flex justify-center items-center w-[90%] h-[90%] bg-white rounded-full`}>
            <div className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full text-white`}>
              A
              <audio id="A" src="" className={`clip`}></audio>
            </div>
          </div>
        </div> 
    </>
  );
}

export default MidPad;