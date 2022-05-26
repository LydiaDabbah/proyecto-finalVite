import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/pokemonLogo.png'
import { Fragment } from 'react'
import LinkButton from '../components/linkButton'


const Layout = () => {


  return (
    <>
    <Fragment>
    <div className='barra-layout'>
        <div className='logo-pokemon'>
         <img src={Logo} alt="" />
        </div>
        <nav className='links-navbar'>
            <LinkButton title={'Home'} linkTo={'/'} />
            <LinkButton title={'Pokemones'} linkTo={'pokemones/1'}/>
            <LinkButton title={'About'} linkTo={'/'}/>
            
        </nav>
       
    </div>
    <Outlet/>
    </Fragment>
    </>
  )
}
export default Layout