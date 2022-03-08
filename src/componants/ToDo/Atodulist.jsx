import React from 'react';
import { useState } from 'react';

const Atodulist = () => {
    const [data, setData] = useState("");
    const [text, setText] = useState([]);

    const handle = () => {
        setText([...text, data ]);
    };
    return (
        <div>
            <h1>Atodulist</h1>
            <input onChange={(e)=> setData(e.target.value)} type="text" />
            <button onClick={handle}>Add</button>
            <h1>TTTTT</h1>
            <ul>
            {text.map((item)=>{
                return (
                <li>{item}</li>
                )
            })}
            </ul>
        </div>
    );
};

export default Atodulist;