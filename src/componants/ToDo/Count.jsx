import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

const Count = () => {
    const [count, setCount] = useState(0);

    const tick = () =>{
        setCount(count+1);
    };

  useEffect(()=>{
    const tick = () =>{
        setCount(count+1);
    };
      const interval = setInterval( tick, 100);
  },[]);
    return (
        <div>
            <h1> I've {count} </h1>
            {/* {count.map((elem)=>{
                return(
                <li>{elem}</li>
                );
            })} */}
            <button onClick={count}>Click</button>
        </div>
    );
};

export default Count;