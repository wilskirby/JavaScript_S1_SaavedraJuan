export function modulo_campers() {
    const listaCampers = [
      { id: "1", nombre: "Juan", nivelRiesgo: "medio" },
      { id: "2", nombre: "Ana", nivelRiesgo: "alto" }
    ];
  
    const identificador = prompt("Introduce tu ID personal:");
    const camperActual = listaCampers.find(camper => camper.id === identificador);
  
    if (!camperActual) {
      alert("No se encontró ningún camper con ese ID.");
      return;
    }
  
    alert(`Hola ${camperActual.nombre}, ¡bienvenido/a al sistema!`);
  
    let activo = true;
    while (activo) {
      const eleccion = prompt("Opciones disponibles:\n1. Consultar riesgo\n2. Editar riesgo\n3. Salir");
  
      switch (eleccion) {
        case "1":
          alert(`Nivel de riesgo actual: ${camperActual.nivelRiesgo}`);
          break;
        case "2":
          const nuevoRiesgo = prompt("Escribe el nuevo nivel de riesgo (alto, medio o bajo):");
          camperActual.nivelRiesgo = nuevoRiesgo;
          alert("Nivel de riesgo actualizado con éxito.");
          break;
        case "3":
          activo = false;
          break;
        default:
          alert("La opción ingresada no es válida. Inténtalo nuevamente.");
      }
    }
  }