import React, { useState, useEffect } from 'react';

const ToodoList = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    // const [count, setCount] = useState(0);
   
    // useEffect(()=>{
    //     alert("Sorry");
    // },[]);

    const handleAdd=() =>{
    setData([...data, text]);
    // document.getElementById("input1").value =" ";
    // setText("");
    };
    return (
        <div className='App'>
            <h2 contentEditable="true">ToodoList</h2>

            <input type="text" ClassName='m-2' id='input' onChange={(e)=> setText(e.target.value)} />
            <button onClick={handleAdd}> Add data </button>

            {/* <button onClick={clearHandler}>Clear</button> */}
            {/* <h1>Todo List</h1> */}

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