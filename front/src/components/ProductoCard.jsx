function ProductoCard({ producto }) {
  return (
    <div className="producto-info">
      <h3>{producto.nombre}</h3>
      <span>Precio: {producto.precio}€</span>
    </div>
  );
}

export default ProductoCard;
