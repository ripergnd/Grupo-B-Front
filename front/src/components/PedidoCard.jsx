function PedidoCard({ pedido, onClick }) {
    return (
        <div className="pedido-card">
            <h3>Pedido #{pedido.id}</h3>

            <p><strong>Estado:</strong> {pedido.estado}</p>

            <p><strong>Productos:</strong> {pedido.productos?.length ?? 0}</p>

            <button onClick={onClick}> Ver detalle </button>
        </div>
    );
}

export default PedidoCard;