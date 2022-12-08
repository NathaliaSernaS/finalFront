import React from "react";
import { Link } from 'react-router-dom';


const Card = ({ name, username, id }) => {
  console.log({name, username, id})

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
  <Link className="card" to={`/dentist/${id}`} >
      
      <img style={{ width: '210px', height: '230px'}} src="./images/doctor.jpg" alt="Imagen del dentista" />

      <span>{name}</span>
      
      <span>{username}</span>

        
      
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </Link>
  );
};

export default Card;
