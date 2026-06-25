import { useEffect, useState } from "react";
import ModalCocina from "../components/ModalCocina";
import ListaPedidos from "../components/ListaPedidos";
import { listarPedidos, cambiarEstado } from "../services/APIPedido";

function CocinaPage() {

    const [estado, setEstado] = useState("FINALIZADO");
    const [pedidos, setPedidos] = useState([]);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
    const [modalActivo, setModalActivo] = useState(false);

    useEffect(() => {
        cargarPedidos();
    }, [estado]);

    async function cargarPedidos() {
        try {
            const data = await listarPedidos(estado);

            setPedidos(data);
        } catch (error) {
            alert(error.message);
            
        }
    }
    async function actualizarEstado() {
        try{
            await cambiarEstado(pedidoSeleccionado.id);
            setPedidoSeleccionado(null);
            setModalActivo(false);
            cargarPedidos();
        } catch (error) {
            alert(error.message);
        }
    }

    
    return (
        <div className="cocina-page">
            <h1>Cocina</h1>

            <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
            >
                <option value="FINALIZADO">Creado</option>
                <option value="EN_PREPARACION">Preparando</option>
                
            </select>

            <ListaPedidos
                pedidos={pedidos}
                setPedidoSeleccionado = {setPedidoSeleccionado}
                setModalActivo = {setModalActivo}
            />
            {modalActivo && (<ModalCocina pedido = {pedidoSeleccionado}
             cerrar = {()=> setModalActivo (false)} 
             actualizarEstado = {actualizarEstado}>  </ModalCocina>)}
           
        </div>
    );
}

export default CocinaPage;
