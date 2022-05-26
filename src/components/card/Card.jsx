import React from 'react'
import { useState,useEffect } from 'react'
import './Card.styles.css'
import { Link } from 'react-router-dom'

const Card = ({name,url}) => {

  const [datos,setDatos]=useState("")

  useEffect(()=>{
    fetch(url)
    .then((response) => response.json())  
    .then((pokeDatos) => {
      setDatos({
        id:pokeDatos.id,
        image:pokeDatos.sprites.other.home.front_default
      })
    });
  
  },[datos])
 
return (

  <Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to={`pokemones/${datos.id}`}>
    <div className='cardContainer'>
        <h2>{name}</h2>
        <img src={datos.image} alt="" />
        <h6>No.{datos.id}</h6>
      </div>
  </Link>
    
  )
}

export default Card