import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let implementedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Green;
    }
    
    if(props.persons.length <= 2){
      implementedClasses.push(classes.Danger); // classes = ['Danger']
    }
    if (props.persons.length <= 1){
      implementedClasses.push(classes.Bold); // classes = ['Danger', 'Bold']
    }


    return(
        <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className = {implementedClasses.join(' ')}>This is really working!</p>
        <button
          className = {btnClass} 
          onClick={props.clicked}>Toggle Persons</button>
         </div> 
    );
}
export default cockpit;