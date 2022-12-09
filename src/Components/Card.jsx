import React from "react";
import { Link } from 'react-router-dom';
import { setFavorites } from '../Components/utils/LocalStorage'

const Card = ({ name, username, id }) => {
 

  const addFav = ()=>{
    setFavorites({id, name, username});
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
  <div className="card" >
    <Link to={`/dentist/${id}`} >
      <img style={{ width: '210px', height: '230px'}} src="./images/doctor.jpg" alt="Imagen del dentista" />
      <span>{name}</span>
      <span>{username}</span>
    </Link>
    <button onClick={addFav} className="favButton">Add fav</button>
  </div>
  );
};

export default Card;
