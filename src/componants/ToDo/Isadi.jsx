import React from 'react';
import { useState } from 'react';

const Isadi = () => {
    const [data, setData] = useState(5);
    const i = () =>{
        setData(data+1);
    };
    const d = () =>{
        setData(data-1);
    };

    return (
        <div>
            <h2>Isadi</h2>
            <h1>{data} </h1>
            <button onClick={i}>INC</button>
            <button onClick={d}>DEC</button>
            
        </div>
    );
};

export default Isadi;