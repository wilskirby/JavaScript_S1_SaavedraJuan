export function modulo_coordinador() {
    
    alert("Bienvenido Coordinador");
  
    while (true) {
      const opcion = prompt("Menú Coordinador:\n1. Ver trainers\n2. Ver campers\n3. Salir");
  
      if (opcion === "1") {
        alert("Trainers:\nPedro Gómez\nMaría López\nCarlos Pérez");
      } else if (opcion === "2") {
        alert("Campers:\nJuan\ Pérez\nAna García\nLuis Fernández");
      } else if (opcion === "3") {
        break;
      } else {
        alert("Opción inválida");
      }
    }
  }