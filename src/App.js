import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name:"Shaun", age: 21},
      {name:"Linda", age: 20},
      {name:"Emma", age: 19}
    ]
  }

  switchNameHandler = (newName) => {
    console.log("Button is clicked.");
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name:"Hania", age: 20},
        {name:"Emma", age: 20}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:event.target.value , age: 21},
        {name:"Hania", age: 20},
        {name:"Emma", age: 19}
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>I am React App.</h1>
       <button onClick= {this.switchNameHandler.bind(this, 'Shoaib!')}>Switch name</button>
       <Person 
       name = {this.state.persons[0].name}
       age={this.state.persons[0].age}
       click = {() => this.switchNameHandler('Shaun!')}
       changed = {this.nameChangedHandler}
       >Hobbies: Programming </Person>
       <Person 
       name ={this.state.persons[1].name} 
       age = {this.state.persons[1].age} />
       <Person 
       name ={this.state.persons[2].name} 
       age ={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
