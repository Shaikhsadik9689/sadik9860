import React from 'react';
import { useState } from 'react';

const Bd = () => {
    const [sad, setSad] = useState('');

    const [sha,setSha] = useState([]);

    const latur=() => {
        setSha([...sha, sad]);
    };
    return (
        <div>
            <h1>Bd</h1>
            <input type="text" onChange={(e)=> setSad(e.target.value)} />
            <button onClick={latur}>Milao</button>
            <ul>
                {sha.map((tillu)=>{
                    return(
                        <li>{tillu}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Bd;
