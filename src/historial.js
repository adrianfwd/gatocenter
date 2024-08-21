function busqueda() {
    const textoBusqueda = event.target.value.toLowerCase();
    if (textoBusqueda.trim() === '') {
      // Si el campo de búsqueda está vacío, mostrar todos los ingredientes
      this.ingredientesFiltrados = [...this.solicitudesHistorial];
    } else {
      // Filtrar ingredientes basados en la búsqueda
      this.Filtrados = this.so.filter(solicitudesHistorial =>
        solicitudesHistorial.nombre.toLowerCase().includes(textoBusqueda)
      );
    }
  }