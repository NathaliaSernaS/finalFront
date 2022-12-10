import React, { useState, useContext } from "react";
import { GlobalContext } from './utils/GLobalContext'

const Form = () => {
  const [isNameValid, setNameIsValid] = useState(false);
  const [isEmailValid, setEmailIsValid] = useState(false);
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [formData, setformData] = useState({ name: "", email: "" });
  const { theme } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim().length <= 5) {
      setNameMessage("El nombre debe tener más de cinco letras");
      setNameIsValid(false);
    }
    else{
      setNameIsValid(true);
      setNameMessage("");
    }
    if(!/\S+@\S+\.\S+/.test(formData.email)) {
      setEmailMessage("El formato del email es incorrecto");
      setEmailIsValid(false);
    } else {
      setEmailMessage("");
      setEmailIsValid(true);
    }
  }

  const onChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    setformData({ ...formData, [name]: value });
  }


  return (
    <div className={`form form-${theme}`}>
      <form action="#" onSubmit={onSubmit}>
        <label htmlFor="name" >
          Nombre Completo
        </label>
        <input
          onChange={onChange}
          name="name"
          type="text"
          id="Nombre"
          placeholder="Nombre Completo"
          required
          />
          <span style={{ color: 'red', fontSize: '12px' }}>{nameMessage}</span>
        <label htmlFor="email" >
          Correo Electrónico
        </label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Correo Electrónico"
          onChange={onChange}
          required
        />
         <span style={{ color: 'red', fontSize: '12px'}}>{emailMessage}</span>
        <button type="submit" >
          Enviar
        </button>
      </form>
    <div>
      { isNameValid && isEmailValid ? `Gracias ${formData.name}, te contactaremos cuanto antes vía email`
                : "Por favor verifique su información nuevamente"
      }
    </div>
  </div>
  );
};

export default Form;