import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ImageCard from "./Components/ImageCard";
import characters from "./characters.json";
import ImageContainer from "./Components/ImageContainer";

class App extends Component {
  constructor(props) {
    super(props);
    //characters;

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      characters,
      score: 0,
      highscore: 0,
      answerresponse: "Click an image to begin!",
      clickedIds: []
      // This binding is necessary to make `this` work in the callback
      //this.handleClick = this.handleClick.bind(this);
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateAnswerResponse = this.updateAnswerResponse.bind(this);
    this.updateClickedIds = this.updateClickedIds.bind(this);
    this.updateImages = this.updateImages.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore = () => {
    this.setState(prevstate => {
      //console.log(prevstate);
      if (prevstate.score === 0 && prevstate.highscore === 0)
        return {
          score: prevstate.score + 1,
          highscore: prevstate.score + 1
        };
      else if (prevstate.score === 0 && prevstate.highscore !== 0) {
        return {
          score: prevstate.score + 1,
          highscore: prevstate.highscore
        };
      } else {
        return {
          score: prevstate.score + 1,
          highscore: prevstate.score + 1
        };
      }
    });
  };

  updateAnswerResponse = response => {
    //console.log(response);
    if (response == true) {
      this.setState({
        answerresponse: "You guessed correctly!"
      });
    } else {
      this.setState({
        answerresponse: "You guessed incorrectly!"
      });
    }
  };

  updateImages = () => {
    this.setState({
      characters: characters.sort(function(a, b) {
        return Math.random() - 0.5;
      })
    });
  };

  updateClickedIds = alts => {
    this.state.clickedIds.push(alts);
    console.log(this.state.clickedIds);
  };

  resetScore = () => {
    this.setState({
      score: 0,
      clickedIds : []
    });
  };

  handleClick = event => {
    //console.log("this is:", event);
    // alert(e);
    if (this.state.clickedIds.indexOf(event.target.alt) === -1) {
      this.updateScore();
      this.updateClickedIds(event.target.alt);
      this.updateAnswerResponse(true);
    } else {
      this.updateAnswerResponse(false);
      this.resetScore();
    }
    this.updateImages();
  };

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          highscore={this.state.highscore}
          answerresponse={this.state.answerresponse}
        />
        <Header />
        <ImageContainer>
          {this.state.characters.map((character, i) => (
            <ImageCard
              name={character.name}
              image={character.image}
              id={character.id}
              key={character.id}
              index={i}
              ClickHandler={this.handleClick}
            />
          ))}
        </ImageContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
