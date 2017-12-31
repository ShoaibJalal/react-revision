import React from "react";


const person = (props) => {
    return(
        <div> 
            <p onClick ={props.click} >I'm {props.name} and {props.age} years old.</p>
            <h5>{props.children}</h5>
        </div>
    
) 
};

export default person;