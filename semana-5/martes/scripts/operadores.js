console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(9 ** 2);// Exponenciación

/**OPERADORES DE ASIGNACIÓN
 */

let numero = 1000;
/* OPERADORES DE INCREMENTO Y DECREMENTO */
numero++;
console.log(numero);

numero--;
console.log(numero);

/*OPERADORES DE COMPARACION*////
let numeroUno = 10;
let numeroDos = 20;
let numeroTres = "10";
console.log(numeroUno > numeroDos); // numeroUno es mayor a numeroDos --> false
console.log(numeroUno < numeroDos);//numeroUno es menor a numeroDos --> true -> true
console.log(numeroUno >= numeroDos);// numeroUno es mayor o igual a numeroDos --> false
console.log(numeroUno <= numeroDos);//numeroUno es menor o igual a numeroDos --> true
console.log(numeroUno != numeroDos);//numeroUno es diferente a numeroDos -->true;
console.log(numeroUno == numeroDos);//NumeroUno es igual a NumeroTres en tipo -> true;
console.log(numeroUno === numeroDos);//NumeroUno es igual a numeroTres en tipo -> false
console.log(numeroUno !== numeroDos);//NumeroUno es diferente a numero tres en tipo -> true

/*OPERADORES LÓGICOS*/

let numeroUnoLogico = 10;
let numeroDosLogico = 20;
let numeroTresLogico = "10";
let nombreLogico ="Sebastian";
let hija = "valentina";

console.log(numeroUnoLogico > 5 && nombreLogico == "Sebastian"); //true
console.log(numeroUnoLogico > 5 && nombreLogico == "Sebastian" && hija=="Johana"); //false
console.log(numeroUnoLogico > 5 && nombreLogico == "Sebastian" || hija=="Johana"); // true
console.log(!(hija == "valentina"));
console.log("KATIA".length > 4 && "KATIA" == "KATIA" && "KATIA".charAt(0) == "K");//true