import React from 'react';
import Studant from './Studant';
// import Staff from './Staff'
import Teacher from "./Teacher";
import "./main.css";

const MainList = (props) => {
    return (
        <div>
            <h1>{props.MainList}</h1>
            <h1>This is Main</h1>
            <p className='pa'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod! Fugit placeat <br />
                eligendi soluta? Tempora officiis porro, fuga autem adipisci, sapiente ipsum ratione,<br />
                 quos optio et eaque fugit laboriosam laborum.</p>
            {/* <Staff/> */}
            <Studant/>
            <Teacher/>
        </div>
    );
};

export default MainList;