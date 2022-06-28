import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [
        {
          name: "Linda",
          id: "12e123",
        },
        {
          name: "Frank",
          id: "12e124",
        },
        {
          name: "Jacky",
          id: "12e125",
        },
        {
          name: "Andrei",
          id: "12e126",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
