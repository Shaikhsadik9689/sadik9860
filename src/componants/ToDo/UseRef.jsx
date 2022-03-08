import React from 'react';
import { useRef } from 'react';

const UseRef = () => {
    const inp = useRef(null);
    const onButtonClick = () =>{
        inp.current.focus();
    };
    return (
        <div>
            <h2>UseRef</h2>
            <input ref={inp} type="text" />
            <button onClick={onButtonClick}>Fouse The Inpute</button>
        </div>
    );
};

export default UseRef;