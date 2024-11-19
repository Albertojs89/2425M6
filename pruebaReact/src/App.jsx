import { ConsolaForEach } from './componentes/ConsolaForEach'
import viajes from './viajes.json'
import { ViajesMap } from './componentes/ViajesMap'


export default function App(){
  console.log('componente app, cargado')
  
  return (
    <>
      <h1>Alberto</h1>
      <p>Jiménez</p>
      <ConsolaForEach />
      <ViajesMap />
      
    </>
  )

}



