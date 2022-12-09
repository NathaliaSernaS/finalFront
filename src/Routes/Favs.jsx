import React from "react";
import Card from "../Components/Card";
import { getFavorites } from "../Components/utils/LocalStorage";

const Favs = () => {
  const favorites = getFavorites();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites?.map((favorite) =>  
          <Card 
            key={favorite.id} 
            id={favorite.id} 
            name={favorite.name} 
            username={favorite.username} 
          />
        )}
      </div>
    </>
  );
};

export default Favs;