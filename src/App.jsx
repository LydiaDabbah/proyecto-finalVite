import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import PokemonProfile from "./routes/pokemonProfile";
import CardList from "./components/cardList/cardList";
import InputBox from "./components/InputBox/InputBox";
import {Routes,Route} from 'react-router-dom'
import Layout from "./routes/layout";
import Home from "./routes/home";
import LinkButton from "./components/linkButton";




function App() {

    return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route  path="pokemones/:pokemonId" element={<PokemonProfile/>}/>
          </Route>
        </Routes>
  
    
    );
}

export default App;
