import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`detail ${themeClass}`}>
      {dentist ? (
        <>
          <h1>Detail Dentist {dentist.name}</h1>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;