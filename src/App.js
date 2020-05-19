import React from 'react';
// import logo from './logo.svg';
import './App.css';

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

  changeGenre = (event) => {
    this.setState({genre: this.state.value});
  }

  render() {
    return (
      <form>
        <label>Card #{this.props.cardIdx}: </label>
        <label>Genre: </label>
        <select value={this.state.genre} onChange={this.changeGenre}>
          <option value="ROCK">ROCK</option>
          <option value="JAZZ">JAZZ</option>
          <option value="HIPHOP">HIPHOP</option>
          <option value="FOLK">FOLK</option>
        </select>
        <label> Points Per Loop: </label>
        <input type="text" value={this.state.pointsPerLoop} style={{width: 30, textAlign: "center"}} />
        <label> Loop Multiplier: </label>
        <input type="text" value={this.state.pointsPerLoop} style={{width: 30, textAlign: "center"}} />
      </form>
    )
  }
}

export class LevelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelName: "Example Level",
      levelTimer: 0,
      cards: [<CardForm cardIdx="0" />],
      recipes: []
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
    alert(numCards);
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
            return(
              <CardForm cardIdx="0" />
            )
          })}
        </div> 

        <br/>
        <label>Recipes</label>
        <br />
        <div id="recipes">

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