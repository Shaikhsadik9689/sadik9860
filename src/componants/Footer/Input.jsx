import React, { useState } from 'react';
// import { render } from 'react-dom';

export default function InputField({name,label}) {
  const [state, setState] = useState('')
  return (
    <div>
      <h1>Input</h1>
     {/* <label>{label}</label> */}
      <input type="text" 
    //   value={state} 
    //   name={name}
      onChange={(e) => setState(e.target.value)} />

      {state}
    </div>
  );

}
