import React from 'react'

function MidPad({pos, name, id}) {
  return (
    <>
        <div className={`pad absolute ${pos} flex justify-center items-center bg-black-one rounded-full w-24 h-24`}>
          <div className={`flex justify-center items-center w-[90%] h-[90%] bg-white rounded-full`}>
            <div id={name} className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full text-white text-3xl font-bold`}>
              {id}
              <audio id={id} src="" className={`clip`}></audio>
            </div>
          </div>
        </div> 
    </>
  );
}

export default MidPad;