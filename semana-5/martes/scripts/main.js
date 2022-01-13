/*
COMENTARIO MULTILINEA 
*/
console.log('HOLA MUNDO!!!');

//COMENTARIO DE UNA LINEA

/*
VARIABLES
tipo let = "ES UN VALOR QUE SE PUEDE SOBREESCRIBIR"
*/

let nombreVariable = 10;
let edad = 35;
let nombre = "Sebastian";
let sexo = "m";

nombreVariable = "cambiar el valor";
console.log("nombreVariable",nombreVariable);

nombreVariable = "modificado de nueva";
console.log("nombreVariable",nombreVariable);

/*
 VARUABKE tipo const = "Es un tipo de valor que no se puede sobreescribir"
 */
const PI = 3.14;
const URL = "http://www.google.com";
console.log("PI",PI);

let nombre2 = "SEBASTIAN"; //string
let edad2 = 35; //number
let bool = true; //boolean
let indefinido; //undefined
let nulo = null; //null
let datoUnico = Symbol("123456"); //symbol
let sebastian = {
    nacionalidad: "peruana",
    sexo: "m",
    edad: 35,
    profesion: "sistemas",
    especialidad: "frontend",
}; //Objeto

console.log("////////");
console.log("////////TIPOS DE DATOS");
console.log("////////");
console.log("nombre2", typeof nombre2);
console.log("edad2", typeof edad2);
console.log("bool", typeof bool);
console.log("indefinido", typeof indefinido);
console.log("nulo", typeof nulo);
console.log("datoUnico", typeof datoUnico);
console.log("sebastian", typeof sebastian);

/*CAMBIAR TIPO DE DATOS */

console.log("");
console.log("//////////////////////////////");
console.log("/////////CAMBIAR TIPO DE DATOS");
console.log("//////////////////////////////");
console.log("numero",typeof 7);
console.log("numero",typeof "7");

/*De string a numero pueden usar parseInt a parseFloat o tambien Number */
console.log(typeof parseInt("7"));
console.log(typeof parseFloat("3.14"));
console.log(typeof Number("10"));
/*De numero a string */
let numberData = 10;
console.log(typeof String(10));
console.log(typeof numberData.toString()); //number ->string

let numero1= Number(prompt("INGRESA UN NUMERO"));
let numero2 = Number(prompt("INGRESA OTRO NUMERO"));

console.log("numero1",numero1);

alert(numero1 + numero2);





