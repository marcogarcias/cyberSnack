CREATE DATABASE  IF NOT EXISTS `cybersnack` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cybersnack`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: cybersnack
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `catjuegos`
--

DROP TABLE IF EXISTS `catjuegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catjuegos` (
  `idJuego` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL COMMENT 'Título del juego.',
  `genero` varchar(50) DEFAULT NULL COMMENT 'Género del juego. Por ej: shooter, terror, pelea, etc.',
  `consola` varchar(45) DEFAULT NULL COMMENT 'Indica para que tipo de consola (xboxone, ps4, etc) es el juego.',
  `dateCreate` datetime DEFAULT NULL COMMENT 'Fecha en que creó el registro.',
  `dateUpdate` datetime DEFAULT NULL COMMENT 'Fecha de la ultima actualización del registro.',
  `isDelete` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`idJuego`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Juegos de consola.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catjuegos`
--

LOCK TABLES `catjuegos` WRITE;
/*!40000 ALTER TABLE `catjuegos` DISABLE KEYS */;
/*!40000 ALTER TABLE `catjuegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catperfiles`
--

DROP TABLE IF EXISTS `catperfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catperfiles` (
  `idPerfil` int(11) NOT NULL AUTO_INCREMENT,
  `nombrePerfil` varchar(45) DEFAULT NULL COMMENT 'Nombre del perfil.',
  `descripcionPerfil` varchar(45) DEFAULT NULL COMMENT 'Descripción del perfil.',
  PRIMARY KEY (`idPerfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Catálogo de los perfiles de usuaro.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catperfiles`
--

LOCK TABLES `catperfiles` WRITE;
/*!40000 ALTER TABLE `catperfiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `catperfiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catproductos`
--

DROP TABLE IF EXISTS `catproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catproductos` (
  `idProducto` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del producto.',
  `nombreProducto` varchar(45) DEFAULT NULL COMMENT 'Nombre del producto.',
  `descripcionProducto` varchar(45) DEFAULT NULL COMMENT 'Descripción del producto.',
  `existencias` mediumint(7) DEFAULT '0' COMMENT 'Número de existencias del producto.',
  `precio` decimal(10,0) DEFAULT NULL COMMENT 'Precio unitario del producto.',
  `categoria` varchar(50) NOT NULL COMMENT 'Categoría del producto (papelería, dulces y/o servicios).',
  `activo` tinyint(1) DEFAULT '1' COMMENT 'Indica si el producto está activo dentro del sistema.',
  `dateCreate` datetime DEFAULT NULL COMMENT 'Fecha de creación.',
  `dateUpdate` datetime DEFAULT NULL COMMENT 'Fecha de la última actualización.',
  `isDelete` tinyint(1) DEFAULT '1' COMMENT 'Indica si el registro se ha eliminado de forma lógica del sistema.',
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla que contiene el inventario de los productos como dulces, papelería y servicios.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catproductos`
--

LOCK TABLES `catproductos` WRITE;
/*!40000 ALTER TABLE `catproductos` DISABLE KEYS */;
/*!40000 ALTER TABLE `catproductos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentas`
--

DROP TABLE IF EXISTS `rentas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rentas` (
  `idRenta` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL COMMENT 'Indica si es pc o xbox.',
  `equipo` varchar(45) NOT NULL COMMENT 'Indica el equipo rentado, por ej: pc1, pc2, xbox1, xbox2, etc.',
  `total` decimal(10,2) DEFAULT NULL COMMENT 'Indica el total de la renta del equipo.',
  `tiempo` int(11) DEFAULT NULL COMMENT 'Indica el tiempo que se rentó el equipo.',
  `ticket_id` int(11) NOT NULL COMMENT 'Llave foranea que indica el ticket al que está relacionado el presente registro.',
  `juego_id` int(11) DEFAULT NULL COMMENT 'Indica el tipo de juego que se rentó en caso de haber sido renta de xbox.',
  PRIMARY KEY (`idRenta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Almacena las ventas de las rentas de pc o xbox.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentas`
--

LOCK TABLES `rentas` WRITE;
/*!40000 ALTER TABLE `rentas` DISABLE KEYS */;
/*!40000 ALTER TABLE `rentas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `idTicket` int(11) NOT NULL AUTO_INCREMENT,
  `total` decimal(10,2) DEFAULT NULL COMMENT 'Total del ticket.',
  `isDelete` tinyint(1) DEFAULT NULL COMMENT 'Indica si ha sido eliminado de forma lógica del sistema.',
  `usuario_id` int(11) NOT NULL COMMENT 'llave foranea que del usuario que dió de alta el ticket.',
  `dateCreate` datetime DEFAULT NULL COMMENT 'Fecha en que fue creado el ticket.',
  PRIMARY KEY (`idTicket`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Almacena el ticke de la venta.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del usuario.',
  `nick` varchar(45) NOT NULL COMMENT 'Nick del usuario.',
  `correo` varchar(100) DEFAULT NULL COMMENT 'Correo electrónico del usuario.',
  `nombreUsuario` varchar(45) NOT NULL COMMENT 'Nombre del usuario.',
  `apPaterno` varchar(45) DEFAULT NULL COMMENT 'Apellido paterno del usuario.',
  `apMaterno` varchar(45) DEFAULT NULL COMMENT 'Apellido materno del usuario.',
  `telefono` int(11) DEFAULT NULL COMMENT 'Teléfono del usuario.',
  `contrasena` varchar(250) NOT NULL COMMENT 'Contraseña del usuario con codificación md5.',
  `activo` tinyint(1) DEFAULT '1' COMMENT 'Indica si el usuario está activo dentro del sistema.',
  `dateCreate` datetime NOT NULL COMMENT 'Fecha de creación.',
  `dateUpdate` datetime NOT NULL COMMENT 'Fecha de última actualización.',
  `isDelete` tinyint(1) DEFAULT NULL COMMENT 'Indica si el registro se ha eliminado de forma lógica.',
  `perfil_id` int(11) NOT NULL COMMENT 'Lalave foranea para el id del perfil.',
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Usuarios registrados en el sitema.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `idVenta` int(11) NOT NULL AUTO_INCREMENT,
  `subTotal` decimal(10,0) DEFAULT NULL COMMENT 'Subtotal del productos(s). Por ej. Si son 5 forders se da el subtotal de esos 5 folders.',
  `cantidad` mediumint(7) DEFAULT NULL COMMENT 'Cantidad de productos vendidos. Por ej. 5 folders.',
  `producto_id` int(11) NOT NULL COMMENT 'Llave foranea del id del producto.',
  `ticket_id` int(11) NOT NULL COMMENT 'Llave foranea que indica el ticket al que está relacionado el presente registro.',
  PRIMARY KEY (`idVenta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Almacena los productos (papelería, dulces y/o servicios) que se vendieron en las ventas.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-15 20:17:43
