function FiltroProductos({
  categorias,
  categoriaId,
  setCategoriaId,
  orden,
  setOrden,
  desc,
  setDesc,
}) {
  return (
    <div className="card filtro-card">
      <h2 className="filtro-title">Filtros</h2>

      <div className="filtro-row">
        <div className="filtro-group">
          <label>Categoría</label>

          <select
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
          >
            <option value="">Todas las categorías</option>

            {categorias.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="filtro-group">
          <label>Ordenar por</label>

          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="nombre">Nombre</option>
            <option value="precio">Precio</option>
            <option value="categoria">Categoría</option>
          </select>
        </div>

        <label className="checkbox-group">
          <input
            type="checkbox"
            checked={desc}
            onChange={(e) => setDesc(e.target.checked)}
          />
          Orden inverso
        </label>
      </div>
    </div>
  );
}

export default FiltroProductos;
