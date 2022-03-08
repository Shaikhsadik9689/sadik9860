import React from 'react';
import { useState } from 'react';

const Decre = () => {
    const [text, setText] = useState(0);

    const inc = ()=>{
        setText(text+1);
    }
    const dec = () =>{
        if(text>0){
            setText(text-1);
        }else{
            setText(0);
        }
    }
    return (
        <div>
            <h2>Decre</h2>
            <h1>{text}</h1>
            <button onClick={inc}>iii</button>
            <button onClick={dec}>ppp</button>
        </div>
    );
};

export default Decre;