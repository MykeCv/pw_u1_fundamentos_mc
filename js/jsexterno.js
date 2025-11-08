function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
function agregarElemento(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML = html;
}
function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';
}
function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';
}
function eliminarElemento(idElemento) {
    document.getElementById(idElemento).remove();
}
function construirH1() {
    return '<h1 id="id_calculadora">Calculadora</h1>'
}
function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
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
    }

    document.getElementById('id_resultado').innerText = resultado;


}
function fundamentosJS() {
    /* 3 Tipos de variables*/
    var nombre = "Michael"; //antigua, ya es considerada obsoleta
    let apellido ="Cevallos"; //variables cambiantes
    let apellido2 = 15;
    apellido2 = "Llumiquinga";
    let arreglo = [1,2,3,4,5,6];
    let diaSemana =['Lunes','Martes','....'];
    const IVA = 15;
    console.log('Fundamentos de JS');
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);
    //Arreglos
    const arreglosDiasSemana =['Lunes','Martes','Miercoles'];
    arreglosDiasSemana.push('Jueves');
    console.log(arreglosDiasSemana);
    arreglosDiasSemana.unshift('Días');
    console.log(arreglosDiasSemana);
    console.log(arreglosDiasSemana[0]);
    console.log('Manejos de nulos, undefined y vacio');
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]);
    console.log(arreglosDiasSemana[6]);
    console.log(arreglosDiasSemana[7]);

    const numerosPares = [2,4,6,8];
    const numerosImpares =[3,5,7,9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    /*Sentacias de Control*/
    let edad =19;
    if(edad >= 18){
        console.log('Es mayor de Edad');
    }else{
        console.log('Es menor de Edad');
    }

    let dia ='lunes';
    switch(dia){
        case 'lunes':
            console.log('Es lunes');
            break;
            case 'martes':
                console.log('Es martes');
                break;
                default:
                    console.log('No es ninguno de esos dias');
    }
     for(let i=0; i<=5; i++){
        console.log(i);
     }

     const frutas =['manzana','sandia','papaya','naranja'];
     for(let fruta of frutas){
        console.log(fruta);
     }

     /*Manejo de Objetos*/
     const profesor = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero:'M',
        ciudad:'Quito'
     }
     console.log(profesor);
     console.log(profesor.nombre);
     profesor.apellido='Teran';
     console.log(profesor);

     if(profesor.ciudad === 'Quito') {
        console.log('Es quiteño');
     }
     if(profesor.edad !== 36){
        console.log('Es diferente 36')

     }else{
        console.log('Es 36');
     }

     for(let clave in profesor) {
        console.log(clave);
        console.log(profesor[clave]);

     }

    const est1 = {
        nombre: 'Luisa',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    const est2 = {
        nombre: 'Luisao',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }

    const arregloEstudiantes = [est1, est2,
        {
            nombre: 'Luisaea',
            apellido: 'Perenguez',
            edad: 27,
            ecuatoriano: true,
            genero: 'M',
            ciudad: 'Quito'
        }
    ];
    console.log(arregloEstudiantes[0])
    console.log(arregloEstudiantes[2])

    /** Desestructuracion    */
    //Arreglos

    const ar1 = [1, 2, 3, 4, 5, 6, 7];
    const [a, b, c, d, e] = ar1;

    console.log(a);
    console.log(b);
    console.log(c);

    const [primero, , , , , , ultimo] = ar1;

    console.log(primero);
    console.log(ultimo);

    const [p1, p2] = [1, 2, 3, 4, 5, 6, 7];
    imprime(ar1, ar1, ar1);

    //Objetos

    const est3 = {
        nombre: 'Jorge',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Cuenca'
    }

    // modifica valores de objetos con formato json,solo toma valores especificos del objeto
    const { nombre: n, ciudad: ciu } = est3;
    console.log(n);
    console.log(ciu);

    const { nombre: n2, ciudad: ciu2 } = {
        nombre: 'L4',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    console.log(n2);
    console.log(ciu2);

    // referencia a un objeto dentro de otro objeto

    const est4 = {
        nombre: 'Jorge',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Cuenca',
        direccion: {
            calle: "Av. America",
            barrio: "La gasca",
            numeracion: "Oe3-123"
        }
    }

    console.log(est4.direccion);
    console.log(est4.direccion.barrio);
    
    
    const {edad: ed, direccion } = est4;
    console.log(ed);
    console.log(direccion);

    //deestructurar es como declarar una nueva varibale
    //es util cuando se trabajaj con el framework , de las apis s recibe un json
    //Sirve para no usar todos los atributos y hacer el json muy pesado
    const {calle} = direccion;
    console.log(calle);
    
    
    const {direccion:{barrio, calle:c1, numeracion}} = est4;
    console.log(barrio, c1, numeracion);
    



}

function imprime(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}