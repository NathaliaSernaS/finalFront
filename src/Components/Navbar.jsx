import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { GlobalContext } from './utils/GLobalContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, setLightTheme, setDarkTheme} = useContext(GlobalContext);
  const isLightTheme = theme === "light";

  const changeTheme = () =>{
    if(isLightTheme){
      setDarkTheme();
    }else {
      setLightTheme();
    }
  }

  return (
    <nav className= {theme}>
          <NavLink to="/">Home</NavLink>
          <NavLink to='/contacto'>Contacto</NavLink>
          <NavLink to='/favs'>Favoritos</NavLink>
      <button className= {`navbar-btn navbar-btn-${theme}`} onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar