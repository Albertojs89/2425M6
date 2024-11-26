import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { MovieCard } from './MovieCard'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header />
      </div>
      {/* boton de entradas */}
      <div className="card">
        <MovieCard />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <Footer />
    </>
  )
}

export default App
