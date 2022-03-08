import React, {useState } from 'react';

const Td = () => {
    const [data, setData] = useState("");

    const [text, setText] = useState([]);

    const handle=()=>{
        setText([...text, data]);
        // document.getElementById("input").value =" ";
    };
    return (
        <div className='App'>
            <h1>Td</h1>
            <input  onChange={(e) => setData(e.target.value)} type="text" />
            <button onClick={handle}>Add</button>
            <h1>Sadik</h1>
            <ul>
            {text.map((item)=>{
                 return(
                    <li>{item}</li>
               )
            })}
            </ul>
        </div>
    );
}

export default Td;