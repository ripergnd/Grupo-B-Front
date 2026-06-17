const API_URL = "http://localhost:8080/api/terminales";

export async function listarTerminales(){
    const response = await fetch(API_URL);
    return response.json();
}
export async function crearTerminal(terminal) {
    const response = await fetch(API_URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(terminal)
    });
    return response.json();
}
export async function actualizarTerminal(id, terminal){
    const response = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(terminal)
    });
    return response.json();
}
export async function obtenerTerminalMasUtilizada() {
    const response = await fetch(`${API_URL}/mas-utilizada`);

    return await response.json();
}