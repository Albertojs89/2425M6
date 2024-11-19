import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/* 
strict mode: cada vez que se renderiza un componente se renderiza dos veces
Es un sistema de seguridad, para verificar que sale 2 veces bien.
Es una buena practica de testing. 

*/ 