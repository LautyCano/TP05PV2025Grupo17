import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, initializeUsers } from "../services/alumnoService";
import AlumnoForm from "../../assets/components/Form";

export default function EditarAlumno() {
  const { id } = useParams();
  const [alumno, setAlumno] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    initializeUsers();
    const alumnos = getUsers();
    const foundAlumno = alumnos.find((a) => a.id.toString() === id);
    setAlumno(foundAlumno || null);
  }, [id]);

  const handleUpdate = (updatedAlumno) => {
    const alumnos = getUsers();
    const nuevosAlumnos = alumnos.map((a) =>
      a.id.toString() === id ? { ...a, ...updatedAlumno } : a
    );

    localStorage.setItem("users", JSON.stringify(nuevosAlumnos));
    navigate(`/alumnos/${id}`);
  };

  if (!alumno) {
    return <p style={{ color: "red" }}> Error: Alumno no encontrado.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Editar Alumno</h2>
      <AlumnoForm alumno={alumno} onSubmit={handleUpdate} />
    </div>
  );
}
