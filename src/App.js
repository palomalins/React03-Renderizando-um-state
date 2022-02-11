import React, { Component } from "react";
import Melao from "./Assets//melão.jpg"
class App extends Component {
  state = {
    nome: "Paloma",
    idade: 16,
    comidaFavorita: "hamburguer",
    musicas: ["Kaikai Kitan", "Blue Bird", "Cry baby"]
  };

  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img src={Melao} />
      </div>
    );
  }
}

export default App;
