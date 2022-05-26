import React from 'react'
import {useParams} from 'react-router-dom'
import Profile from '../components/Profile'
import { useState,useEffect } from 'react'
import LinkButton from '../components/linkButton'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa' // para instalar react icons es npm i react-icons 


const PokemonProfile = () => {


  const {pokemonId}=useParams()
  const [datos,setDatos]=useState("")

  
  useEffect(()=>{
      console.log('se uso')
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())  
    .then((pokeDatos) =>{
      setDatos(pokeDatos)
      console.log(pokeDatos)
      
  });
  
  },[])

  

  return (
    <>
    {pokemonId<50&&<LinkButton clase='boton-link next' onClick={window.location.reload} title={<FaArrowRight/>} linkTo={`/pokemones/${pokemonId*1+1}`}/>}
    
    {pokemonId>1&&<LinkButton clase='boton-link prev' onClick={window.location.reload} title={<FaArrowLeft/>} linkTo={`/pokemones/${pokemonId*1-1}`}/>}
    <div>
     
  <Profile datos={datos}/></div>
     
    </>
  )
}

export default PokemonProfile