import React from 'react';
import NavBar from './components/NavBar';
import AppRoutes from './Routes';

function App() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;

