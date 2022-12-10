import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from './utils/GLobalContext';

const Footer = () => {
  const { theme} = useContext(GlobalContext);

  return (
    <footer className={`footer-${theme}`}>
        <p >
          Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
