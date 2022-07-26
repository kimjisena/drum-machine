import React, {useState} from "react";
import Display from "./components/Display";
import MinPad from "./components/MinPad";
import MaxPad from "./components/MaxPad";
import MidPad from "./components/MidPad";

const sounds = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }
];

function App() {
    const [display, setDisplay] = useState('ON');

    const handleClick = (event) => {
        let text = event.currentTarget
                    .childNodes[0]
                    .childNodes[0]
                    .id.replace(/-/, ' ').toUpperCase();

        setDisplay(text);
    };

    return (
        <div className={`app w-full h-[100vh] flex flex-col justify-center items-center`}>
            <div id="drum-machine" className={`relative flex flex-col items-center w-[340px] h-[31%] text-xl border-2 bg-black-one`}>
                <Display display={display} />

                <div className={`w-20 h-7 font-bold flex justify-center items-center text-white font-drum-logo bg-black-two rounded-md shadow-inner`}>DRUM</div>

                <MinPad pos={`-left-8 -top-8`} name={sounds[0].id} id={sounds[0].keyTrigger} />
                <MinPad pos={`-right-8 -top-8`} name={sounds[1].id} id={sounds[1].keyTrigger} />
                <MinPad pos={`left-1 top-[25%]`} name={sounds[2].id} id={sounds[2].keyTrigger} />

                <MidPad clickHandler={handleClick} pos={`top-[15%]`} name={sounds[3].id} id={sounds[3].keyTrigger} />

                <MinPad pos={`right-1 top-[25%]`} name={sounds[4].id} id={sounds[4].keyTrigger} />
                <MaxPad pos={`-bottom-12 -left-14`} name={sounds[5].id} id={sounds[5].keyTrigger} />

                <MidPad clickHandler={handleClick} pos={`-bottom-4 left-[20%]`} name={sounds[6].id} id={sounds[6].keyTrigger} />
                <MidPad clickHandler={handleClick} pos={`-bottom-4 right-[20%]`} name={sounds[7].id} id={sounds[7].keyTrigger} />

                <MaxPad pos={`-bottom-12 -right-14`} name={sounds[8].id} id={sounds[8].keyTrigger} />
            </div>
        </div>
    );
}

export default App;