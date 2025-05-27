import React, { useEffect, useState } from "react";
import { getUsers, initializeUsers } from "../services/alumnoService";
import AlumnoForm  from "./Form";
import AlumnoItem from "./Items";
import "../css/List.css";

export const AlumnoList = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    initializeUsers();
    const fetchedAlumnos = getUsers();
    setAlumnos(fetchedAlumnos);
  }, []);

  const handleAddAlumno = () => {
    const updatedAlumnos = getUsers();
    setAlumnos(updatedAlumnos);
  };

  const handleDeleteAlumno = (id) => {
    const updatedAlumnos = alumnos.filter((alumno) => alumno.id !== id);
    localStorage.setItem("alumnos", JSON.stringify(updatedAlumnos));
    setAlumnos(updatedAlumnos);
  };

  return (
    <div className="alumno-list">
      <h2>Lista de Alumnos</h2>
      <AlumnoForm onAddAlumno={handleAddAlumno} />

      {alumnos.length > 0 ? (
        <div className="alumnos-container">
          {alumnos.map((alumno) => (
            <AlumnoItem
              key={alumno.id}
              alumno={alumno}
              onDelete={handleDeleteAlumno}
            />
          ))}
        </div>
      ) : (
        <p>No hay alumnos disponibles.</p>
      )}
    </div>
  );
};
