import React from 'react'
import Card from '../card/Card'
import './CardList.styles.css'


const CardList = ({filteredArray}) => {
  return (
    <div className='cardListContainer'>
        {filteredArray.map((pokemon)=>{

   return <Card name={pokemon.name} url={pokemon.url} />
     
    })}
     
     </div>
  )
}

export default CardList