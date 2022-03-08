import React from 'react';
import { useState } from 'react';
// import {handleDispatch} from ""

const Inu = () => {
    const [state, setState] = useState("");
    const handleDispatch =()=>{
        setState(...state);
    }
    return (
        <div>
            <h1>Inu</h1>
            <input type="text" onChange={(e) => setState(e.target.value)} />
            {state}
            <button onClick={handleDispatch}>
                Add Data
            </button>
        </div>
    );
};

export default Inu;