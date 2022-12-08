import React from 'react'
import {NavLink} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <ul>
        
          <NavLink to="/">Home</NavLink>
          <NavLink to='/contacto'>Contacto</NavLink>
          <NavLink to='/favs'>Favoritos</NavLink>
      
        
      </ul>
     
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar