import React from 'react';
import { useRef } from 'react';

const Ref = () => {
    const input =useRef(null);
    const handle =()=>{
        input.current.focus();
    }
    return (
        <div>
            <h2>Ref</h2>
            <input ref={input} type="text" />
            <button onClick={handle}>aaaaaad</button>
            
        </div>
    );
};

export default Ref;