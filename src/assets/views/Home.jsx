import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container 
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <h1 className="display-4 text-center">Inicio</h1>
      <p className="lead text-center">
        Bienvenido al sistema de gestión de alumnos.
      </p>
    </Container>
  );
};

export default Home;
