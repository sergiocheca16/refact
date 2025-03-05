import { useState } from 'react'
import './App.css'
import logo from "./assets/cocretainc.jpg";

function App() {
  const employees = [
    { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
    { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
    { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
    { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
    { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
    { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
    { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
    { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
    { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
    { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
    { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
    { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
    { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
    { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
    { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
    { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
    { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
    { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
    { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
    { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
    { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
    { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
    { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
    { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
    { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
    { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
    { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
    { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
    { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
    { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
  ];


  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const suma = () => setResult(Number(num1) + Number(num2));
  const resta = () => setResult(Number(num1) - Number(num2));
  const multiplicacion = () => setResult(Number(num1) * Number(num2));
  const division = () => {
    if (Number(num2) === 0) {
      setResult("No se puede dividir por 0");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };  
  
  return (
    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide
    <div className="envoltura">
      {/* Header */}
      <header>
        <img src={logo} className="logo" alt="Log de la empresa" />
      </header>

      {/* Sección de empleados */}
      <section>
        <h2>Lista de Empleados</h2>
        <div className="employee-grid">
          {employees.map((employee, index) => (
        <div className="employee-card" key={index}>
          <strong>{employee.name} {employee.lastName}</strong>
          <p><strong>Edad:</strong> {employee.age}</p>
          <p><strong>Hobbies:</strong> {employee.hobbies.join(", ")}</p>
        </div>
        ))}
        </div>
      </section>

      {/* Calculadora */}
      <section>
        <h2>Calculadora</h2>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
        />
        <div className="buttons">
          <button onClick={suma}>Sumar</button>
          <button onClick={resta}>Restar</button>
          <button onClick={multiplicacion}>Multiplicar</button>
          <button onClick={division}>Dividir</button>
        </div>
        {result !== null && <h3>Resultado: {result}</h3>}
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Gestión de Empleados. Todos los derechos reservados.</p>
        <p>Todos los derechos reservados. Coquetas INC ©</p>
        <p>Dirección: Simancas (Madrid)</p>
        <p>Teléfono: 917335673 - 635444912</p>
        <p>Email: croquetasINC@hotmail.com</p>
      </footer>
    </div>
    /* <pie /> */
  )
}

export default App
