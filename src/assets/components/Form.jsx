import React, { useState } from "react"; 
import { saveUser } from "../services/alumnoService"; 
import "../css/Form.css";

export const AlumnoForm = ({ }) => {
  const [lu, setLu] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      lu,
      nombre,
      apellido,
      curso,
      email,
      domicilio,
      telefono,
    };
    saveUser(newUser);
    setLu("");
    setNombre("");
    setApellido("");
    setCurso("");
    setEmail("");
    setDomicilio("");
    setTelefono("");
  };

    return (
    <form onSubmit={handleSubmit} className="alumno-form">
      <h2>Agregar Alumno</h2>
      <div>
            <input 
                type="text" 
                placeholder="Legajo Único" 
                value={lu} 
                onChange={(e) => setLu(e.target.value)} 
                required 
            />
        
            <input 
                type="text" 
                placeholder="Nombre"
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                required 
            />
        
            <input 
                type="text" 
                placeholder="Apellido"
                value={apellido} 
                onChange={(e) => setApellido(e.target.value)} 
                required 
            />
        
            <input 
                type="text" 
                placeholder="Curso"
                value={curso} 
                onChange={(e) => setCurso(e.target.value)} 
                required 
            />
        
            <input 
                type="email"
                placeholder="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
        
            <input 
                type="text"
                placeholder="Domicilio" 
                value={domicilio}
                onChange={(e) => setDomicilio(e.target.value)} 
                required
            />
        
            <input 
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)} 
                required
            />
      </div>

      <button type="submit">Agregar Alumno</button>
    </form>
  );
};
