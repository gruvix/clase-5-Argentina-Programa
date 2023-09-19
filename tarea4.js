

//Generador numeros aleatorios del 1 al 100
function getRandomFromOneToHundred(){
    return Math.floor(Math.random() * 100) + 1;
}

//llama a generar y los manda a agregar
function generarYAgregar(){
    for(let i = 0; i < 10 ;i++){
        let numero = getRandomFromOneToHundred()
        agregarALista(numero)
    }
}

//agrega los nros a lista
function agregarALista(numero){
    document.querySelector("#lista-numeros").innerText += <li>numero</li>
}

//agregar funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
  window.location = "index.html"
}


//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
