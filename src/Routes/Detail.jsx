import React, { useState, useEffect }from 'react'  
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams()
  const [dentistDetails, setDentistDetails] = useState({})

  
  useEffect(() => {
    async function getDetails() {
      try{
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
          const data = await response.json();
          setDentistDetails(data);
      }catch(error){
          console.error(error)
      }
  }
  
  if(id){
    getDetails();
  }
  }, [id])
  console.log(dentistDetails)
  const { name, email, phone, website } = dentistDetails;
  


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist  id: {id} </h1>
     <div>{name}</div>
     <div>{email}</div>
     <div>{phone}</div>
     <div>{website}</div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail