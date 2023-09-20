let y = []
const maximoAleatorio = 100
const cantidadDeNumeros = 10
let maximo = maximoAleatorio
let topes = {
maximo: 0,
minimo: 100,
repeticiones: 0,
repetido
}

document.querySelector("#re-roll").addEventListener("click", Calcular)
Calcular()

//Generador numeros aleatorios del 1 al 100
function getRandomFromOneToHundred(){
    maximo = document.querySelector("#maximo-random").value
    maximo < 1 ? maximo = maximoAleatorio : 0
    topes.minimo = maximo;
    return Math.floor(Math.random() * maximo) + 1;
}

//llama a generar y los manda a agregar
function generarYAgregar(){
    cantidad = document.querySelector("#cantidad-numeros").value
    cantidad < 1 ? cantidad = cantidadDeNumeros : cantidad = cantidad
    for(let i = 0; i < cantidad ;i++){
        let numero = getRandomFromOneToHundred()
        agregarALista(numero)
    }

}

//agrega los nros a lista
function agregarALista(numero){
    y.push(numero)
    document.querySelector("#lista-numeros").innerHTML += `<li>${numero}</li>`
}

function imprimirTopes(){
    document.querySelector("#maximo").innerText = `El máximo es ${topes.maximo}`
    document.querySelector("#minimo").innerText = `El mínimo es ${topes.minimo}`
    if(topes.repeticiones <= 1){
        document.querySelector("#repetido").innerText = "Ningún numero se repite"
    }
    else{
        document.querySelector("#repetido").innerText = `El numero mas repetido es ${y[topes.repetido]} y se repite ${y[topes.repeticiones]} veces`
    }

}

//agregar funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
  window.location = "index.html"
}

//Calcular nros
function Calcular(){
    document.querySelector("#lista-numeros").innerHTML = ``
    y = []
    generarYAgregar()
    calcularMinimoMaximoYRepetido()
    imprimirTopes()
}

//podría ser mas eficiente si se ordenara primero
function calcularMinimoMaximoYRepetido(){
    let max = 0
    let min = maximo
    let vectorRepes = []

    for (let i = 0; i < y.length; i++) {

        if(y[i] > max){
            max = y[i]
        }
        if(y[i] < min){
            min = y[i]
        }
        vectorRepes[i] = 0
        for (let j = 0; j < y.length; j++) {
            y[i] === y[j] ? vectorRepes[i]++ : 0
        }
    }

    let indiceMaximaRepeticion = 0
    for (let i = 0; i < vectorRepes.length; i++) {
        if (vectorRepes[i] > vectorRepes[indiceMaximaRepeticion]){
            indiceMaximaRepeticion = i;
        }
        
    }
        topes.maximo = max,
        topes.minimo = min,
        topes.repeticiones = vectorRepes[indiceMaximaRepeticion],
        topes.repetido = y[indiceMaximaRepeticion]
}

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
