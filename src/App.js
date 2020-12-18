import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
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
        <CardList monsters={this.state.mosters}>
        
        </CardList>
      </div>
    );
  }
}

export default App;
