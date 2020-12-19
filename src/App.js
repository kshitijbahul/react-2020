import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
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
  onSearch(e) {
    
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
        <SearchBox placeHolder='Filter monsters' handleChange={e=> this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
