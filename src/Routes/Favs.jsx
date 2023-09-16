import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {

    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favoriteDentists')) || [];

    setFavoriteDentists(favoritesFromLocalStorage);
  }, []);

  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme'

  return (
    <div className={themeClass}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoriteDentists.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
