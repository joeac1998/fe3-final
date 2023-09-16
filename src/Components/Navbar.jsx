import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <nav className={themeClass}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      <button onClick={handleThemeChange}>Change theme</button>
    </nav>
  );
};

export default Navbar;
