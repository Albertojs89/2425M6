const arrayPartidas = [
  { avatar: "🐉", nick: "DragonSlayer", puntos: 9999, fecha: "2024-11-01" },
  { avatar: "🧙‍♂️", nick: "WizardMaster", puntos: 8500, fecha: "2024-11-03" },
  { avatar: "🤖", nick: "RoboWarrior", puntos: 7230, fecha: "2024-11-05" },
  { avatar: "👽", nick: "AlienHunter", puntos: 6420, fecha: "2024-11-07" },
  { avatar: "🦄", nick: "UnicornSparkle", puntos: 5700, fecha: "2024-11-09" },
  { avatar: "👻", nick: "GhostChaser", puntos: 4930, fecha: "2024-11-10" },
  { avatar: "🦸‍♀️", nick: "SuperHeroGal", puntos: 4320, fecha: "2024-11-11" },
  { avatar: "🐱‍👤", nick: "NinjaKitty", puntos: 3890, fecha: "2024-11-12" },
  { avatar: "💀", nick: "SkullCrusher", puntos: 3450, fecha: "2024-11-13" },
  { avatar: "🦖", nick: "DinoDestroyer", puntos: 3120, fecha: "2024-11-14" },
];

// Funció que pinta la taula amb les dades rebudes
export function pintarTabla() {
  // Generar les files a partir de les dades de l'array
  let filas=" ";
  for (let i = 0; i < arrayPartidas.length; i++) {
    filas += `
                    <tr>
                        <td>${arrayPartidas[i].avatar}</td>
                        <td>${arrayPartidas[i].nick}</td>
                        <td>${arrayPartidas[i].punts}</td>
                        <td>${arrayPartidas[i].data}</td>
                    </tr>
                `;
  }

  // Injectar el codi HTML generat al div amb id="partidas"
  document.querySelector("#partidas").innerHTML = filas;
}

export function tabla(){
  miTabla = `
     <table>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Nick</th>
                            <th>Punts</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody> 
                    ${pintarTabla()} 
                    </tbody>
    </table>  
  `;
}