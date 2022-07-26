import React, {useState} from 'react';

function MinPad({pos, name, id}) {
    const [active, setActive] = useState(false);

    const handleClick = (event) => {
        setActive(true);
        setTimeout(() => setActive(false), 500);
    };

    return (
        <>
            <div onClick={(ev) => handleClick(ev)} className={`pad hover:cursor-pointer absolute ${pos} flex justify-center items-center bg-black-one rounded-full w-20 h-20`}>
                <div className={`flex justify-center items-center w-[90%] h-[90%] ${active ? 'bg-yellow': 'bg-white'} rounded-full`}>
                    <div id={name} className={`drum-pad flex justify-center items-center w-[70%] h-[70%] bg-black-one rounded-full ${active ? 'text-yellow': 'text-white'} text-3xl font-bold`}>
                        {id}
                        <audio id={id} src="" className={`clip`}></audio>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MinPad;