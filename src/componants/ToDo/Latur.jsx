import React from 'react';
import { useState } from 'react';
import "./Latur.css";

const Latur = () => {
    const [mat1, setMat1] = useState("");
    const [mat2, setMat2] = useState("");
    const [mat3, setMat3] = useState("");
    
    const [cat1, setCat1] = useState([]);
    const [cat2, setCat2] = useState([]);
    const [cat3, setCat3] = useState([]);

    const kundalAdd= () =>{
        setCat1  ([...cat1, mat1]);
        setCat2  ([...cat2, mat2]);
        setCat3  ([...cat3, mat3]);
    }
    return (
        <div className='lat'>
            <h2>Latur</h2>
            <h1>ToodoList</h1>
            <input type="text" className='fullname' onChange={(e) => setMat1(e.target.value)} /><br/><br/><br/>
            <input type="text" className='fullname' onChange={(e) => setMat2(e.target.value)} /><br/><br/><br/>
            <input type="text" className='fullname' onChange={(e) => setMat3(e.target.value)} />
            <button className='but' onClick={kundalAdd}>Add Submit</button>
            <ul>
                {cat1.map((item) => {
                    return(
                        <li>{item}</li>
                    )
                })}
            </ul>
            <ul>
                {cat2.map((item)=>{
                    return(
                        <li>{item} </li>
                    )
                })}
            </ul>
            <ul>
                {cat3.map((item) => {
                    return(
                        <li>{item} </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Latur;