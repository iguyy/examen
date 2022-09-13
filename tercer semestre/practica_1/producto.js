class Prueba{

    constructor(){
        this._marca = null;
        this._item = null;
        this._cantidad = null;
    }

    consulta(){

        return {marca:this._marca,item:this._item,cantidad:this._cantidad};
    }

    edit(marca,item,cantidad){
        this._marca = marca;
        this._item = item;
        this._cantidad = cantidad;
    }


}

export {Prueba}



   
    
    //objeto(){

    //return {marca:this.marca,item:this.item,cantidad:this.cantidad};

    //}


    //prod(marca,item,cantidad){
//
  //      this.marca = marca;
    //    this.item = item;
      //  this.cantidad = cantidad;
        
      
    //}
//}

//let classPrueba = new Prueba("p");
//console.log(classPrueba);

