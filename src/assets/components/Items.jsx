import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Items.css';

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
    <div className="alumno-card">
      <h3>{alumno.nombre} {alumno.apellido}</h3>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>

      <div className="acciones">
        <button onClick={handleView}>Ver Detalles</button>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete} className="eliminar">Eliminar</button>
      </div>
    </div>
  );
};

export default AlumnoItem;
