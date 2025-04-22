export function modulo_trainers() {

    const listatrainers = [
      { id: "123", nombre: "Pedro", apellido: "Gómez", grupo: "S1" },
      { id: "456", nombre: "Laura", apellido: "Díaz", grupo: "M1" }
    ];
  
    const identificacion = prompt("Por favor, introduce tu ID:");
    const trainerEncontrado = listatrainers.find(entrenador => entrenador.id === identificacion);
  
    if (!trainerEncontradoEncontrado) {
      alert("No se encontró un entrenador con ese ID.");
      return;
    }
  
    alert(`Hola ${trainerEncontradoEncontrado.nombre} ${trainerEncontrado.apellido}, ¡bienvenido/a!`);
  
    let continuar = true;
    while (continuar) {
      const seleccion = prompt("Menú de Opciones:\n1. Mostrar información\n2. Cambiar nombre\n3. Salir");
  
      switch (seleccion) {
        case "1":
          alert(`Nombre: ${trainerEncontrado.nombre}\nApellido: ${trainerEncontrado.apellido}\nGrupo: ${trainerEncontrado.grupo}`);
          break;
        case "2":
          const nuevoNombre = prompt("Introduce el nuevo nombre:");
          trainerEncontrado.nombre = nuevoNombre;
          alert("Nombre cambiado exitosamente.");
          break;
        case "3":
          continuar = false;
          break;
        default:
          alert("Opción no válida. Intenta nuevamente.");
      }
    }
  }