import React from 'react';
import  { useState } from 'react';

const ToodoList = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);

    const handleAdd=() =>{
    setData([...data, text]);
    // document.getElementById("input1").value =" ";
    // setText("");
    };
    return (
        <div className='App'>
            <h2>ToodoList</h2>
            <input 
            type="text" 
            className='m-2' 
            id='input' 
            onChange={(e)=> setText(e.target.value)} />

            <button onClick={handleAdd}>Add data</button>
            {/* <button onClick={clearHandler}>Clear</button> */}
            <h1>Todo List</h1>
            <ul>    
                {data.map((elem) =>{
                    return(
                    <li>{elem}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ToodoList;