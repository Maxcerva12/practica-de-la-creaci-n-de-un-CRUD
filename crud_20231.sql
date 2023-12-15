-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-02-2019 a las 01:16:27
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud_20231`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `asistencia` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `Apellido` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `asistencia` (`ID`, `nombre`, `Apellido`, `email`, `telefono` ) VALUES
(1, 'María', 'Colombia', 'maria@example.com', 52),
(2, 'Jorge', 'Argentina', 'jorge@example.com', 48),
(3, 'Silvia', 'Venezuela', 'silvia@example.com', 25),
(4, 'Ramiro Perez', 'Uruguay', 'ramiro@example.com', 35),
(5, 'Carlos', 'Colombia', 'carlos@example.com', 28),
(6, 'Cristian', 'Francia', 'cristian@example.com', 22),
(7, 'Roberto', 'Perú', 'roberto@example.com', 20),
(8, 'Mauricio', 'Venezuela', 'mauricio@example.com', 41),
(9, 'Karina', 'México', 'karina@example.com', 30),
(10, 'José', 'Chile', 'jose@example.com', 19),
(11, 'Beatriz', 'Colombia', 'beatriz@example.com', 25);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personas`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `asistencia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
