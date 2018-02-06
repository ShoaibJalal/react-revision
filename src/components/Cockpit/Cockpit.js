import React, {Fragment} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let implementedClasses = [];
    let btnClass = classes.Button;
    if(props.showPersons){
        btnClass = [classes.Button,classes.Green].join(' ');
    }
    
    if(props.persons.length <= 2){
      implementedClasses.push(classes.Danger); // classes = ['Danger']
    }
    if (props.persons.length <= 1){
      implementedClasses.push(classes.Bold); // classes = ['Danger', 'Bold']
    }


    return(
        <Fragment>
        <h1>{props.appTitle}</h1>
        <p className = {implementedClasses.join(' ')}>This is really working!</p>
        <button
          className = {btnClass} 
          onClick={props.clicked}>Toggle Persons</button>
         </Fragment> 
    );
}
export default cockpit;