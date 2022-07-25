import React from "react";

function App() {
  return (
    <div className={`app w-full h-[100vh] flex flex-col justify-center items-center`}>
      <div id="drum-machine" className={`relative flex flex-col items-center w-1/4 h-1/3 text-xl border-2 bg-black-one`}>
        <div id="display" className={`absolute bottom-full w-3/5 h-1/3 bg-black-one`}>Display</div>

        <div className={`pad absolute -left-8 -top-8 flex justify-center items-center bg-black-one rounded-full w-20 h-20`}>
          <div className={`flex justify-center items-center w-[90%] h-[90%] bg-white rounded-full`}>
            <div id="hi-hat" className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full text-white`}>
              Q
              <audio id="Q" src="" className={`clip`}></audio>
            </div>
          </div>
        </div>

        <div className={`pad absolute -right-8 -top-8 flex justify-center items-center bg-black-one rounded-full w-20 h-20`}>
          <div className={`flex justify-center items-center w-[90%] h-[90%] bg-white rounded-full`}>
            <div className={`w-[70%] h-[70%] bg-black-one rounded-full`}></div>
          </div>
        </div>

        <div id="crash" className={`drum-pad`}>
          W
          <audio id="W" src="" className={`clip`}></audio>
        </div>
        <div id="hi-hat2" className={`drum-pad`}>
          E
          <audio id="E" src="" className={`clip`}></audio>
        </div>

        <div className={`pad absolute top-[25%] flex justify-center items-center bg-black-one rounded-full w-24 h-24`}>
          <div className={`flex justify-center items-center w-[90%] h-[90%] bg-white rounded-full`}>
            <div className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full text-white`}>
              A
              <audio id="A" src="" className={`clip`}></audio>
            </div>
          </div>
        </div>


        <div id="ride" className={`drum-pad`}>
          S
          <audio id="S" src="" className={`clip`}></audio>
        </div>
        <div id="kick" className={`drum-pad`}>
          D
          <audio id="D" src="" className={`clip`}></audio>
        </div>
        <div id="snare" className={`drum-pad`}>
          Z
          <audio id="Z" src="" className={`clip`}></audio>
        </div>
        <div id="tom3" className={`drum-pad`}>
          X
          <audio id="X" src="" className={`clip`}></audio>
        </div>

        <div className={`pad absolute -bottom-14 -right-14 flex justify-center items-center bg-black-one rounded-full w-28 h-28`}>
          <div className={`flex justify-center items-center w-[90%] h-[90%] bg-white rounded-full`}>
            <div id="tom2" className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full text-white`}>
              C
              <audio id="C" src="" className={`clip`}></audio>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;