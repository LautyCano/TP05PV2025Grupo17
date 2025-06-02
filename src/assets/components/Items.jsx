import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const AlumnoItem = ({ alumno, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/alumnos/${alumno.id}/editar`);
  };

  const handleView = () => {
    navigate(`/alumnos/${alumno.id}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(`¿Seguro que deseas eliminar a ${alumno.nombre} ${alumno.apellido}?`);
    if (confirmDelete) {
      onDelete(alumno.id);
    }
  };

  return (
    <Card className="mb-4" style={{ width: "100%", minHeight: "100%" }}>
      <Card.Body>
        <Card.Title>
          {alumno.nombre} {alumno.apellido}
        </Card.Title>
        <Card.Text>
          <strong>LU:</strong> {alumno.lu} <br />
          <strong>Curso:</strong> {alumno.curso} <br />
          <strong>Email:</strong> {alumno.email} <br />
          <strong>Domicilio:</strong> {alumno.domicilio} <br />
          <strong>Teléfono:</strong> {alumno.telefono}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="info" onClick={handleView}>Ver</Button>
          <Button variant="warning" onClick={handleEdit}>Editar</Button>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AlumnoItem;
