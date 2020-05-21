import React from 'react';
// import logo from './logo.svg';
import './App.css';


class GenreSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: props.genre,
      music: "NONE"
    }
  }

  changeGenre = (event) => {
    this.setState({genre: event.target.value});
  }

  changeMusic = (event) => {
    this.setState({music: event.target.value});
  }

  getMusicSelect = () => {
    if (this.props.parentClass !== "card") return;

    if (this.state.genre === "ROCK") {
      return (
        <select name="music" value={this.state.music} onChange={this.changeMusic}>
          <option value="classical01">classical01</option>
          <option value="classical02">classical02</option>
          <option value="classical03">classical03</option>
          <option value="classical04">classical04</option>
          <option value="classical05">classical05</option>
          <option value="classical06">classical06</option>
          <option value="classical07">classical07</option>
          <option value="classical08">classical08</option>
          <option value="classical09">classical09</option>
          <option value="classical10">classical10</option>
          <option value="classical11">classical11</option>
          <option value="classical12">classical12</option>
          <option value="classical13">classical13</option>
          <option value="classical14">classical14</option>
          <option value="classical15">classical15</option>
        </select>
      )
    } else if (this.state.genre === "JAZZ") {
      return (
        <select name="music" value={this.state.music} onChange={this.changeMusic}>
          <option value="hiphop01">hiphop01</option>
          <option value="hiphop02">hiphop02</option>
          <option value="hiphop03">hiphop03</option>
          <option value="hiphop04">hiphop04</option>
          <option value="hiphop05">hiphop05</option>
          <option value="hiphop06">hiphop06</option>
          <option value="hiphop07">hiphop07</option>
          <option value="hiphop08">hiphop08</option>
          <option value="hiphop09">hiphop09</option>
          <option value="hiphop10">hiphop10</option>
          <option value="hiphop11">hiphop11</option>
          <option value="hiphop12">hiphop12</option>
          <option value="hiphop13">hiphop13</option>
          <option value="hiphop14">hiphop14</option>
          <option value="hiphop15">hiphop15</option>
        </select>
      )
    } else if (this.state.genre === "HIPHOP") {
      return (
        <select name="music" value={this.state.music} onChange={this.changeMusic}>
          <option value="jazz01">jazz01</option>
          <option value="jazz02">jazz02</option>
          <option value="jazz02">jazz03</option>
          <option value="jazz04">jazz04</option>
          <option value="jazz05">jazz05</option>
          <option value="jazz06">jazz06</option>
          <option value="jazz07">jazz07</option>
          <option value="jazz08">jazz08</option>
          <option value="jazz09">jazz09</option>
          <option value="jazz10">jazz10</option>
          <option value="jazz11">jazz11</option>
          <option value="jazz12">jazz12</option>
          <option value="jazz13">jazz13</option>
          <option value="jazz14">jazz14</option>
          <option value="jazz15">jazz15</option>
        </select>
      )
    } else if (this.state.genre === "CLASSICAL") {
      return (
        <select name="music" value={this.state.music} onChange={this.changeMusic}>
          <option value="rock01">rock01</option>
          <option value="rock02">rock02</option>
          <option value="rock03">rock03</option>
          <option value="rock04">rock04</option>
          <option value="rock05">rock05</option>
          <option value="rock06">rock06</option>
          <option value="rock07">rock07</option>
          <option value="rock08">rock08</option>
          <option value="rock09">rock09</option>
          <option value="rock10">rock10</option>
          <option value="rock11">rock11</option>
          <option value="rock12">rock12</option>
          <option value="rock13">rock13</option>
          <option value="rock14">rock14</option>
          <option value="rock15">rock15</option>
        </select>
      )
    } else {
      return (
        <select name="music" value={this.state.music} onChange={this.changeMusic}>
          {/* no options */}
        </select>
      )
    }
  }

  render() {
    return (
      <div id="genre" style={{display: "inline"}}>
        <select class={this.props.parentClass} name="genre" value={this.state.genre} onChange={this.changeGenre}>
          <option value="NONE">NONE</option>
          <option value="ROCK">ROCK</option>
          <option value="JAZZ">JAZZ</option>
          <option value="HIPHOP">HIPHOP</option>
          <option value="FOLK">CLASSICAL</option>
        </select>

        {this.getMusicSelect()}
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
      loopMultiplier: 0.0,
      difficulty: 1,
      loopName: "funky"
    }
  }

  changePointsPerLoop = (event) => {
    this.setState({pointsPerLoop: event.target.value});
  }

  changeLoopMultiplier = (event) => {
    this.setState({loopMultiplier: event.target.value});
  }

  removeCard = () => {
  }

  render() {
    return (
      <div name="card-div">
        <label>Card #{this.props.cardIdx}: </label>

        <label>Genre: </label>
        <GenreSelect genre="NONE" parentClass="card"/>

        <label> Points Per Loop: </label>
        <input type="text" name="pointsPerLoop" value={this.state.pointsPerLoop} onChange={this.changePointsPerLoop} style={{width: 30, textAlign: "center"}} />
        <label> Loop Multiplier: </label>
        <input type="text" name="loopMultiplier" value={this.state.loopMultiplier} onChange={this.changeLoopMultiplier} style={{width: 30, textAlign: "center"}} />
        <label> </label>
        <button type="button" onClick={this.removeCard}>Remove Card</button>
      </div>
    )
  }
}

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: [props.genre0, props.genre1, props.genre2],
      barPoints: [props.barPoints0, props.barPoints1, props.barPoints2]
    }
  }

  changeBarPoints0 = (event) => {
    let newBarPoints = [event.target.value, this.state.barPoints[1], this.state.barPoints[2]];
    this.setState({barPoints: newBarPoints});
  }

  changeBarPoints1 = (event) => {
    let newBarPoints = [this.state.barPoints[0], event.target.value, this.state.barPoints[2]];
    this.setState({barPoints: newBarPoints});
  }

  changeBarPoints2 = (event) => {
    let newBarPoints = [this.state.barPoints[0], this.state.barPoints[1], event.target.value];
    this.setState({barPoints: newBarPoints});
  }

  removeRecipe() {

  }

  render() {
    return (
      <div id="recipe" name="recipe-div" style={{display: "inline"}}>
        <label>Recipe #{this.props.recipeIdx}: </label>
        <label>Genres: 1: </label>
        <GenreSelect genre={this.state.genres[0]} parentClass="recipe"/>
        <label> 2: </label>
        <GenreSelect genre={this.state.genres[1]} parentClass="recipe"/>
        <label> 3: </label>
        <GenreSelect genre={this.state.genres[2]} parentClass="recipe"/>
        <label> Points: 1: </label>
        <input type="text" class="recipe" name="barPoints0" value={this.state.barPoints[0]} onChange={this.changeBarPoints0} style={{width: 30, textAlign: "center"}}></input>
        <label> 2: </label>
        <input type="text" class="recipe" name="barPoints1" value={this.state.barPoints[1]} onChange={this.changeBarPoints1} style={{width: 30, textAlign: "center"}}></input>
        <label> 3: </label>
        <input type="text" class="recipe" name="barPoints2" value={this.state.barPoints[2]} onChange={this.changeBarPoints2} style={{width: 30, textAlign: "center"}}></input>
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

  changeTimer = (event) => {
    this.setState({levelTimer: event.target.value});
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

  formToJSON = () => {
    let levelJSON = {};
    
    // step 1: Level metadata
    const levelNameInput = document.getElementsByName("levelName")[0];
    const levelTimerInput = document.getElementsByName("levelTimer")[0];

    levelJSON.levelName = levelNameInput.value;
    levelJSON.levelTimer = Number(levelTimerInput.value);
    levelJSON.cards = [];
    levelJSON.recipes = [];

    // step 2: Cards
    const cardDivs = document.getElementsByName("card-div");
    for (let i = 0; i < cardDivs.length; i++) {
      const cardDiv = cardDivs[i];
      const cardInputs = cardDiv.querySelectorAll("input, select");

      // first is genre, second is music, third is pointsPerLoop, fourth is loopMultiplier
      let genreVal = cardInputs[0].value;
      let musicVal = cardInputs[1].value;
      let pointsPerLoopVal = Number(cardInputs[2].value);
      let loopMultiplierVal = Number(cardInputs[3].value);

      let cardJSON = {
        genre: genreVal,
        music: musicVal,
        pointsPerLoop: pointsPerLoopVal,
        loopMultiplier: loopMultiplierVal
      };

      levelJSON.cards.push(cardJSON);
    }

    // step 3: recipes
    const recipeDivs = document.getElementsByName("recipe-div");
    for (let i = 0; i < recipeDivs.length; i++) {
      const recipeDiv = recipeDivs[i];
      const recipeInputs = recipeDiv.querySelectorAll("input, select");

      // first 3 are genre, last 3 are bar points
      let genre0Val = recipeInputs[0].value;
      let genre1Val = recipeInputs[1].value;
      let genre2Val = recipeInputs[2].value;

      let barPoints0Val = Number(recipeInputs[3].value);
      let barPoints1Val = Number(recipeInputs[4].value);
      let barPoints2Val = Number(recipeInputs[5].value);

      let recipeJSON = {
        genre0: genre0Val,
        barPoints0: barPoints0Val,
        genre1: genre1Val,
        barPoints1: barPoints1Val,
        genre2: genre2Val,
        barPoints2: barPoints2Val
      };

      levelJSON.recipes.push(recipeJSON);
    }

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
        <h1>Deck Jockey Level Creator</h1>
        <br />

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
          <label> JSON Text Output </label> <br />
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