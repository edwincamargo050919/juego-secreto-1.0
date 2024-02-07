/**let titulo = document.querySelector('h1');// document.queryselector(''); es usado para llamar archivos desde html
let parrafo = document.querySelector('p');
*/
let listaNumerosSorteados = [];
let numeroMax =10;

function tituloJuego(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}
function selectorNumeroSecreto (){
    let numeroGenerado =  Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado está en la lista
    if (numeroMax == listaNumerosSorteados.length){
        tituloJuego('Ya se sortearon todos los números secretos, intena jugando de nuevo')
    }
    else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return selectorNumeroSecreto
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }}
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    let numeroSecreto = selectorNumeroSecreto();
    if (numeroSecreto === numeroDeUsuario){//compara a con b y que sean igual tanto en valor como en tipo de dato
        tituloJuego('p', 'Has acertado el juego');
        tituloJuego ('h1', 'Felicidades');
        document.getElementById('reiniciar').removeAttribute('disabled');

    } 
    else{
        //usuario no acierta, limpiar

        if(numeroDeUsuario > numeroSecreto){
        tituloJuego('p', 'El número secreto es menor');
        tituloJuego ('h1', 'Lastimosamente no has acertado');}
        else{
            tituloJuego('p', 'El número secreto es mayor');
        tituloJuego ('h1', 'Lastimosamente no has acertado');
        limpiarCaja();//se llama la funcion limpiar
        }
    }
    return;
}
function limpiarCaja (){// funcion para limpiar caja con el valor del usuario
    let limpiar = document.querySelector('#valorUsuario').value = ''; // definir 
    //limpiar.value = '';//ejecutar el limpiador
}
function mensajesIniciales(){
    tituloJuego('h1','Juego del número secreto');
    tituloJuego('p','Escribe un número del 1 al 10');
}
function reiniciarJuego(){
    //limpiar caja, check 
    limpiarCaja();
    //inidicar mensaje de inicio juego, check
    mensajesIniciales();
    //generar un nuevo numero aleatorio, check
    numeroSecreto = selectorNumeroSecreto();
    //desabilitar el boton de nuevo juego, check
    document.querySelector('#reinicar').setAttribute('disabled','true');

   
   
    
}
mensajesIniciales();