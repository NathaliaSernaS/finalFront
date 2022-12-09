export const getFavorites = () =>{
    const favorites = localStorage.getItem("favs");
    return favorites ? JSON.parse(favorites) : [];
}

export const setFavorites = (dentist) =>{
    const savedFavorites = getFavorites();
    const AlreadySaved = savedFavorites.filter((favorite) => favorite.id === dentist.id)

    if(AlreadySaved.length === 0){
        savedFavorites.push(dentist);
        localStorage.setItem("favs", JSON.stringify(savedFavorites));
        alert("Agregado exitosamente")
    }else{
        alert("Ya se encuentra agregado a favoritos");
    }

}