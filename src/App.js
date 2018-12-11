import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tabletop from 'tabletop';

import {tableURL} from './config';

import Card from './Card';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount = () => {
    Tabletop.init( { 
      key: tableURL,
      callback: (data, tabletop) => { 
           this.setState({
            cards: data
           })
       },
      simpleSheet: true 
    } )
  }
  render() {
    const {
      cards = []
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cartes de jeu sur les perceptions de l'enseignement</h1>
        </header>
        <div className="cards-container">
          {
            cards.map((card, index) => (
              <Card key={index} card={card} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
