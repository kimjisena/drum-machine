import React, {useState} from "react";
import Display from "./components/Display";
import GenericPad from "./components/GenericPad";

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
    const [status, setStatus] = useState(true);
    const [vol, setVol] = useState(0.2);

    const handleDisplay = (text) => {
        setDisplay(text);
    };

    const handleStatus = () => {
        if (status) {
            setDisplay('');
        } else {
            setDisplay('ON');
        }
        setStatus(!status);
    };

    const adjustVolume = (event) => {
        if  (status) {
            setVol(event.target.value);
            setDisplay('🔉 ' + Math.round(event.target.value * 100));
            setTimeout(() => setDisplay(''), 1000);
        }
    };

    // get all clips and set their volume level to vol before rendering the UI
    const clips = [].slice.call(document.getElementsByClassName('clip'));
    
    clips.forEach(sound => {
        sound.volume = vol;
    });

    return (
        <div className={`app w-full h-[100vh] flex flex-col justify-center items-center`}>
            <div id="drum-machine" className={`relative flex flex-col items-center w-[340px] h-[31%] text-xl border-2 bg-black-one`}>
                <Display display={display} on={status} clickHandler={handleStatus} value={vol} adjustVolume={adjustVolume} />

                <div className={`w-20 h-7 font-bold flex justify-center items-center text-white font-drum-logo bg-black-two rounded-md shadow-inner`}>DRUM</div>
                {/* Q, W */}
                <GenericPad pos={`-left-8 -top-8`} size={`min`} content={sounds[0]} clickHandler={handleDisplay} on={status} />
                <GenericPad pos={`-right-8 -top-8`} size={`min`} content={sounds[1]} clickHandler={handleDisplay} on={status} />

                {/* E, A, S */}
                <GenericPad pos={`left-1 top-[25%]`} size={`min`} content={sounds[2]} clickHandler={handleDisplay} on={status} />
                <GenericPad pos={`top-[15%]`} size={`mid`} content={sounds[3]} clickHandler={handleDisplay} on={status} />
                <GenericPad pos={`right-1 top-[25%]`} size={`min`} content={sounds[4]} clickHandler={handleDisplay} on={status} />

                {/* D, Z, X, C */}
                <GenericPad pos={`-bottom-12 -left-14`} size={`max`} content={sounds[5]} clickHandler={handleDisplay} on={status} />
                <GenericPad pos={`-bottom-4 left-[20%]`} size={`mid`} content={sounds[6]} clickHandler={handleDisplay} on={status} />
                <GenericPad pos={`-bottom-4 right-[20%]`} size={`mid`} content={sounds[7]} clickHandler={handleDisplay} on={status} />
                <GenericPad pos={`-bottom-12 -right-14`} size={`max`} content={sounds[8]} clickHandler={handleDisplay} on={status} />
            </div>
        </div>
    );
}

export default App;