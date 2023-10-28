# crud_node_back_dinasty

Hola Usuario, bienvenido a mi codigo de prueba de crud node(ts) - vue(js)

En este documento se hara la explicacion de como hacer la instalacion del desarrollo

Es un pequeño software diseñado para mostrar funcionalidades logicas, funcionales y esteticas en conexion con una API rest
usando protocolos y librerias de ayuda con el enfoque de hacer mas facil la naveagacions.

Al descargar cada en repositorio debe ejecutarse npm install para descargar las librerias

FronEnd:
- git clone 
- cd ./
- npm install
- npm run serve

BackEnd
	
- git clone
- cd ./project/server
- npm install
- npm run dev

para modificar archivos del backend, debe abrir 2 consolas, al ser un proyecto en TS, usa un 
compilador de archivos a JS para luego ejecutarlos. 

# http://localhost:3000/api/peliculas

En una consola de compilacion

# npm run watch

En una consola de despliegue

# npm run dev




Tecnologias

- frontend = VUE - "https://github.com/FernandoAlarcon/crud_vue_front_dinasty"
- backend  = NodeJs - TS "https://github.com/FernandoAlarcon/crud_node_back_dinasty" 	
- BD       = MySQL
- arquitectura = MVC
- diseño       = API rest   

Librerias

- notificaciones = 'sweetalert2'
- BD = 'promise-mysql'

Styles

- TaildWidn = "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" 
- Bootstrap = "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"


Base de Datos

por favor tener Apache instalado de su preferencia - Xampp, Wampp, HeidySQL, MariaDB

la base de datos contiene 2 tablas para su funcionalidad, hay una copia en los archivos backend llamada prueba_dinasty.sql, 
tambien hay una Query para ejecutar desde consola.

--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `url_imagen` varchar(500) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--

CREATE TABLE `resenas` (
  `id` int(11) NOT NULL,
  `pelicula_id` int(11) NOT NULL,
  `calificacion` varchar(25) NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




