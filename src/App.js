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
    this.handleChange = this.handleChange.bind(this); // We wre here binding the this keyword with the this keyword in the handlechange function
    //this has been set for us here since we called super() and react did some work for us
    //then the question really becomes functions v/s Arrow functions
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }
  handleChange(e) {
    this.setState({searchField: e.target.value}); // This line here without setting context in the constructor will show this as undefined
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
        <SearchBox placeHolder='Filter monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
