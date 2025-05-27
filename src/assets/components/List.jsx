import React from 'react';
import { useEffect, useState } from "react"; 
import { getUsers, initializeUsers } from "../services/alumnoService"; 
import "../css/List.css"; 

export const AlumnoList = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    //Asegura de que los usuarios iniciales existan en localStorage
    initializeUsers();

    //Obtiene la lista COMPLETA de alumnos después de la inicialización
    const fetchedAlumnos = getUsers();
    console.log("Alumnos cargados:", fetchedAlumnos); 
    
    setAlumnos(fetchedAlumnos);
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente.

  return (
    <div className="alumno-list">
      <h2>Lista de Alumnos</h2>
      {alumnos.length > 0 ? (
        <ul>
          {alumnos.map((alumno) => (
            <li key={alumno.id} className="alumno-item">
              Legajo: {alumno.lu}, Nombre: {alumno.nombre}, Apellido: {alumno.apellido}, Curso: {alumno.curso}
              <br />
              Email: {alumno.email}, Domicilio: {alumno.domicilio}, Teléfono: {alumno.telefono}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay alumnos disponibles.</p>
      )}
    </div>
  );
};