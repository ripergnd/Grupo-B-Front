import { agregarProducto, eliminarProducto, cambiarEstado } from "../services/APIPedido";
function ProductosPedido({ pedido, setPedido }) {

    const productosPedido = pedido.productos || []
    const aumentarCantidad = async (productoId) => {
        try{
        const pedidoActualizado = await agregarProducto(
            pedido.id,
            [{
                productoId,
                cantidad: 1,
            }]);

            console.log(pedidoActualizado.productos)

            setPedido(pedidoActualizado);
        }catch (error) {
            alert("No se pudo aumentar la cantidad")
        }
    }

    const disminuirCantidad = async (productoId) => {
        try{
        const pedidoActualizado = await agregarProducto(
            pedido.id,
        [{
            productoId,
            cantidad: -1,
        }]);
        setPedido(pedidoActualizado);
    }catch (error) {
        alert("No se pudo disminuir la")
    }
    }

    const eliminarProductoPedido = async (productoId) => {
       try {
        const pedidoActualizado = await eliminarProducto(
            pedido.id,
            productoId
        );
        setPedido(pedidoActualizado);
       }catch (error) {
        alert("No se pudo eliminar el producto")
       }
    }

    const finalizarPedido = async () => {
        try {
            const pedidoFinalizado = await cambiarEstado(pedido.id);
            setPedido(pedidoFinalizado);
            alert(`Pedido finalizado. Código: ${pedidoFinalizado.codigo}`);
            setPedido(null);

        }catch (error){
            alert(error.message)
        }
    }

    return(
        <div>
            <h2>Pedido actual: {pedido.codigo}</h2>
            <p>Total: {pedido.precioTotal}€</p>
            <h3>Productos añadidos:</h3>
            {pedido.productos.length === 0 ? (
                <p>No se han añadido productos todavía</p> 
            ) : (
                <ul>
                    {pedido.productos.map((producto)=>(
                        <li key={producto.id}>
                            <span>
                                {producto.nombre} - {producto.cantidad}
                            </span>
                            <button onClick={()=>disminuirCantidad(producto.id)}> - </button>
                            <button onClick={()=>aumentarCantidad(producto.id)}> + </button>
                            <button onClick={()=>eliminarProductoPedido(producto.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={finalizarPedido}>Finalizar pedido</button>
        </div>
    )
}

export default ProductosPedido;