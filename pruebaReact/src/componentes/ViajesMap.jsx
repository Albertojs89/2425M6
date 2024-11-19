import viajes from "../viajes.json";

export function ViajesMap(){
  console.log("Cargando MAPS");
  

  /*METODO MAP FUNCTION----------------------
   viajes.map(function(elemento,index){
     console.log(elemento.destino)
   })
el MAP permite generar un nuevo array a partir de las
iteraciones*/

  const listaViajes = viajes.map(function (elemento, index) {
    // console.log(elemento.destino);
    return(elemento.destino)
  });

  console.log(listaViajes);

  return (
    <div style={{ color: "white" }}>
      <h3>Nueva Array function MAPS</h3>
      <ul>
        {
          viajes.map(function(item,index){
            return <li key={index}>{item.destino + " Duracion: " + item.duracion}</li> //en la key ponemos index o item.id como queramos
          })
        }
      </ul>
    </div>
  );
}