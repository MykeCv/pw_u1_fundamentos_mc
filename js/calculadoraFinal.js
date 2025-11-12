let num1=0;
let num2=0;
<<<<<<< HEAD
let operador ="";
let display = document.getElementById('display');

=======
let display = document.getElementById('display');
>>>>>>> 6d2fece09be187a73783e6301bea14afbe237a86
function mostrarDisplay(valor){
    let elemento = document.getElementById('display')
    elemento.innerText= elemento.innerText + valor;
}

<<<<<<< HEAD
function limpiarDisplay() {
    if (!display) display = document.getElementById('display');
    display.innerText = "";
    num1 = 0;
    num2 = 0;
    operador = "";
}

function borrarUltimo() {
    if (!display) display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function Operaciones(op) {
    num1 = parseFloat(display.innerText);
    operador = op;
    display.innerText = "";
}

function sumar(num1, num2){
    return num1+num2;
}

function restar(num1, num2){
    return num1-num2;
}

function multiplicar(num1, num2){
    return num1*num2;
}
function dividir(num1, num2){
    return num1/num2;
}
function porcentaje(num1, num2){
    return (num1 * num2) /100;
}

function calcularOperacion() {
    num2 = parseFloat(display.innerText);
    let resultado = 0;
    if (display.innerText.includes("%") && operador === "") {
        let valor = parseFloat(display.innerText.replace("%", ""));
        display.innerText = valor / 100;
        return;
    }

    switch (operador) {
        case "+":
            resultado = sumar(num1, num2);
            break;
        case "-":
            resultado = restar(num1, num2);
            break;
        case "*":
            resultado = multiplicar(num1, num2);
            break;
        case "/":
            resultado = dividir(num1, num2);
            break;
        case "%":
            resultado = porcentaje(num1, num2);
            break;
        default:
            resultado = display.innerText;
    }
    if (isNaN(resultado)) {
        display.innerText = "Error";
    } else {
       
        display.innerText = parseFloat(resultado.toFixed(8));
=======
function Operaciones(operador){
    switch(operador){
        
    }
}
function sumar(num1, num2){
    num1 = display.innerText;
    num2 = display.innerText;
    return num1+num2;
}

function restar(){
    num1 = display.innerText;
    num2 = display.innerText;
    return num1-num2;
}

function multiplicar(){
    num1 = display.innerText;
    num2 = display.innerText;
    return num1*num2;
}
function dividir(){
    num1 = display.innerText;
    num2 = display.innerText;
    return num1/num2;
}
function porcentaje(){
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if (tipo === '+') {
        resultado = sumar(num1, num2);
    }
    if (tipo === '-') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
>>>>>>> 6d2fece09be187a73783e6301bea14afbe237a86
    }
}