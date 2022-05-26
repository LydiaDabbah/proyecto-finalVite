import { useState, useEffect } from "react";
import React from "react";

import CardList from "../components/cardList/cardList";
import InputBox from "../components/InputBox/InputBox";


const Home = () => {
    
const [pokemonArray, setPokemonArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState(pokemonArray);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((response) => response.results)
      .then((pokemon) => {
        setPokemonArray(pokemon);
      });
  }, []);

  useEffect(() => {
    const newFilteredArray = pokemonArray.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputText.toLowerCase())
    );

    setFilteredArray(newFilteredArray);
  }, [inputText, pokemonArray]);

  const filtrar = (event) => {
    setInputText(event.target.value);
  };

  return (
     
    <div className="container-home">
      <div className="home-inputbox"> <InputBox onChange={filtrar}/></div>
     
     <div className="home-cardlist"> <CardList filteredArray={filteredArray}/></div>
    </div>
  
  );
}

export default Home