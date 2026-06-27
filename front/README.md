# Frontend de Gestión de Pedidos

Frontend desarrollado con React para consumir la API REST del sistema de gestión de pedidos, productos y stock.

## Descripción

Este proyecto implementa la interfaz de usuario del sistema de gestión de pedidos desarrollado en el backend ubicado en el repositorio https://github.com/Sine46/Hackaboss-Proyecto-Grupo-B.

Permite gestionar el flujo completo de un pedido:

- Creación de pedidos desde terminal.
- Gestión de pedidos en cocina.
- Visualización de pedidos listos para recoger.
- Administración de productos, stock y terminales.

Toda la lógica de negocio se encuentra centralizada en el backend, mientras que el frontend se encarga de mostrar la información y gestionar la interacción con el usuario.

---

## Tecnologías utilizadas

- JavaScript (ES6+)
- React
- React Router
- Vite
- HTML5
- CSS3
- Fetch API
- Git
- GitHub

---

## Arquitectura

El proyecto sigue una estructura basada en componentes:

pages → components → services → API REST

### Organización

- **Pages:** vistas principales de la aplicación.
- **Components:** componentes reutilizables.
- **Services:** capa de comunicación con la API.
- **CSS:** estilos globales de la aplicación.

---

## Vistas Implementadas

### Home

Pantalla principal de navegación.

Permite acceder a:

- Terminal
- Cocina
- Recogida
- Administración

---

### Terminal

Permite crear pedidos.

Funcionalidades:

- Visualización de productos.
- Filtrado por categorías.
- Ordenación de productos.
- Gestión de cantidades.
- Confirmación de pedidos.
- Visualización del código generado.

---

### Cocina

Permite gestionar los pedidos pendientes de preparación.

Funcionalidades:

- Consulta de pedidos.
- Visualización del detalle.
- Cambio de estado.
- Seguimiento del flujo de preparación.

---

### Recogida

Pantalla orientada al cliente.

Funcionalidades:

- Mostrar pedidos listos para recoger.
- Identificación mediante código.
- Actualización periódica de la información.

---

### Administración

Permite realizar tareas de gestión.

Funcionalidades:

- Gestión de productos.
- Gestión de stock.
- Gestión de terminales.
- Consulta de estadísticas.

---

## Endpoints Consumidos

### Pedidos

GET /api/pedidos

Obtiene todos los pedidos.

GET /api/pedidos?estado={estado}

Obtiene pedidos filtrados por estado.

POST /api/pedidos

Crea un nuevo pedido.

PATCH /api/pedidos/{id}/estado

Actualiza el estado de un pedido.

---

### Productos

GET /api/productos

Obtiene todos los productos.

GET /api/productos?activo=true

Obtiene únicamente los productos activos.

PUT /api/productos/{id}

Actualiza un producto.

PATCH /api/productos/{id}/stock

Actualiza el stock disponible.

---

### Categorías

GET /api/categorias

Obtiene todas las categorías.

---

### Terminales

GET /api/terminales

Obtiene las terminales registradas.

---

## Flujo de Usuario

### Creación de pedido

1. El usuario accede a la Terminal.
2. Selecciona los productos.
3. Ajusta las cantidades deseadas.
4. Confirma el pedido.
5. Se genera un código identificador.

### Preparación

1. Cocina visualiza los pedidos pendientes.
2. Consulta el detalle.
3. Actualiza el estado del pedido.

### Recogida

1. El pedido aparece en la pantalla de recogida.
2. El cliente identifica su código.
3. El pedido es entregado.

---

## Manejo de Errores

La aplicación contempla errores habituales de comunicación con la API:

- Errores de conexión.
- Peticiones inválidas.
- Productos sin stock.
- Recursos inexistentes.
- Errores internos del servidor.

Se muestran mensajes informativos para facilitar la interacción del usuario.

---

## Estructura del Proyecto

src/

├── components/

│ ├── admin/

│ ├── DetallePedido.jsx

│ ├── FiltroProductos.jsx

│ ├── ListaPedidos.jsx

│ ├── ListaProductos.jsx

│ ├── ModalCocina.jsx

│ ├── PedidoCard.jsx

│ ├── PedidoCodigoCard.jsx

│ ├── ProductoCard.jsx

│ └── ProductosPedido.jsx

├── pages/

│ ├── Home.jsx

│ ├── TerminalPage.jsx

│ ├── CocinaPage.jsx

│ ├── RecogidaPage.jsx

│ └── AdminPage.jsx

├── services/

│ ├── APIPedido.js

│ ├── APIProducto.js

│ ├── APICategoria.js

│ └── APITerminal.js

├── App.jsx

├── main.jsx

└── index.css

---

## Configuración Básica

Instalar dependencias:

npm install

Ejecutar la aplicación:

npm run dev

La aplicación estará disponible en:

http://localhost:5173

Es necesario que el backend Spring Boot se encuentre ejecutándose previamente en:

http://localhost:8080

---

## Suposiciones y Limitaciones

- El frontend depende completamente del backend.
- No existe autenticación de usuarios.
- No existen roles o permisos.
- La terminal utilizada está configurada de forma fija.
- La actualización de datos se realiza mediante peticiones periódicas.
- No existe persistencia local de la información.

---

## Posibles Mejoras

- Autenticación mediante JWT.
- Gestión de roles.
- Actualización en tiempo real mediante WebSockets.
- Uso de Context API o Redux.
- Variables de entorno para la configuración.
- Tests unitarios y de integración.
- Diseño responsive avanzado.
- Despliegue en producción.
- Optimización de rendimiento.

---

## Autores

Proyecto desarrollado como parte del curso de Frontend con React.

Cristina Senra Sanmiguel (Sine46)

Laurentiu Patrunjel Constantin (ripergnd)

Javier Cervera Centenero (Jacercen)
