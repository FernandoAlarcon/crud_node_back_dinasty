-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2023 a las 01:44:02
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_dinasty`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `url_imagen` varchar(500) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `nombre`, `url_imagen`, `descripcion`) VALUES
(2, 'duro de matar', 'https://images.cdn3.buscalibre.com/fit-in/360x360/77/71/7771c702bacf5a143e46cd257d416a32.jpg', 'él man es duro de matar'),
(3, 'GodZilla', 'https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg', 'la era de los monstruos esta de vuelta'),
(4, 'Los Vengadores', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiG-e7YJDBPP7L3swYYzoZDVHl9kYgXqdDdG3oktXOc9bEQnOnFplIcRVeIgAi9imPZFs&usqp=CAU', 'Los heroes mas poderosos del planeta tierra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE `resenas` (
  `id` int(11) NOT NULL,
  `pelicula_id` int(11) NOT NULL,
  `calificacion` varchar(25) NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `resenas`
--

INSERT INTO `resenas` (`id`, `pelicula_id`, `calificacion`, `comentario`, `created_at`) VALUES
(1, 2, '3', 'pelicula mala', '2023-10-27 02:11:57'),
(2, 2, '2', 'dsadas', '2023-10-27 15:15:10'),
(3, 2, '5', 'caca', '2023-10-27 15:17:18'),
(4, 2, '2', 'da', '2023-10-27 15:22:29'),
(5, 2, '2', 'ds', '2023-10-27 15:36:36'),
(6, 2, '5', 'comando', '2023-10-27 15:41:23'),
(7, 0, '5', 'Es una buena pelicula', '2023-10-27 15:42:28'),
(8, 0, '5', 'Es una buena pelicula', '2023-10-27 15:42:29'),
(9, 2, '5', 'me gusto', '2023-10-27 15:45:33'),
(10, 3, '4', 'el chango le gana', '2023-10-27 21:42:06'),
(13, 0, '4', 'info', '2023-10-27 22:37:00'),
(14, 0, '2', 'tt', '2023-10-27 22:37:07'),
(16, 0, '4', 'cc', '2023-10-27 22:40:42'),
(17, 0, '0', 'dd', '2023-10-27 22:40:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
