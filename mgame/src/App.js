import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ImageCard from "./Components/ImageCard";
import characters from "./characters.json";
import ImageContainer from './Components/ImageContainer';

class App extends Component {
  
  state = {
    characters
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <ImageContainer>
           {this.state.characters.map((character,i) => 
              <ImageCard name={character.name} image={character.image} key={character.id}/>
            )}
        </ImageContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
