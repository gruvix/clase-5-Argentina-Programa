//variables
let nombre
let segundoNombre
let apellido
let edad
let esPrimerEnvio = true;
let textoInformacion = document.querySelector("#texto-informacion")

//asignacion de botones
const $enviarInformacion = document.querySelector("#enviar-informacion")
$enviarInformacion.addEventListener("click", guardarInformacion)
$enviarInformacion.addEventListener("click", mostrarTexto)
document.querySelector("#reset").addEventListener("click", ocultarTexto)

//funcion guardar todos los datos ingresados en los input
function guardarInformacion(){
  nombre = document.querySelector('#nombre').value
  segundoNombre = document.querySelector('#segundo-nombre').value
  apellido = document.querySelector('#apellido').value
  edad = Number(document.querySelector('#edad').value) || 0
}

//funcion compilar datos y mostrarlos en un texto
function mostrarTexto(){
  let texto = `Tu nombre es ${nombre}, tu segundo nombre es ${segundoNombre}, tu apellido es ${apellido} y tenés ${edad} años`
  textoInformacion.innerText = texto;
  //Esto se ejecuta "una sola vez" para mostrar la informacion
  if(esPrimerEnvio){
    esPrimerEnvio = false
    textoInformacion.removeAttribute("hidden")
    document.querySelector('#michelin').style.display = 'block';
    document.querySelector("#texto-michelin").removeAttribute("hidden")
  }
}
//funcion ocultar texto e imagen
function ocultarTexto(){
  esPrimerEnvio = true
  textoInformacion.setAttribute("hidden", "hidden")
  document.querySelector('#michelin').style.display = 'none';
  document.querySelector("#texto-michelin").setAttribute("hidden", "hidden")
}



//agregar funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
  window.location = "index.html"
}

//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */
