class Uno{
    constructor(){
        this._a = null;
        this._b = null;
    }

    //crea metodos para consultar y editar las propiedades
    
    consulta_Uno(){

        return {a:this._a,b:this._b};
    }

    edit_Uno(a,b){
        this._a = a;
        this._b = b;
    }

}

//--------------------------------------------------------------------



class Dos{
    
    constructor(dato1,dato2){
        this._c = dato1;
        this._d = dato2;
    }

//crea metodos para consultar las propiedades 
    consulta_Dos(dato1,dato2){

        this._c = dato1;
        this._d = dato2;
        
        return {c:this._c,d:this._d};
    }
    
}
export {Uno}
export {Dos}

