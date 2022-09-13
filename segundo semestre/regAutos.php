<?php
    if(!isset($_POST['submit'])){
        header("refresh: 3, url=formAutos.html");
    }
    else{
        require_once("classes/autos.class.php");

        $marca = $_POST['marca'];
        $modelo = $_POST['modelo'];
        $anio = $_POST['anio'];
        $trans = $_POST['trans'];
        $puertas = $_POST['puertas'];
        $color = $_POST['color'];

        $auto1 = new Auto($marca, $modelo, $anio, $trans, $puertas, $color);
        //$json = json_encode($auto1);
        //echo $json;

        $auto1->guardarAuto();
    }


?>