import React from 'react';
// import NavigationBar from "../A-Nevigation/NavigationBar";
import Cards from "../B-Cards/Cards";
import MainList from '../C-List/List/MainList';
import Form from "../D-Home/Form"
const Home = () => {
    return (
        <div>
    <h1>Home</h1>
            {/* <NavigationBar/> */}
            <Cards/>
            <MainList MainList = "Sadik"/>
            <Form/>
        </div>
    );
};

export default Home;