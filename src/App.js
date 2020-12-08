import { Component } from 'react';
import './App.css';

class App extends Component{
  //Need to use the constructor to set the State
  constructor(){
    super();
    this.state = {
      mosters: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ mosters: users }));
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
