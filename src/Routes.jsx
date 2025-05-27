import React from 'react'; 
import { createBrowserRouter } from "react-router-dom";
import Home from "./assets/views/Home"; 
import { AlumnoList } from "./assets/components/List"; 
import { AlumnoForm } from "./assets/components/Form";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/alumnos',
    element: <AlumnoList />,
  },
  {
    path: '/alumnos/nuevo',
    element: <AlumnoForm />,
  },
  // { path: '/acerca', element: <Acerca /> },
]);