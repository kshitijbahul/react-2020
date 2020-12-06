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
            {this.state.string}
          </p>
          <button onClick = {()=> this.setState({string : 'Hello Kshitij' })} >
            Click Me to change !
          </button>
        </header>
      </div>
    );
  }
}

export default App;
