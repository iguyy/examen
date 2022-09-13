import {Prueba2} from  "./product_2.js"


let imputmarca =  document.getElementById("marca"); 
let imputitem =  document.getElementById("item"); 
let imputcantidad =  document.getElementById("cantidad"); 

let button = document.getElementById("button");
let divResultado = document.getElementById("datos");

let classProd = new Prueba2();

button.addEventListener("click",function(){

    classProd.edit(imputmarca.value,imputitem.value,imputcantidad.value);
    divResultado.innerHTML += `<div class = "datos">${classProd.consulta().marca}, ${classProd.consulta().item}, ${classProd.consulta().cantidad}</div>`
    
})

//let marca = document.getElementById("marca"); 
//let item = document.getElementById("item");
//let cantidad = document.getElementById("cantidad");






//    classProd.prod(marca.value,item.value,cantidad.value);
    

    
  //  console.log(classProd.datos().marca);
    //console.log(classProd.datos().item);
    //console.log(classProd.datos().cantidad);

    
    
  //  let classPrueba = new Prueba();
    //console.log(classPrueba);



    //classProd.prod(classProd.datos().marca,classProd.datos().item,classProd.datos().cantidad)



//    console.log(classProd.prod2().cantidad);
  //  console.log(classProd.prod2().item);
    //console.log(classProd.prod2().marca);
//    console.log(classProd.prod2().disponible);




