<?php

        // fopen -> abre un archivo
        // "c"-> si no existe el archivo, lo crea. si si existe, lo abre y lo agrega
        // "w"-> abre el archivo, borra todo y despues se le puede agregar los valores que quiera
        // fwrite-> al file le escribe
        // fseek-> remplaza elemtnso

    // JsonSerializable es para que el objeto en php pueda ser JSON, implementar hereda las propiedades de JsonSerializable
    class Auto implements JsonSerializable{
        private $marca;
        private $modelo;
        private $anio;
        private $trans;
        private $puertas;
        private $color;

        function __construct($marca , $modelo , $anio , $trans , $puertas , $color){
            $this->marca = $marca;
            $this->modelo = $modelo;
            $this->anio = $anio;
            $this->puertas = $puertas;
            $this->color = $color;

        }

        function JsonSerialize(){
           return get_object_vars($this);
        }

        function guardarAuto(){
            $json = json_encode($this, JSON_PRETTY_PRINT);
            $url = __DIR__ . '\..\JSON\autos.json';
            $file = fopen($url , "c");
           if(filesize($url) == 0){
            fwrite($file, "[\n");
           }
           else{
            fseek($file, -2, SEEK_END);
            fwrite($file, ",\n");
           }
           fwrite($file,$json);
           fwrite($file,"\n]");
           fclose($file);
        }
    }

?>