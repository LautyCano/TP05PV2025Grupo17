import React from 'react';
import { useEffect, useState } from "react";
import { getUsers, deleteUser} from "../services/alumnoService";
import AlumnoItem from "./Items";
import { Container, Row, Col } from "react-bootstrap";

export const AlumnoList = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {

    const fetchedAlumnos = getUsers();
    setAlumnos(fetchedAlumnos);
  }, []);

  
  const handleDeleteAlumno = (id) => {
    deleteUser(id); //Elmina el alumno del servicio
    const update = getUsers();// Vuelve a obtener la lista actualizada
    setAlumnos(update);// Actualiza el estado con la nueva lista
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
