import React, { Component } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import Nav from "./components/nav";
import AddToCat from "./components/modal";

let URL = "http://127.0.0.1:8000/api/v1/";
let selectedPokeIds_temp = [];

class App extends Component {
  state = {
    pokes: [],
    categories: [],
    selectedPokeIds: []
  };

  componentDidMount() {
    this.getPokemons(URL);
    this.getCategory();
  }

  getPokemons = async url => {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      pokes: data
    });
  };

  getCategory = async () => {
    const URL = "http://127.0.0.1:8000/api/v1/categories";
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({
      categories: data
    });
  };

  filterPokemon = value => {
    if (value === "") {
      this.getPokemons(URL);
    } else {
      let pokes = this.state.pokes;
      let filteredPokes = pokes.filter(el => {
        return el.name.indexOf(value) !== -1;
      });
      this.setState({
        pokes: filteredPokes
      });
    }
  };

  onSelectPoke(e, id) {
    if (e) {
      selectedPokeIds_temp.push(id);
    } else {
      if (selectedPokeIds_temp.indexOf(id) !== -1) {
        let index = selectedPokeIds_temp.indexOf(id);
        selectedPokeIds_temp.splice(index);
      }
    }
    this.setState({
      selectedPokeIds: selectedPokeIds_temp
    });
    // console.log(selectedPokeIds);
    // if (selectedPokeIds.length > 0) {
    //   console.log("Selected atleast one..!");
    // } else {
    //   console.log("Not..!");
    // }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav
            categories={this.state.categories}
            onChangeCategory={slug => this.getPokemons(URL + slug)}
            onFilter={value => {
              this.filterPokemon(value);
            }}
          />
          <div className="items">
            {this.state.pokes.map(poke => (
              <Pokemon
                key={poke.id}
                poke={poke}
                abilities={poke.abilities}
                onChange={(e, id) => this.onSelectPoke(e, id)}
              />
            ))}
          </div>
        </div>
        {this.state.selectedPokeIds.length > 0 && (
          <div className="Center" align="center">
            <AddToCat
              categories={this.state.categories}
              pokesToCat={this.state.selectedPokeIds}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
