import React from 'react';
import { useState, useEffect } from "react";
import { saveUser, updateUser } from "../services/alumnoService";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const AlumnoForm = ({ alumno, onSubmit }) => {
  const [lu, setLu] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");


  useEffect(() => {

    if (alumno) {
      setLu(alumno.lu || "");
      setNombre(alumno.nombre || "");
      setApellido(alumno.apellido || "");
      setCurso(alumno.curso || "");
      setEmail(alumno.email || "");
      setDomicilio(alumno.domicilio || "");
      setTelefono(alumno.telefono || "");
    }
  }, [alumno]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const alumnoData = {
      id: alumno?.id || Date.now().toString(),
      lu,
      nombre,
      apellido,
      curso,
      email,
      domicilio,
      telefono,
    };

    if (alumno) {
      updateUser(alumnoData);
    } else {
      saveUser(alumnoData);
    }

    if (onSubmit) {
      onSubmit(alumnoData);
    }

    if (!alumno) {
      
      setLu("");
      setNombre("");
      setApellido("");
      setCurso("");
      setEmail("");
      setDomicilio("");
      setTelefono("");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 shadow" style={{ width: "100%", maxWidth: "800px" }}>
        <Card.Body>
          <h4 className="mb-4 text-center">
            {alumno ? "Editar Alumno" : "Agregar Alumno"}
          </h4>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formLu">
                  <Form.Label>Legajo Único</Form.Label>
                  <Form.Control
                    type="text"
                    value={lu}
                    onChange={(e) => setLu(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="formCurso">
                  <Form.Label>Curso</Form.Label>
                  <Form.Control
                    type="text"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="formTelefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formDomicilio">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control
                type="text"
                value={domicilio}
                onChange={(e) => setDomicilio(e.target.value)}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                {alumno ? "Actualizar Alumno" : "Agregar Alumno"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AlumnoForm;
