import React from "react";
import MinPad from "./components/MinPad";
import MaxPad from "./components/MaxPad";
import MidPad from "./components/MidPad";

function App() {
  return (
    <div className={`app w-full h-[100vh] flex flex-col justify-center items-center`}>
      <div id="drum-machine" className={`relative flex flex-col items-center w-[340px] h-[31%] text-xl border-2 bg-black-one`}>
        <div id="display" className={`absolute bottom-full w-3/5 h-1/3 bg-black-one`}>Display</div>
        <div className={`w-20 h-7 font-bold flex justify-center items-center text-white font-drum-logo bg-black-two rounded-md shadow-inner`}>DRUM</div>
        <MinPad pos={`-left-8 -top-8`} name={`hi-hat`} id={`Q`} />
        <MinPad pos={`-right-8 -top-8`} name={`crash`} id={`W`} />
        <MinPad pos={`left-1 top-[25%]`} name={`hi-hat2`} id={`E`} />
        <MidPad pos={`top-[15%]`} name={`tom1`} id={`A`} />
        <MinPad pos={`right-1 top-[25%]`} name={`hi-hat2`} id={`S`} />
        <MaxPad pos={`-bottom-12 -left-14`} name={`tom2`} id={`D`} />
        <MidPad pos={`-bottom-4 left-[20%]`} name={`snare`} id={`Z`} />
        <MidPad pos={`-bottom-4 right-[20%]`} name={`tom3`} id={`X`} />
        <MaxPad pos={`-bottom-12 -right-14`} name={`tom2`} id={`C`} />
      </div>
    </div>
  );
}

export default App;