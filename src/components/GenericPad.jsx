import React, {useState} from 'react';

const sizes = [
    'w-20 h-20', // min
    'w-24 h-24', // mid
    'w-28 h-28' // max
];

function GenericPad({pos, size, content, clickHandler}) {
    
    const [active, setActive] = useState(false);

    const handleClick = (event) => {
        let text = event.currentTarget
                    .childNodes[0]
                    .childNodes[0]
                    .id.replace(/-/, ' ')
                    .toUpperCase();

        clickHandler(text);
        setActive(true);
        setTimeout(() => setActive(false), 500);
    };

    return (
        <>
            <div onClick={(ev) => handleClick(ev)} className={`pad hover:cursor-pointer absolute ${pos} flex justify-center items-center bg-black-one rounded-full ${size === 'min' ? sizes[0] : size === 'mid' ? sizes[1] : sizes[2]}`}>
                <div className={`flex justify-center items-center w-[90%] h-[90%] ${active ? 'bg-yellow': 'bg-white'} rounded-full`}>
                    <div id={content.id} className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full ${active ? 'text-yellow': 'text-white'} text-3xl font-bold`}>
                        {content.keyTrigger}
                        <audio id={content.keyTrigger} src={content.url} className={`clip`}></audio>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default GenericPad;