document.querySelector("#calcular").addEventListener("click", calcularTiempo)
document.querySelector("#reset-totales").addEventListener("click", reiniciarTiempo)

//( tiempo[0] = segundos tiempo[1] = minutos tiempo[2] = horas )
let tiempo = [0, 0, 0]

function calcularTiempo(){
  tiempo = sumarContadorTiempo(tiempo)
  tiempo = ordenarTiempo(tiempo)
  imprimirTiempo()
}

function reiniciarTiempo(){
  tiempo[0] = 0
  tiempo[1] = 0
  tiempo[2] = 0
  imprimirTiempo()
}

function sumarContadorTiempo(){
tiempoSuma = tiempo
tiempoSuma[0] += Number(document.querySelector("#segundos").value)
tiempoSuma[1] += Number(document.querySelector("#minutos").value)
tiempoSuma[2] += Number(document.querySelector("#horas").value)
return tiempoSuma
}

//ordena segundos, minutos y horas para que todo se convierta en la unidad mayor posible siendo 
function ordenarTiempo(){
let tiempoOrden = tiempo
tiempoOrden[1] += Math.floor(tiempoOrden[0]/60)
tiempoOrden[2] += Math.floor(tiempoOrden[1]/60)
tiempoOrden[1] = tiempoOrden[1] % 60
tiempoOrden[0] = tiempoOrden[0] % 60
return tiempoOrden;
}

function imprimirTiempo() {
  console.log(`${tiempo[2]}hs  ${tiempo[1]}'  ${tiempo[0]}"`)
  document.querySelector("#segundos-total").value = tiempo[0]
  document.querySelector("#minutos-total").value = tiempo[1]
  document.querySelector("#horas-total").value = tiempo[2]
}


tiempo.forEach(element => {
  console.log(element)
});

//agregar funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
  window.location = "index.html"
}


//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
