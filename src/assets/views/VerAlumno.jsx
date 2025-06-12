import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers, initializeUsers } from "../services/alumnoService";
import { Card, Container } from "react-bootstrap";

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
    return <p className="text-danger text-center mt-4">⚠ Alumno no encontrado.</p>;
  }

  return (
    <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: "24rem" }} className="shadow">
          <Card.Body>
            <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">LU: {alumno.lu}</Card.Subtitle>
            <Card.Text>
              <strong>Curso:</strong> {alumno.curso} <br />
              <strong>Email:</strong> {alumno.email} <br />
              <strong>Domicilio:</strong> {alumno.domicilio} <br />
              <strong>Teléfono:</strong> {alumno.telefono} <br />
              <strong>ID interno:</strong> {alumno.id}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}