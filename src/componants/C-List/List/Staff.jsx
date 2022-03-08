import React from 'react';

const Staff = () => {
    return (
        <div>
            <h2>Staff</h2>
             <h1>This is Staff </h1>
             <ol>
                 <li>First</li>
                 <li> <a href=""></a> Second</li>
                 <li>Third</li>
                 <li>Fourth</li>
             </ol>
            
        </div>
    );
};

export default Staff;


// import React from 'react';
// import { useState } from 'react';

// const Staff = () => {
//     const [text, setText] = useState('');
//     const [data, setdata] = useState([]);

//     const handle=()=>{
//         setdata([...data,text]);
//     }
//     return (
//         <div>
//              <h1>This is Staff </h1>
//              <ol>
//                  <input type="text" onChange={(e)=> setText(e.target.value)} />
//                  <button onClick={(handle)}>aa</button>
//                  <li>{data.First}</li>               
//                  {data.map((item)=>{
//                      return(
//                          <li>{item}</li>
//                      )
//                  })}
//              </ol>
            
//         </div>
//     );
// };

// export default Staff;