import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Inicio</h1>
      <p>Bienvenido al sistema de gestión de alumnos.</p>
      <Link to="/alumnos"> Ir a la lista de alumnos</Link>
      <Link to="/alumnos/nuevo"> Ir a agregar un nuevo alumno</Link>
    </div>
  );
};

export default Home;