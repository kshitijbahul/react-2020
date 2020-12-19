import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import './App.css';

class App extends Component{
  //Need to use the constructor to set the State
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }
  render(){
    /**
     * This is equivalant to 
     * const mosnters = this.state.monsters
     * const searchField = this.state.searchField
     * */ 
    const {monsters, searchField} = this.state;
    const filteredMonsters  = monsters.filter(eachMonster => eachMonster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <input type='search' placeholder='search mosnters' onChange={e=> this.setState({searchField: e.target.value})}></input>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
