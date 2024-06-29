// selectores: la forma en que js seleciona el elemento
//document objet model DOM

/* let parrafo = document.querySelector('p');  primera opcion sin funcion
parrafo.innerHTML = 'Ingrese el numero del 1 al 10' */

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignacionTextoElemento(elemento, texto) {
    let elemetoHTML = document.querySelector(elemento);    // meteodo que permite ingresar a cada uno de los elementos
    elemetoHTML.innerHTML = texto;
    return;
}
function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);  //GET PARA traer el id del input/ paseint para cambiar tipo de variable a numero
   /*  console.log(typeof(numeroDeUsuario)); // confirmar tipo de valos de la variables si es string o numero
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));*/
    
    if(numeroDeUsuario === numeroSecreto){
        asignacionTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`)  //template string , operadores terniarios
        document.getElementById('reiniciar').removeAttribute('disabled')  //estamor removiendo el disabled para habilitar el 2 boton
    }else if(numeroDeUsuario < numeroSecreto){
        asignacionTextoElemento('p', 'el numero es mayo ')
    }else(asignacionTextoElemento('p','el numero es menor'))
        intentos++;
        limpiarCaja();
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';  //# reconoce que es un id 

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    //si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignacionTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else {

        if (listaNumerosSorteados.includes(numeroGenerado)){  //metodo includes:ya esta el parametro regidtrado --- arreglos recursividad
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }    
}
function condicionesIniciales () {
    asignacionTextoElemento('h1','Juego del numero secreto ');
    asignacionTextoElemento('p',`Ingrese el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}

function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
    //inicializar el nuemero de intentos 
    condicionesIniciales();
    //desabilitar nuevamnete el boton 
    document.querySelector('#reiniciar').setAttribute('disabled','true');  // ahora desabilitar boton
    
}
condicionesIniciales();
