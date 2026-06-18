function FiltroProductos({
    categorias,
    categoriaId,
    setCategoriaId,
    orden,
    setOrden,
    desc,
    setDesc
}) {
    return (
        <>
            <h3>Filtrar por:</h3>
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
            <h3>Ordenar por:</h3>
            <select
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
            >
                <option value="nombre">Nombre</option>
                <option value="precio">Precio</option>
                <option value="categoria">Categoría</option>
            </select>
<br />
            <label>Orden inverso
                <input type="checkbox"
                    checked={desc}
                    onChange={(e) => setDesc(e.target.checked)} />
            </label>
        </>
    );
}

export default FiltroProductos;