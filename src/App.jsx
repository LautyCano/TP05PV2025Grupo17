import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import AppRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{paddingTop: "70"}}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;