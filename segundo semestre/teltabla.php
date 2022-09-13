<?php
    $url = __DIR__ . '\json\tel.json';
    $json = file_get_contents($url);

    $tellist = json_decode($json);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lista de autos</title>
</head>
<body>
    <h1>Lista de Autos</h1>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Color</th>
            <th>Almacenamiento</th>
            <th>Resolucion</th>
            <th>Audifonos</th>
        </tr>
        <?php
            foreach ($tellist as $tel1) {
                echo "<tr>";
                echo "<td>". $tel1->marca ."</td>";
                echo "<td>". $tel1->modelo ."</td>";
                echo "<td>". $tel1->color ."</td>";
                echo "<td>". $tel1->almac ."</td>";
                echo "<td>". $tel1->res ."</td>";
                echo "<td>". $tel1->audif ."</td>";
                if($tel1->audif){
                    echo "<td>true</td>";
                }
                else {
                    echo "<td>false</td>";
                }
                echo "</tr>";
            }
        ?>
    </table>
</body>
</html>