
import {clase1} from "./clase1.js"



class clase2 extends clase1{
    constructor(){
        super();
        this.prop2=55;
    }
    
    met2(){
        console.log(" Clase");
        let b = this.prop1 + this.prop2;
        return b;
    }
}

export {clase2}