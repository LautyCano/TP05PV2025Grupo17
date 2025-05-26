import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Inicio</h1>
    <p>Bienvenido al sistema de gestión de alumnos.</p>
  </div>
);

const ListaAlumnos = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Lista de Alumnos</h1>
    <p>Aquí se mostrará la lista de alumnos registrados.</p>
  </div>
);

const NuevoAlumno = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Nuevo Alumno</h1>
    <p>Formulario para agregar un nuevo alumno.</p>
  </div>
);

const Acerca = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Acerca de</h1>
    <p>Esta aplicación fue creada por el Grupo 17 para el TP5 de Programación Visual.</p>
  </div>
);

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alumnos" element={<ListaAlumnos />} />
      <Route path="/alumnos/nuevo" element={<NuevoAlumno />} />
      <Route path="/acerca" element={<Acerca />} />
    </Routes>
  );
}

export default AppRoutes;
