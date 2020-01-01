import React, { Component } from "react";
import Pokemon from "./Pokemon";

const URL = "http://127.0.0.1:8000/api/v1/?format=json";

class Pokemons extends Component {
  // componentDidMount = async () => {
  //   const response = await fetch(URL);
  //   const data = await response.json();
  //   this.setState({
  //     pokes: data
  //   });
  //   console.log(this.state.pokes[0].abilities[0].name);
  //   // console.lo
  // };
  state = {
    pokes: [
      {
        id: 3237,
        abilities: [
          {
            name: "Overgrow",
            id: 4837
          }
        ],
        weakness: [
          {
            name: "Fire",
            id: 10445
          },
          {
            name: "Flying",
            id: 10446
          },
          {
            name: "Ice",
            id: 10447
          },
          {
            name: "Psychic",
            id: 10448
          }
        ],
        types: [
          {
            name: "grass",
            id: 1
          },
          {
            name: "poison",
            id: 2
          }
        ],
        name: "Bulbasaur",
        weight: "15.20",
        thumbnail_text: "Bulbasaur",
        number: 1,
        height: "28.00",
        collectibles_slug: "bulbasaur",
        thumbnail_image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        slug: "bulbasaur"
      },
      {
        id: 3238,
        abilities: [
          {
            name: "Overgrow",
            id: 4838
          }
        ],
        weakness: [
          {
            name: "Fire",
            id: 10449
          },
          {
            name: "Flying",
            id: 10450
          },
          {
            name: "Ice",
            id: 10451
          },
          {
            name: "Psychic",
            id: 10452
          }
        ],
        types: [
          {
            name: "grass",
            id: 3
          },
          {
            name: "poison",
            id: 4
          }
        ],
        name: "Ivysaur",
        weight: "28.70",
        thumbnail_text: "Ivysaur",
        number: 2,
        height: "39.00",
        collectibles_slug: "ivysaur",
        thumbnail_image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
        slug: "ivysaur"
      }
    ]
  };
  render() {
    return (
      <div className="items">
        {this.state.pokes.map(poke => (
          <Pokemon
            key={poke.id}
            poke={poke}
            abilities={poke.abilities}
            checked={this.state.checked}
          />
        ))}
      </div>
    );
  }
}

export default Pokemons;
