import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>I am React App.</h1>
       <Person name = "Shoaib" age="21">Hobbies: Programming </Person>
       <Person name ="Sofia" age = "23" />
       <Person name ="Sara" age ="19"/>
      </div>
    );
  }
}

export default App;
