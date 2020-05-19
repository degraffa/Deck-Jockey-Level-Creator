import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Card {
  constructor(genre, pointsPerLoop, difficulty, loopName) {
    this.genre = genre;
    this.pointsPerLoop = pointsPerLoop;
    this.difficulty = difficulty;
    this.loopName = loopName;
  }
}

class Recipe {
  constructor(genre0, barPoints0, genre1, barPoints1, genre2, barPoints2) {
    this.genre0 = genre0;
    this.barPoints0 = barPoints0;
    this.genre1 = genre1;
    this.barPoints1 = barPoints1;
    this.genre2 = genre2;
    this.barPoints2 = barPoints2;
  }
}

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "ROCK",
      pointsPerLoop: 0.0,
      difficulty: 1,
      loopName: "funky"
    }
  }
}

export class LevelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelName: "",
      levelTimer: 0,
      cards: [],
      recipes: []
    };
  }

  changeName = (event) => {
    this.setState({levelName: event.target.value});
  }

  changeTimer(event) {
    this.setState(this.state.levelTimer, event.target.value);
  }

  addCard() {
    let card = Card(0, 0, 0,0);
    this.state.cards.push(card);
  }

  changeCard(cardIdx) {
    let card = Card(0, 0, 0, 0);
    this.setState(this.state.cards[cardIdx], card);
  }

  addRecipe() {
    let recipe = Recipe(0, 0, 0, 0, 0, 0);
    this.state.recipes.push(recipe);
  }

  changeRecipe(recipeIdx) {
    let recipe = Recipe(0, 0, 0, 0, 0, 0);
    this.setState(this.state.recipes[recipeIdx], recipe);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("" + this.state.levelName);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Level Name: </label> 
        <input type="text" value={this.state.levelName} onChange={this.changeName}/> <br />
        <input type="submit" value="Get Level JSON" />
      </form>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <LevelForm />
      </header>
    </div>
  );
}



export default App;