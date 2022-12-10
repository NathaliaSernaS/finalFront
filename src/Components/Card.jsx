import React from "react";
import { Link } from 'react-router-dom';
import { setFavorites } from '../Components/utils/LocalStorage'
import { GlobalContext } from "../Components/utils/GLobalContext"
import { useContext } from "react";

const Card = ({ name, username, id }) => {
  const { theme} = useContext(GlobalContext);
 

  const addFav = ()=>{
    setFavorites({id, name, username});
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
  <div className="card" >
    <Link className = {`card-link card-link-${theme}`}to={`/dentist/${id}`} >
      <img src="./images/doctor.jpg" alt="Imagen del dentista" />
      <span>{name}</span>
      <span>{username}</span>
    </Link>
    <button onClick={addFav} className="favButton">⭐</button>
  </div>
  );
};

export default Card;
