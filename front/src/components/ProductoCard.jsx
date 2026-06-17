function ProductoCard( {producto} ){
    return(
        <div className="producto">
            <p>
                {producto.nombre}
            </p>
            <p>
                Precio: {producto.precio}€
            </p>
        </div>
    )
}

export default ProductoCard;