import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers, initializeUsers } from "../services/alumnoService";
import '../css/VerAlumno.css';


export default function VerAlumno() {
  const { id } = useParams();
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    initializeUsers(); 
    const alumnos = getUsers();
    const foundAlumno = alumnos.find((a) => a.id.toString() === id);
    setAlumno(foundAlumno || null);
  }, [id]);

  if (!alumno) {
    return <p style={{ color: "red" }}>⚠ Alumno no encontrado.</p>;
  }

  return (
    <div className="ver-alumno-container">
      <h2>Detalles del Alumno</h2>
      <p><strong>ID:</strong> {alumno.id}</p>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Apellido:</strong> {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>
    </div>
  );
}