// Arreglo que contiene las canciones
var listado_palabras = ["Body Paint", "Big Ideas", "The Car", "I Ain't Quite Where I Think I Am", "There'd Better Be A Mirrorball", "Sculptures of Anything Goes", "Jet Skis on the Moat", "Hello You", "Mr. Schwartz", "Perfect Sense"];
var acertadas = 0;
var timer, indice;
var tiempo = 60;

function comenzarJuego(){
    //sólo la pantalla de juego se queda visible 
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.display = "none";

    //posicionamos el cursor en el input
    document.getElementById("palabra_ingresada").focus();

    //cargamos la palabra
    cargarPalabra();

    //tiempo - cada 1 seg llamamos a la funcion RestarTime
    timer = setInterval('restarTiempo()', 1000);
}
// funcion que carga  la siguiente palabra  del arreglo de forma  aleatoria
function cargarPalabra(){
    //generamos la posicion de forma aleatoria
    indice = Math.round(Math.random()*(listado_palabras.length-1));
    document.getElementById("palabra").innerHTML = listado_palabras[indice];    
    //eliminamos la posicion ya mostrada
    listado_palabras.splice(indice,1);
}

// función que compara la palabra ingresada con la palabra mostrada
function comparar(){
    var palabra_mostrada = document.getElementById("palabra").innerHTML;
    var palabra_tecleada = document.getElementById("palabra_ingresada").value;
    //convertimos toda palabra tecleada a mayúscula
    palabra_tecleada = palabra_tecleada.toUpperCase();

    if(palabra_mostrada==palabra_tecleada){
        acertadas++;
        document.getElementById("palabra_ingresada").value="";
        agregarNodo(palabra_tecleada);
        cargarPalabra(); //cargamos otra palabra;
    }
}

function agregarNodo(palabra){
    var span = document.createElement('span');
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);
}   

//Función que muestra el tiempo
function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo==0){
        //detengo el tiempo
        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertadas;
    }
}