import React from 'react';
import { useState } from 'react';

const Sadi = () => {
    const [text, setText]= useState('');
    const [text1, setText1] =useState("");
    const [text2, setText2] = useState("");

    const [data, setData]= useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const handleAdd = () => {
        setData([...data, text]);
        setData1([...data1, text1]);
        setData2([...data2, text2])
    }
    return (
        <div>
            <h1>Sadi</h1>
            <input type="text" placeholder='Enter Your Name' id='20' 
            className='m-2' onChange={(e)=>setText(e.target.value)} />
            <input type="text" placeholder='Enter Your City' id='20'
            className='m-2' onChange={(e)=> setText1(e.target.value)} />
            <input type="text" placeholder='Enter Your Mobile Number' id="" 
            className='m-2' onChange={(e)=> setText2(e.target.value)}/>
            <button onClick={handleAdd}>Submit</button>
            <ul>
                {data.map((item) => {
                    return(
                        <li> {item} </li>
                    )
                })}
            </ul>
            <ul>
                {data1.map((item) => {
                    return(
                    <li> {item} </li>
                    )
                })}
            </ul>
            <ul>
                {data2.map((item) => {
                    return(
                        <li> {item} </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Sadi;