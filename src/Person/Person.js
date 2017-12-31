import React from "react";
import Person from "./Person.css";


const person = (props) => {
    return(
        <div className = "Person"> 
            <p onClick ={props.click} >I'm {props.name} and {props.age} years old.</p>
            <h5>{props.children}</h5>
            <input type="text" onChange = {props.changed} value = {props.name}/>
        </div>
    
) 
};

export default person;