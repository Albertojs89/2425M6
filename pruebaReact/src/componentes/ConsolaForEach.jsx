import viajes from "../viajes.json";

//siempre en mayuscula y nueva carpeta componentes!

export function ConsolaForEach() {
  console.log("cargando consola forEach");
  // console.log(viajes)
  //luego si quieres acceder a una variable
  //concatenas con elemento.destino por ejemplo
  viajes.forEach(function (elemento, index) {
    // console.log(elemento);
  });
  return (
    <div className="componente" style={{ border: "1px solid white" }}>
      <h3>Consola ForEach!</h3>
    </div>
  )
}
