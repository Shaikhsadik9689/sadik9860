import React from 'react';
import { useState } from 'react';

const Increment = () => {
    const [num, setNum] = useState(0);

    const inc = () =>{
        // if(num>0){
            setNum(num+1);
        // }else{
        //     setNum(18)
        // }
    };
    const dec =() => {
        if(num>0){
            setNum(num-1);
        }else{
            alert("Sorry");
            setNum(0)
        }
    }
    
    return (
        <div>
            <h2>Increment</h2>
            <h1>{num}</h1>
            <button onClick={inc}>Increment</button>            
            <button onClick={dec}>decrement</button>            
        </div>
    );
};
export default Increment;