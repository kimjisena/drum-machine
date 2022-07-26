import React, {useState, useEffect} from 'react';

const sizes = [
    'w-20 h-20', // min
    'w-24 h-24', // mid
    'w-28 h-28' // max
];

function GenericPad({pos, size, content, clickHandler, on}) {
    
    const [active, setActive] = useState(false);

    const playSound = () => {
        const sound = document.getElementById(content.keyTrigger);
        sound.currentTime = 0;
        sound.play();
    }

    const play = (text) => {
        clickHandler(text);
        setActive(true);
        playSound();
        setTimeout(() => setActive(false), 300); // simulate audio playing
    }

    const handleClick = (event) => {
        if (on) {
            let text = event.currentTarget
                        .childNodes[0]
                        .childNodes[0]
                        .id.replace(/-/, ' ')
                        .toUpperCase();

            play(text);
        }
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === content.keyCode) {
            let text = document
                        .getElementById(String.fromCharCode(event.keyCode))
                        .parentNode.id
                        .replace(/-/, ' ')
                        .toUpperCase();

            if (on) {
                play(text);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    });

    return (
        <>
            <div onClick={(ev) => handleClick(ev)} className={`pad hover:cursor-pointer absolute ${pos} flex justify-center items-center bg-black-one rounded-full ${size === 'min' ? sizes[0] : size === 'mid' ? sizes[1] : sizes[2]}`}>
                <div className={`flex justify-center items-center w-[90%] h-[90%] ${on ? 'bg-red' : 'bg-white'} ${active ? 'bg-yellow': ''} rounded-full`}>
                    <div id={content.id} className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full text-white text-3xl font-bold`}>
                        {content.keyTrigger}
                        <audio id={content.keyTrigger} src={content.url} className={`clip`}></audio>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default GenericPad;