import React from 'react'
import './InputBox.styles.css'
const InputBox = ({onChange}) => {
  return (
  
  <input className='inputBox' type="search" placeholder='Buscar...' onChange={onChange} />
   
  )
}

export default InputBox