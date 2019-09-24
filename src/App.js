import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'
import Filters from './Filters.js'

class App extends Component {

  state =  {
    drinks: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/alcohols')
      .then(response => response.json())
      .then(json => {
        this.setState({
          drinks: json
        })
      })
  }

  getAlcohols = () => {
    if (!!this.state.drinks.cocktails){
      return this.state.drinks.cocktails.map((cocktail, i) => {
        return <Card cocktail={cocktail} />
      })
    }
  }

  render(){
    return (
      <div className="App">
      <header>
        JOOSBar
      </header>
        <Filters />
        <div className="card-container">
          {this.getAlcohols()}
        </div>
      </div>
    )}
}

export default App;
