//utiliza todos los metodos que creaste en las clases del archivo 02_class.js
import {Uno} from "./02_class.js";
import { Dos } from "./02_class.js";

let imput_a=  document.getElementById("id_a"); 
let imput_b =  document.getElementById("id_b"); 


let button = document.getElementById("button");
let divResultado = document.getElementById("datos");

let classUno = new Uno();
let classDos = new Dos();



button.addEventListener("click",function(){

    classUno.edit_Uno(imput_a.value,imput_b.value);
    classUno.consulta_Uno();

    classDos.consulta_Dos();

    console.log(classDos.consulta_Dos("l","a").c);
    console.log(classUno.consulta_Uno().a);

    divResultado.innerHTML += `<div class = "datos">${classUno.consulta_Uno().a}, ${classUno.consulta_Uno().b}, ${classDos.consulta_Dos("l","a").c}, ${classDos.consulta_Dos("l","a").d}</div>`
    
})