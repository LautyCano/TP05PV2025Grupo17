import React, { useEffect, useState } from "react";
import { getUsers } from "../services/alumnoService";
import AlumnoItem from "./Items";
import { Container, Row, Col } from "react-bootstrap";

export const AlumnoList = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {

    const fetchedAlumnos = getUsers();
    setAlumnos(fetchedAlumnos);
  }, []);

  
  const handleDeleteAlumno = (id) => {
    const updatedAlumnos = alumnos.filter((alumno) => alumno.id !== id);
    localStorage.setItem("alumnos", JSON.stringify(updatedAlumnos));
    setAlumnos(updatedAlumnos);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Lista de Alumnos</h2>

      {alumnos.length > 0 ? (
        <Row>
          {alumnos.map((alumno) => (
            <Col md={6} lg={4} className="mb-4" key={alumno.id}>
              <AlumnoItem alumno={alumno} onDelete={handleDeleteAlumno} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">No hay alumnos disponibles.</p>
      )}
    </Container>
  );
};
