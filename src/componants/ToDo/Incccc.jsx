import React from 'react';
import { useState } from 'react';

const Incccc = () => {
    const [b, setB] = useState(2);

    const i = () =>{
       setB(b+1);
    };
    const d =()=>{
        setB(b-1);
    };
    return (
        <div>
            <h2>Incccc</h2>
            <h1>{b}</h1>
            <button onClick={i}>IIII</button>
            <button onClick={d}>DDDD</button>
        </div>
    );
};

export default Incccc;