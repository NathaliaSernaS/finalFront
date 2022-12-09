import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

 const Contact = () => {
  return (
    <div className="u-margin-bottom-medium">
    <h2 className="heading-secundary">¿Quieres saber más?</h2>
    <h3>Envíanos tus consultas y nos pondremos en contacto contigo</h3>
    <Form />
    </div>
  )
}

export default Contact