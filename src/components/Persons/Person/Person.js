import React, {Component} from "react";
import classes from"./Person.css";
import PropTypes from 'prop-types';

class Person extends Component {
    render() {

        return(
            <div className = {classes.Person} > 
                <p onClick ={this.props.click} >I'm {this.props.name} and {this.props.age} years old.</p>
                <h5>{this.props.children}</h5>
                <input type="text" onChange = {this.props.changed} value = {this.props.name}/>
            </div>
        
    ) 
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;