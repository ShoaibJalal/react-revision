import React from "react";
import Person from "./Person.css";
import Radium from "radium";


const person = (props) => {

    const style = {
        '@media (min-width: 500px)' :{
            width: '450px'
        }
    };
    return(
        <div className = "Person" style = {style}> 
            <p onClick ={props.click} >I'm {props.name} and {props.age} years old.</p>
            <h5>{props.children}</h5>
            <input type="text" onChange = {props.changed} value = {props.name}/>
        </div>
    
) 
};

export default Radium(person);