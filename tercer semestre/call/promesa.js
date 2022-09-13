let a = 3;

const prom = new Promise((resolve,reject)=>{
    setTimeout(function(){
        return a > 0 ? resolve(a) : reject(a)
    },2000)
})

prom
.then((dato)=>{
    dato *= 2;
    console.log(dato);
    return dato;
})

.then((x)=>{
    x *= 4;
    console.log(x);
    return x;
})
.catch((err)=>{
    console.log("Error dato negativo : ",err);

})
.finally(function(){
    console.log("siampre me ejecuto");
})