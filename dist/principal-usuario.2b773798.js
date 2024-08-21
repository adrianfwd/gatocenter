function pc() {
    const textoBusqueda = event.target.value.toLowerCase();
    if (textoBusqueda.trim() === "") // Si el campo de búsqueda está vacío, mostrar todos los ingredientes
    this.ingredientesFiltrados = [
        ...this
    ];
    else // Filtrar ingredientes basados en la búsqueda
    this.Filtrados = this.ingredientes.filter((ingrediente)=>ingrediente.nombre.toLowerCase().includes(textoBusqueda));
}

//# sourceMappingURL=principal-usuario.2b773798.js.map
