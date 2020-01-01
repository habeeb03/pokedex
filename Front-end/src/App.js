import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokemons from "./components/pokemons";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <div className="container">
        <div className="items">
          <Pokemons />
        </div>
      </div>
    </div>
  );
}

export default App;
