import React, { useState, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {
  const { state } = useContext(ContextGlobal);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (formData.fullName.length <= 5) {
      newErrors.fullName = "El nombre completo debe tener más de 5 caracteres.";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Ingrese un correo electrónico válido.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía email.`);
    }
  };

  return (
    <div>
      {successMessage ? (
        <div className="success-message">{successMessage}</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Nombre Completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
