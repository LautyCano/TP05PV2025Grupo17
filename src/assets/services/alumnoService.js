const ALUMNOS_STORAGE_KEY = 'alumnos_data';

export const getUsers = () => {
  const alumnos = localStorage.getItem(ALUMNOS_STORAGE_KEY);
  return alumnos ? JSON.parse(alumnos) : [];
};

// Función para guardar un nuevo alumno (añadiéndolo a la lista existente)
export const saveUser = (newAlumno) => {
  const alumnos = getUsers(); // Obtener la lista actual de alumnos
  
  const alumnoWithId = { ...newAlumno, id: Date.now().toString() };
  alumnos.push(alumnoWithId); // Añadir el nuevoalumno a la lista
  localStorage.setItem(ALUMNOS_STORAGE_KEY, JSON.stringify(alumnos)); 
};

// Función para inicializar alumnos (si no existen)
export const initializeUsers = () => {
  let alumnos = getUsers(); // Comprobar si ya hay alumnos
  if (alumnos.length === 0) { // Si no hay alumnos, precargamos
    const initialAlumnos = [
      { id: '1', lu: "12345678", nombre: "Juan", apellido: "Pérez", curso: "Programación Visual", email: "juan.perez@example.com", domicilio: "Calle Falsa 123", telefono: "123456789" },
      { id: '2', lu: "87654321", nombre: "Ana", apellido: "García", curso: "Matemáticas", email: "ana.garcia@example.com", domicilio: "Avenida siempre Viva 742", telefono: "987654321" },
      { id: '3', lu: "99887766", nombre: "Carlo", apellido: "López", curso: "Base de Datos", email: "carlos.l@example.com", domicilio: "Rioja 500", telefono: "1155443322" },
      { id: '4', lu: "11223344", nombre: "Sofía", apellido: "Fernández", curso: "Diseño Web", email: "sofia.f@example.com", domicilio: "Salta 1234", telefono: "1166778899" },
    ];
    localStorage.setItem(ALUMNOS_STORAGE_KEY, JSON.stringify(initialAlumnos));
    console.log('Alumnos precargados inicializados.');
  }
};
// Función para eliminar un alumno por su ID
export const deleteUser = (id) => {
  const alumnos = getUsers(); // Obtener todos los alumnos
  const updatedAlumnos = alumnos.filter((alumno) => alumno.id !== id); 
  localStorage.setItem(ALUMNOS_STORAGE_KEY, JSON.stringify(updatedAlumnos)); 
};
//Funcion para actualizar alumno
export const updateUser = (updatedAlumno) => {
  const alumnos = getUsers();
  const index = alumnos.findIndex((a) => a.id === updatedAlumno.id);

  if (index !== -1) {
    alumnos[index] = updatedAlumno;
    localStorage.setItem("alumnos_data", JSON.stringify(alumnos));
  }
};
