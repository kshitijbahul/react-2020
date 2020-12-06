import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  //Need to use the constructor to set the State
  constructor(){
    super();
    this.state = {
      string: "Hello KB"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.string}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
