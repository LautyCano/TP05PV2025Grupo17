import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/views/Home"; 
import { AlumnoList } from "./assets/components/List"; 
import AlumnoForm from "./assets/components/Form";
import VerAlumno from "./assets/views/VerAlumno";
import EditarAlumno from "./assets/views/EditarAlumno";
import Acerca from "./assets/views/Acerca";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alumnos" element={<AlumnoList />} />
      <Route path="/alumnos/nuevo" element={<AlumnoForm />} />
      <Route path="/alumnos/:id" element={<VerAlumno />} />
      <Route path="/alumnos/:id/editar" element={<EditarAlumno />} />
      <Route path="/alumnos/acerca" element={<Acerca />} />
    </Routes>
  );
}
