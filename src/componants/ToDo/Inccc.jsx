import React from 'react';
import { useState } from 'react';

const Inccc = () => {
    const [a, setA] = useState(5);

    const i =() =>{
        setA(a+1);
    };
    const d = () => {
        setA(a-1);
    };
    return (
        <div>
            <h2>Inccc</h2>
            <h1> {a} </h1>
           <button onClick={i}>II</button>
           <button onClick={d}>dd</button>
        </div>
    );
};

export default Inccc;
