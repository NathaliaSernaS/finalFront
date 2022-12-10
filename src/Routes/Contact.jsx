import React from 'react'
import { useContext } from 'react'
import Form from '../Components/Form'
import { GlobalContext } from '../Components/utils/GLobalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

 const Contact = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className = {`contact contact-${theme}`}>
    <h2 >¿Quieres saber más?</h2>
    <h3>Envíanos tus consultas y nos pondremos en contacto contigo</h3>
    <Form />
    </div>
  )
}

export default Contact