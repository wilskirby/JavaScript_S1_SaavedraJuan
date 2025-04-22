import { modulotrainers } from "./modulo_trainers.js";
import { modulocoordinador } from "./modulo_coordinador.js";
import { modulocampers } from "./modulo_camper.js";

function main() {
    while (true) {
      alert("BIENVENIDO A CAMPUSLANDS");
      const opt = prompt("Selecciona tu rol:\n1. Trainer\n2. Camper\n3. Coordinador\n(Escribe 'salir' para terminar)");
  
      if (opt === "salir") break;
  
      switch (opt) {
        case "1":
          alert("Entraste como Trainer");
          modulotrainers();
          break;
        case "2":
          alert("Entraste como Camper");
          modulocampers();
          break;
        case "3":
          alert("Entraste como Coordinador");
          modulocoordinador();
          break;
        default:
          alert("Opción inválida");
      }
    }
  }
  
  main();