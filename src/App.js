import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  // constructor() {
  //   super();
  //   this.todoItems = [
  //     { title: "Go to market", isComplete: true },
  //     { title: "Buy food" , isComplete: true},
  //     { title: "Make dinner" },
  //   ];
  // }
  render() {
    return (
      <div className="App">
        <TrafficLight />;
      </div>
    );
  }
}

export default App;
