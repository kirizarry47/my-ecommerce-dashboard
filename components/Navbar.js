import React,{useState, useEffect} from 'react';

import 'boxicons/css/boxicons.min.css';

 const Navbar = () => {
  const[isDarkmode, setIsDarkMode] =
  useState(false);

  useEffect(() => {
    if(isDarkmode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkmode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkmode);
  }; 

  return (
    <nav className="top-navbar">
      <a href='#' className="nav-link">
        Catergories
      </a>
      <form action="#">
        <div className='form-input'>
          <input type='search' placeholder='Search...' />
          <button type='submit' className='search-btn'>
            <i className='bx bx-search'></i>
          </button>
        </div>
      </form>

      <input type='checkbox' id='switch-mode' checked={isDarkmode} onChange={toggleDarkMode} hidden />

      <label htmlFor='switch-mode' className='switch-mode'></label>

      <a href='#' className='notification'>
        <i className='bx bxs-bell'></i>
        
        <span className='num'>5</span>
      </a>
      
      <a href='#' className='profile'>
        <img src='https://media.geeksforgeeks.org/gfg-gg-logo.svg' alt='Profile' />
      </a>
    </nav>
  )
};

export default Navbar;