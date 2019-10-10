import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import logo from "./logo.json";
import "./App.css";

// Initial state
class App extends Component {
  state = {
    logo,
    clickedLogo: [],
    score: 0
  };

// Card gets taken out of array on click event
  imageClick = event => {
    const currentLogo = event.target.alt;
    const LogoAlreadyClicked =
      this.state.clickedLogo.indexOf(currentLogo) > -1;

// Game reset on clicking same card
    if (LogoAlreadyClicked) {
      this.setState({
        logo: this.state.logo.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedLogo: [],
        score: 0
      });
        alert("You already clicked that! You lose. Play again?");

// Score increase
    } else {
      this.setState(
        {
          logo: this.state.logo.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedLogo: this.state.clickedLogo.concat(
            currentLogo
          ),
          score: this.state.score + 1
        },
// Game win        
        () => {
          if (this.state.score === 12) {
            alert("Nice job! You Win!");
            this.setState({
              logo: this.state.logo.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedLogo: [],
              score: 0
            });
          }
        }
      );
    }
  };

// Components being rendered 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.logo.map(logo => (
            <FriendCard
              imageClick={this.imageClick}
              id={logo.id}
              key={logo.id}
              image={logo.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;