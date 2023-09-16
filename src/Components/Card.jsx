import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios"


const Card = ({ id }) => {
  const [dentistData, setDentistData] = useState(null);

  const addFav = () => {
    const favsFromStorage = JSON.parse(localStorage.getItem("favorites")) || [];
  
    const isAlreadyFav = favsFromStorage.some((fav) => fav.id === id);
  
    if (!isAlreadyFav) {
      const updatedFavs = [...favsFromStorage, { id }];
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    } else {
      console.log("Esta tarjeta ya está en favoritos");
    }
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setDentistData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del dentista:", error);
      });
  }, [id]);

  return (
    <div className="card">
      {dentistData ? (
        <>
          <h3>{dentistData.name}</h3>
          <p>Username: {dentistData.username}</p>
          <p>ID: {dentistData.id}</p>
          <Link to={`/dentist/${id}`}>Ver detalle</Link>
          <button onClick={addFav} className="favButton">
            Add fav
          </button>
        </>
      ) : (
        <p>Cargando datos del dentista...</p>
      )}
    </div>
  );
};

export default Card;
