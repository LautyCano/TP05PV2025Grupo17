import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/alumnos">Lista de Alumnos</Link></li>
        <li><Link to="/alumnos/nuevo">Nuevo Alumno</Link></li>
        {}
      </ul>
    </nav>
  );
};

export default NavBar;
