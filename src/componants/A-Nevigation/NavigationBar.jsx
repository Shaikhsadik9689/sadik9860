import React from "react";
import "./NavigationBar.css"

const NavigationBar = (props) => {
    return(
        <div>
            <h2>{props.NavigationBar}</h2>
            <ul>
                <li>
                    <a href="">{props.Home}</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Products</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
            </ul>
        </div>
    )
}
export default NavigationBar
