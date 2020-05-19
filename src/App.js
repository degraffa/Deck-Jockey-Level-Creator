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
      <div id="genre" style={{display: "inline"}}>
        <select class={this.props.parentClass} name="genre" value={this.state.genre} onChange={this.changeGenre}>
          <option value="NONE">NONE</option>
          <option value="ROCK">ROCK</option>
          <option value="JAZZ">JAZZ</option>
          <option value="HIPHOP">HIPHOP</option>
          <option value="FOLK">FOLK</option>
        </select>
      </div>
    )
  }
}

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "NONE",
      pointsPerLoop: 0.0,
      difficulty: 1,
      loopName: "funky"
    }
  }

  changeGenre = (event) => {
    this.setState({genre: this.state.value});
  }

  removeCard = () => {
  }

  render() {
    return (
      <div id="card">
        <label>Card #{this.props.cardIdx}: </label>

        <label>Genre: </label>
        <GenreSelect genre="NONE" parentClass="recipe"/>

        <label> Points Per Loop: </label>
        <input type="text" class="card" name="pointsPerLoop" value={this.state.pointsPerLoop} style={{width: 30, textAlign: "center"}} />
        <label> Loop Multiplier: </label>
        <input type="text" class="card" name="loopMultiplier" value={this.state.pointsPerLoop} style={{width: 30, textAlign: "center"}} />
        <label> </label>
        <button type="button" onClick={this.removeCard}>Remove Card</button>
      </div>
    )
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

  removeRecipe() {

  }

  render() {
    return (
      <div id="recipe" style={{display: "inline"}}>
        <label>Recipe #{this.props.recipeIdx}: </label>
        <label>Genres: 1: </label>
        <GenreSelect genre={this.state.genres[0]} parentClass="recipe"/>
        <label> 2: </label>
        <GenreSelect genre={this.state.genres[1]} parentClass="recipe"/>
        <label> 3: </label>
        <GenreSelect genre={this.state.genres[2]} parentClass="recipe"/>
        <label> Points: 1: </label>
        <input type="text" class="recipe" name="barPoints0" value={this.state.barPoints[0]} style={{width: 30, textAlign: "center"}}></input>
        <label> 2: </label>
        <input type="text" class="recipe" name="barPoints1" value={this.state.barPoints[1]} style={{width: 30, textAlign: "center"}}></input>
        <label> 3: </label>
        <input type="text" class="recipe" name="barPoints2" value={this.state.barPoints[2]} style={{width: 30, textAlign: "center"}}></input>
        <label> </label>
        <button type="button" onClick={this.removeRecipe}> Remove Recipe </button>
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
      recipes: [<RecipeForm recipeIdx = "1" genre0="JAZZ" barPoints0="100" genre1="HIPHOP" barPoints1="100" genre2="ROCK" barPoints2="100"/>]
    };
  }

  changeName = (event) => {
    this.setState({levelName: event.target.value});
  }

  changeTimer(event) {
    this.setState(this.state.levelTimer, event.target.value);
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

  // formToJSON = (elements) => [].reduce.call(elements, (data, element) => {
  //   data[element.name] = element.value;
  //   return data;
  // }, {});

  formToJSON = (form) => {
    var levelJSON = {};
    
    const levelNameInput = document.getElementsByName("levelName")[0];
    const levelTimerInput = document.getElementsByName("levelTimer")[0];

    levelJSON.levelName = levelNameInput.value;
    levelJSON.levelTimer = Number(levelTimerInput.value);
    levelJSON.cards = [];
    levelJSON.recipes = [];

    return JSON.stringify(levelJSON, null, "  ");
  }

  handleSubmit = (event) => {
    // stop form from reloading the page
    event.preventDefault();

    const form = document.getElementById("level-form");

    const json = this.formToJSON(form);

    const jsonContainer = document.getElementById("json-textarea");

    jsonContainer.value = json;
  }


  render() {
    return (
      <div id="form-div">
        <form id="level-form" onSubmit={this.handleSubmit}>
          <label>Level Name: </label> 
          <input type="text" name="levelName" value={this.state.levelName} onChange={this.changeName}/>
          
          <br />
          <label>Level Timer: </label>
          
          <input type="text" name="levelTimer" value={this.state.levelTimer} onChange={this.changeTimer}/>
          <br />

          <br />
          <label> Cards </label> <button type="button" onClick={this.addCard}>New Card</button>
          <br />
          <div id="cards">
            {this.state.cards.map(card => {
              console.log(card);
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

          <br />
          <br />
          <input type="submit" value="Get Level JSON" />
        </form>
        <div id="json-text-div">
          <br />
          <textarea id="json-textarea" style={{
            width: 500,
            height: 500
          }}>

          </textarea>
        </div>

      </div>
      
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