import React from 'react'
import TypeButton from './typeButton/typeButton';
import { useState } from 'react';
import './typeButton/typeButton.style.css'

const Profile = ({datos}) => {

  
    //porque no se puede poner datos.sprites.frontdefault?
  return (
      <>
       <div className='name-profile'>
           <h1 >{datos.name}</h1>
         
         </div>

         <div className='id-profile'>
         
           <h6>No.{datos.id}</h6>
         </div>
           
    <div className='contenedor-profile'>
        
        <div className='img-profile'><img src={ datos&& datos.sprites.other.home.front_default} alt="" /></div>
        <div className='info-profile'>
       
            <h2 style={{margin:'0px'}}>Características</h2>
            <ul>
                <li>Altura: {datos.height} m</li>
                <li>Peso: {datos.weight} kg</li>
                <li>Tipos:  {datos && datos.types.map((tipo)=>{

        return <TypeButton  type={tipo.type.name}/>
        
    })}</li>
    <li>Habilidades:  {datos && datos.abilities.map((elemento)=>{
        console.log(elemento.ability.name)
        return <TypeButton type={elemento.ability.name}/>
        
    })}</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Profile