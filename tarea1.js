//toma boton de html
const $botonCalcularSalarioMensual = document.querySelector("#calcular-salario-mensual")
//agrega funcion a boton
$botonCalcularSalarioMensual.addEventListener("click", calcularSalarioMensual) 

function calcularSalarioMensual(){
    //toma valor de salario anual
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    //se calcula salario mensual
    let salarioMensual = salarioAnual / 12;
    //se actualiza valor de salario mensual
    document.querySelector('#salario-mensual').value = salarioMensual;
}

//toma boton de html
const $botonVolverASelector = document.querySelector("#volver-a-selector")
//agrega funcion a boton
$botonVolverASelector.addEventListener("click", volverASelector) 

//funcion volver a menu de seleccion
function volverASelector(){
  window.location = "index.html"
}

//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>


// document.querySelector('#calcular-salario-mensual').onclick = function(){
//     const salarioAnual = Number(document.querySelector('#salario-anual').value);
//     const salarioMensual = calcularSalarioMensual(salarioAnual);

//     document.querySelector('#salario-mensual').value = salarioMensual;

//     return false;
// }

// function calcularSalarioMensual(salarioAnual){
//     return salarioAnual / 12;
// }
