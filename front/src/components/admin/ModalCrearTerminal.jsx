import { useState } from "react"
import { crearTerminal } from "../../services/APITerminal"

function ModalCrearTerminal({ cerrar }) {
    const [nombre, setNombre] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await crearTerminal({
                nombre,
                pedidos: [],
            });

            alert("Terminal creada correctamente");
            cerrar();
        }catch (error){
            alert(error.message)
        }
    }

    return(
        <div className="modal-fond">
            <div className="modal-contenido">
                <button onClick={cerrar}>X</button>

                <h2>Crear terminal</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nombre:
                        <input 
                            type="text"
                            value={nombre}
                            onChange={(e)=>setNombre(e.target.value)}
                            required />
                    </label>
                    
                    <button type="submit">Crear terminal</button>
                </form>
            </div>
        </div>
    )

}

export default ModalCrearTerminal