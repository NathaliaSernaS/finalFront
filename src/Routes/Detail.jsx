import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Components/utils/GLobalContext'

const Detail = () => {
  const { id } = useParams();
  const [dentistDetails, setDentistDetails] = useState({})
  const { theme } = useContext(GlobalContext)

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentistDetails(data);
      } catch (error) {
          console.error(error);
      }
    }
  
    if(id) {
      getDetails();
    }
    
  }, [id])
  
  const { name, email, phone, website } = dentistDetails;

  return (
    <div>
      <h1>Dentist id: {id} </h1>
      <div className={`detail detail-${theme}`}>
      <img src="../images/doctor.jpg" alt="Imagen del dentista" />
        <span>{name}</span>
        <span>{email}</span>
        <span>{phone}</span>
        <span>{website}</span>
      </div>
    </div>
  )
}

export default Detail