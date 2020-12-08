import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  //Need to use the constructor to set the State
  constructor(){
    super();
    this.state = {
      mosters: [
        { 
          name: "Monster 1",
          id: '112dsad'
        },
        { 
          name: "Monster 2",
          id: 'qweuqwn12'
        },
        { 
          name: "Monster 3",
          id: 'qweasdasewqwe'
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.state.mosters.map(monster => 
            (
              <h1 key={monster.id}>{monster.name}</h1>
            )
          )
        }
      </div>
    );
  }
}

export default App;
