let y = []
const maximoAleatorio = 100
const cantidadDeNumeros = 10

document.querySelector("#re-roll").addEventListener("click", Roll)
Roll()

//Generador numeros aleatorios del 1 al 100
function getRandomFromOneToHundred(){
    maximo = document.querySelector("#maximo-random").value
    maximo < 1 ? maximo = maximoAleatorio : maximo = maximo
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

//agregar funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
  window.location = "index.html"
}

//volver a calcular nros
function Roll(){
    document.querySelector("#lista-numeros").innerHTML = ``
    y = []
    generarYAgregar()
}

function calcularMinimoYMaximo(){
    max = 0
    min = maximoAleatorio
    y.forEach(element => {
        
    });
}

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
