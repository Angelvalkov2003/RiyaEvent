import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className='riya__navbar'>
      <div className="riya__navbar-links">
        <div className="riya__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className='riya__navbar-links_container'>
          <p><a href="#home">Начало</a></p>
          <p><a href="#genres">Жанрове</a></p>
          <p><a href="#musicians">Изпълнители</a></p>
          <p><a href="#aboutus">За нас</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
