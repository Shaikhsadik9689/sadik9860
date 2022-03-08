import React, { useState } from 'react';

const Sadik12 = () => {
    const [data, setData] = useState("");

    const [text, setText] = useState([]);

    const handle=()=>{
        setText([...text, data]);
    }
    return (
        <div>
            <input  onChange={(e)=> setData(e.target.value)} type="text" placeholder='Enter Name'
             />
            <button onClick={handle}>Submit</button>

            <ul>
                {text.map((item)=>{
                    return(
                    <h1> {item} </h1>
                    )
                })}
            </ul>
        </div>
        
    );
};

export default Sadik12;