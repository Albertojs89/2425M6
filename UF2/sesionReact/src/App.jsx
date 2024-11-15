import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'



//creamos una función para cambiar el nombre en tiempo real


function App() {
  const [count, setCount] = useState(0)
  const [nombre,setnombre]= useState('Graves')

  function cambiarNombre() {
    console.log(nombre);
    setnombre("Vladimir");
    console.log(nombre);
    
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sesión React jsx</h1>
      {/* ingresamos el componente header creado */}
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={cambiarNombre}>Hola señor {nombre}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
