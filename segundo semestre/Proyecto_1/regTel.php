<?php
    if(!isset($_POST['submit'])){
        header("refresh: 3, url=formAutos.html");
    }
    else{
        require_once("classes/autos.class.php");
        var_dump($_POST);
        $marca = $_POST['marca'];
        $modelo = $_POST['modelo'];
        $color = $_POST['color'];
        $almac = $_POST['almac'];
        $res = $_POST['mp'];    
        $audif = $_POST['audif'];
        if($audif){
            $audif = "si";
        }else{
            $audif = "no";
            
        }

        

        $tel1= new Telefono($marca, $modelo, $color, $almac, $res, $audif);
        //$json = json_encode($auto1);
        //echo $json;

        $tel1->guardarTelf();
    }




?> 