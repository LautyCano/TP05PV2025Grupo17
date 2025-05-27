import React from 'react';
import NavBar from './assets/components/NavBar';
import { router } from './Routes'; 
import { RouterProvider } from 'react-router-dom'; 
import './assets/css/App.css';

function App() {
 
return (
    <div className="App">
      <RouterProvider router={router}>
        <NavBar /> 
        <div className="main-content">
          {/* Aquí se renderizará el contenido de las rutas */}
        </div>
      </RouterProvider>
    </div>
  );
}

export default App;
