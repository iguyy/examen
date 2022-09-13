let op = function(p1,p2,callback){
    return callback(p1,p2);
}

console.log(op(1,2,function(a,b){return a+b}));

console.log(op(1,2, a=>a+5));

function a(dato){

    dato *= 2;

}


a(5);

function uno (a,b,callback){
    setTimeout(function(){
        a += b;
        callback(a);
    },2000);
}

function dos(x){
    x *= 5;
    console.log(x);
}

uno(1,3,dos);