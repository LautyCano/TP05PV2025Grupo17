# Trabajo Práctico N°5: Diseño de Página Web con Router y Framework (JSX)

---

¡Bienvenidos al repositorio de nuestro Trabajo Práctico N°5! En este proyecto, hemos desarrollado una **Single Page Application (SPA)** robusta y fácil de usar, enfocada en la gestión de alumnos. Para ello, hemos utilizado **React (con JSX)** como framework y **React Router** para gestionar la navegación, asegurando una experiencia de usuario fluida y reactiva.

## Descripción del Proyecto

El objetivo principal de este trabajo fue crear una aplicación web completa para la **administración de alumnos**. Esto incluye la capacidad de agregar, listar, editar, eliminar y visualizar en detalle la información de cada estudiante. Nos hemos enfocado en una interfaz intuitiva y en la correcta implementación de las funcionalidades requeridas para un sistema de gestión eficiente, aprovechando la **componetización** y el **estado reactivo** que ofrece React.

## Funcionalidades de la Aplicación

Nuestra aplicación incluye las siguientes características clave, construidas con componentes React:

- ### Home

  Un componente `Home` que sirve como bienvenida o presentación del sistema, introduciendo al usuario a la aplicación.

- ### Lista de Alumnos

  Un componente `ListaAlumnos` que muestra **todos los alumnos** en un formato claro (ya sea una tabla o tarjetas), facilitando su visualización y gestión. Cada ítem en la lista incluye:

  - **Botón "Editar"**: Navega a la ruta `/alumnos/:id/editar` utilizando `React Router`, permitiendo modificar los datos del alumno seleccionado.
  - **Botón "Eliminar"**: Dispara un evento (`onClick`) que, tras una **confirmación** del usuario, elimina el alumno del sistema.
  - **Botón "Ver Detalles"**: Navega a la ruta `/alumnos/:id` utilizando `React Router`, mostrando un componente `DetalleAlumno` con todos los datos específicos del alumno.

- ### Agregar Alumno

  Un componente `FormularioAgregarAlumno` con un **formulario dedicado** para la creación de nuevos registros de alumnos, manejando el estado del formulario con React.

- ### Editar Alumno

  Un componente `FormularioEditarAlumno` que recibe el `id` del alumno de la URL (`/alumnos/:id/editar`) y presenta un **formulario precargado** con la información existente del alumno, permitiendo su modificación.

- ### Detalle del Alumno

  Un componente `DetalleAlumno` que recibe el `id` del alumno de la URL (`/alumnos/:id`) y presenta **todos los datos de un alumno** en particular.

- ### Navegación General
  Un componente `BarraNavegacion` (o similar) que proporciona un **menú de navegación** accesible desde todas las vistas de la aplicación, utilizando `NavLink` o `Link` de `React Router` para la transición fluida entre las diferentes secciones.

---

## Distribución de Funciones

El éxito de este proyecto fue el resultado de un esfuerzo colaborativo y una clara asignación de responsabilidades entre los miembros del equipo:

- **Lautaro Cano (Líder)**

  - Desarrollo de las funciones de `services` (lógica de negocio para la gestión de alumnos y la interacción con la API o datos simulados).
  - Implementación del componente `FormularioAgregarAlumno`.
  - Creación del componente `ListaAlumnos`.
  - Diseño y desarrollo del componente `Home`.

- **Marco Zumino**

  - Desarrollo de las funcionalidades CRUD relacionadas con los alumnos en los componentes de ítems:
    - Lógica para **editar alumno** (dentro del componente `FormularioEditarAlumno`).
    - Lógica para **eliminar alumno** (incluyendo la confirmación UI/UX).
    - Lógica para **ver detalle de alumno** (dentro del componente `DetalleAlumno`).

- **Lucas Camino**

  - Diseño e implementación del componente `BarraNavegacion` para una navegación intuitiva.

- **Tiago Segobia**

  - Aplicación de los **estilos generales para las vistas** (CSS Modules, Styled Components o CSS plano para los layouts de página).

- **Lucas Fernández**

  - Diseño y aplicación del **estilo global de la página** (variables CSS, temas generales, etc.).

- **Muro Lautaro**
  - Aplicación de **estilos específicos para componentes de listas y botones** (reutilizables).

---
