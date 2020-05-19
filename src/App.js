import React from 'react';
// import logo from './logo.svg';
import './App.css';

class GenreSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: props.genre
    }
  }

  changeGenre = (event) => {
    this.setState({genre: event.target.value});
  }

  render() {
    return (
      <div id="recipe" style={{display: "inline"}}>
        <select value={this.state.genre} onChange={this.changeGenre}>
          <option value="ROCK">ROCK</option>
          <option value="JAZZ">JAZZ</option>
          <option value="HIPHOP">HIPHOP</option>
          <option value="FOLK">FOLK</option>
          <option value="NONE">NONE</option>
        </select>
      </div>
    )
  }
}

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "ROCK",
      pointsPerLoop: 0.0,
      difficulty: 1,
      loopName: "funky",
      isRemoved: false
    }
  }

  changeGenre = (event) => {
    this.setState({genre: this.state.value});
  }

  removeCard = () => {
    this.setState({removed: true});
  }

  render() {
    if (this.state.isRemoved) {
      return (<br />)
    }
    else {
      return (
        <div id="card">
          <label>Card #{this.props.cardIdx}: </label>

          <label>Genre: </label>
          <GenreSelect genre="ROCK" />

          <label> Points Per Loop: </label>
          <input type="text" value={this.state.pointsPerLoop} style={{width: 30, textAlign: "center"}} />
          <label> Loop Multiplier: </label>
          <input type="text" value={this.state.pointsPerLoop} style={{width: 30, textAlign: "center"}} />
          
          <button type="button" onClick={this.removeCard}>Remove Card</button>
        </div>
      )
    }
  }
}

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.genre0);

    this.state = {
      genres: [props.genre0, props.genre1, props.genre2],
      barPoints: [props.barPoints0, props.barPoints1, props.barPoints2]
    }
  }

  render() {
    return (
      <div id="recipe" style={{display: "inline"}}>
        <label>Recipe #{this.props.recipeIdx}: </label>
        <GenreSelect genre={this.state.genres[0]} />
        <GenreSelect genre={this.state.genres[1]} />
        <GenreSelect genre={this.state.genres[2]} />
        
        <br />
      </div>
    )
  }
}

export class LevelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelName: "Example Level",
      levelTimer: 0,
      cards: [<CardForm cardIdx="1" />],
      recipes: [<RecipeForm recipeIdx = "1" genre0="JAZZ" barPoints0="100" genre1="HIPHOP" barPoints1="100"/>]
    };
  }

  changeName = (event) => {
    this.setState({levelName: event.target.value});
  }

  changeTimer(event) {
    this.setState(this.state.levelTimer, event.target.value);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert("" + this.state.levelName);
  }

  addCard = () => {
    let numCards = this.state.cards.length;
    this.state.cards.push(<CardForm cardIdx={numCards+1} />);
    this.setState({cards: this.state.cards});
  }

  addRecipe = () => {
    let numRecipes = this.state.recipes.length;
    this.state.recipes.push(<RecipeForm recipeIdx={numRecipes+1}/>);
    this.setState({recipes: this.state.recipes});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Level Name: </label> 
        <input type="text" value={this.state.levelName} onChange={this.changeName}/>
        
        <br />
        <label>Level Timer: </label>
        
        <input type="text" value={this.state.levelTimer} onChange={this.changeTimer}/>
        <br />

        <br />
        <label> Cards </label> <button type="button" onClick={this.addCard}>New Card</button>
        <br />
        <div id="cards">
          {this.state.cards.map(card => {
            return(card);
          })}
        </div> 

        <br/>
        <label>Recipes</label> <button type="button" onClick={this.addRecipe}>New Recipe</button>
        <br />
        <div id="recipes">
            {this.state.recipes.map(recipe => {
              return(recipe);
            })}
        </div> 
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