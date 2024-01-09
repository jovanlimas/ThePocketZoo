import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    animalEntry: [],
    animalFact: [],
  };

  componentDidMount() {
    this.fetchAnimal();
  }

  fetchAnimal = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        const animalEntry = response.data;
        this.setState({ animalEntry });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://dog-api.kinduff.com/api/facts")
      .then((response) => {
        const animalFact = response.data;
        this.setState({ animalFact });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    var animalEntry = this.state.animalEntry;
    var animalFact = this.state.animalFact;

    if (typeof animalEntry === "object") {
      // do nothing...
    } else {
      animalEntry = JSON.parse(animalEntry);
    }

    return (
      <div className="app">
        <div className="site-title">
          <h1>Daily Dog Fact!</h1>
          <div className="title">
            <h1>Here's your daily Dog Fact!</h1>
            <div className="pic">
              <img
                id="photo"
                src={animalEntry.message}
                alt=""
                class="responsive"
              ></img>
            </div>
            <button className="button" onClick={this.fetchAnimal}>
              <span>I want to see another dog!</span>
            </button>
            <div className="facts">
              <h3>{animalFact.facts}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
