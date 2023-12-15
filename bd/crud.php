<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepción of data sent via POST from the JavaScript

$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$Apellido = (isset($_POST['Apellido'])) ? $_POST['Apellido'] : '';
$email = (isset($_POST['email'])) ? $_POST['email'] : '';
$telefono = (isset($_POST['telefono'])) ? $_POST['telefono'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['ID'])) ? $_POST['ID'] : '';

switch ($opcion) {
    case 1: // Insert
        $consulta = "INSERT INTO asistencia (nombre, Apellido, email, telefono) VALUES('$nombre', '$Apellido', '$email', '$telefono') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT ID, nombre, Apellido, email, telefono FROM asistencia ORDER BY ID DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2: // Update
        $consulta = "UPDATE asistencia SET nombre='$nombre', Apellido='$Apellido', email='$email', telefono='$telefono' WHERE ID='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT ID, nombre, Apellido, email, telefono FROM asistencia WHERE ID='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3: // Delete
        $consulta = "DELETE FROM asistencia WHERE ID='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
}

echo json_encode($data, JSON_UNESCAPED_UNICODE); // Send the final array in JSON format to JavaScript
$conexion = NULL;
?>
