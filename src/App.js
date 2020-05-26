import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor : RED,
    }

    setInterval(() => {
      this.setState({
        currentColor : this.nextColor(this.state.currentColor),
      }) 
    }, 1000)
  }
  nextColor(color) {
    // eslint-disable-next-line default-case
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      case GREEN:
        return RED;
    }
  }
  render() {
    const { currentColor } = this.state;
    return (
      <div className="App">
        <TrafficLight currentColor={currentColor}/>;
      </div>
    );
  }
}

export default App;
