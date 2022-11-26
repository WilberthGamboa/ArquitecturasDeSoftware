-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2022 a las 06:56:33
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `simple`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `numero` bigint(20) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `numero`, `createdAt`, `updatedAt`) VALUES
(1, 'Wilberth', 9992490406, '2022-11-23 05:41:00', '2022-11-23 05:41:00'),
(2, 'Esteban', 9992490406, '2022-11-23 05:42:13', '2022-11-23 05:42:13'),
(3, 'Ariel', 9992490406, '2022-11-23 05:42:37', '2022-11-23 05:42:37'),
(4, 'Ake', 9992490406, '2022-11-23 05:42:44', '2022-11-23 05:42:44'),
(5, 'Victor', 9992490406, '2022-11-23 05:42:47', '2022-11-23 05:42:47'),
(6, 'Enrique', 9992490406, '2022-11-23 05:42:53', '2022-11-23 05:42:53'),
(7, 'Suleiman', 9992490406, '2022-11-23 05:42:57', '2022-11-23 05:42:57'),
(8, 'El sultan', 9992490406, '2022-11-23 05:43:00', '2022-11-23 05:43:00'),
(9, 'ññññ', 9992490406, '2022-11-23 05:43:14', '2022-11-23 05:43:14'),
(10, 'ñññññ', 9992490406, '2022-11-23 05:43:17', '2022-11-23 05:43:17'),
(11, 'ññññññ', 9992490406, '2022-11-23 05:43:18', '2022-11-23 05:43:18'),
(12, 'ñññññññ', 9992490406, '2022-11-23 05:43:19', '2022-11-23 05:43:19'),
(13, 'ññññññññ', 9992490406, '2022-11-23 05:43:21', '2022-11-23 05:43:21'),
(14, 'ñññññññññ', 9992490406, '2022-11-23 05:43:23', '2022-11-23 05:43:23'),
(15, 'ññññññññññ', 9992490406, '2022-11-23 05:43:24', '2022-11-23 05:43:24'),
(16, 'ñññññññññññ', 9992490406, '2022-11-23 05:43:26', '2022-11-23 05:43:26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
