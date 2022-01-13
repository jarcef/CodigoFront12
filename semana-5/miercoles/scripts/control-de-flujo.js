/*
Ejemplo numero
*/
function ejercicioUno(){

let edad = prompt("Ingresa tu edad: ");

    if(edad > 18){
        alert("Bienvenido al club");
    }else{
        alert("NO ERES BIENVENIDO!!");
    }
}

/*
Ejemplo dos
*/
function ejemploDos(){
    let saborHelado = prompt("Ingresa tu sabor de helado: ");

    if(saborHelado.toUpperCase() == "FRESA"){
        alert("Tu sabor es fresa");
    }else if(saborHelado.toUpperCase() == "MANGO"){
        alert("Tu sabor es mango");
    }else if(saborHelado.toUpperCase() == "CHOCOLATE"){
        alert("Tu sabor es chocolate");
    }else{
        alert("No tenemos ese sabor");
    }
}

//ejemploDos();

function printTypeVehicle(type){
    return alert("Elegiste un " +  type)
}

function ejemploTres(){
    let vehiculo = prompt("Por favor elige tu vehiculo(auto, moto, bicicleta, scooter)");
    switch(vehiculo){
        case "auto": {
           // callAlert("auto");
           printTypeVehicle("auto");
           break;
        }
        case "moto": {
          //  callAlert("moto");
            printTypeVehicle("auto");
            break;
        }
        case "bicicleta": {
          //  callAlert("bicicleta");
            printTypeVehicle("bicicleta");
            break;
        }
        case "scooter": {
         //   callAlert("scooter");
            printTypeVehicle("bicicleta");
            break;
        }
        default: {
          // ejemploTres();
          alert("No hay vehiculo disponible");
        }
    }

    console.log("se termino el ejemploTres");
}

//debugger;
//ejemploTres();

/*----------------------------------------------------------------
Ejemplo Cuatro
*/
function ejemploCuatro(){
    const sexo = prompt("Ingresa tu sexo");

    sexo == "m" ? alert("Eres masculino") : alert("Eres femenino");
}

ejemploCuatro();