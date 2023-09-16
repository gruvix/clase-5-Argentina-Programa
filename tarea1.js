

const $botonCalcularSalarioMensual = document.querySelector("#calcular-salario-mensual")
$botonCalcularSalarioMensual.addEventListener("click", calcularSalarioMensual) 

const $botonLimpiar = document.querySelector("#reset")
$botonLimpiar.addEventListener("click", limpiar) 

function calcularSalarioMensual(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    let salarioMensual = salarioAnual / 12;
    document.querySelector('#salario-mensual').value = salarioMensual;
}

function limpiar(){
    document.querySelector('#salario-anual').value = ""
    document.querySelector('#salario-mensual').value = ""
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
