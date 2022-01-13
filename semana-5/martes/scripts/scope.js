let nombre = "sebastian";
let apellido = "yabiku";
//FUNCION DECLARATIVA
function nombreFuncion(parametroA, parametroB, parametroC){
    console.log(parametroA, parametroB, parametroC);
}

nombreFuncion(10,20,30);
nombreFuncion(1,2,20);

function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function main(){
    nombreFuncion(10,20,30);
    nombreFuncion(1,2,20);
    console.log("La suma es " + sumar(2,3));
    console.log("La suma es modificada " + sumar(2,3));
    //alert(sumar(3,4));    
    console.log(sumar(11,3));
    console.log(restar(11,3));
    console.log(restar(4,3));
}

main();

const a = 5;
const b = 10;

function fn(){
    console.log(a);
}

function functionEjemploUno(){
    let a = 10;
    let b = 30;
    console.log("a functionEjemploUno", a);
    console.log("b functionEjemploUno", b);
}

function functionEjemploDos(){
    let a = 20;
    console.log("a funcionEjemploDos", a);
}

functionEjemploUno();
functionEjemploDos();
console.log(a);
console.log(b);
fn();

console.log("Hola");

let numeroUno = 10;
let numeroDos = 20;
let numeroTres = "10";



