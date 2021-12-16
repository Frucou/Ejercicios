"use strict";

import { Persona, Estudiante, Profesor } from "./Personas.js";


// Nodos 
// Ejercicio 1
const mensajes = document.querySelector("#mensaje");
const comentarios = document.querySelector(".comentarios1");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
// Ejercicio 6
const dniInput = document.querySelector("#numeros-dni");
const btn3 = document.querySelector(".btn3");
const mostrarLetra = document.querySelector("#mensaje-Dni");

// Ejercicio 7
const btn4 = document.querySelector(".btn4");

//Ejercicio 8
const btn5 = document.querySelector(".btn5");

// Ejercicio 9
const btn6 = document.querySelector(".btn6");

// Ejercicio 11 
const btn7 = document.querySelector(".btn7");

// Variables


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var valores = [true, 5, false, "hola", "adios", 2];


var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
    'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];







// Funciones

// Ejercico 2
const mensajesAlert = () => {
    let mensaje = `
    JavaScript
    Hola Mundo!
    Qué facil es incluir 'comillas simples'
    y "comillas dobles"
    `;


    alert(mensaje);
};

// Ejercicio 4
const determinar = () => {
    const resultado = valores.filter(word => word.length > 4);
    const encontrarTrue = valores.find(element => element === true);
    const encontrarFalse = valores.find(element => element === false);
    const encontrar2 = valores.filter(elemente => elemente === 2);
    const encontrar5 = valores.filter(elemente => elemente > 2);
    const operaciones = (a, b) => {
        let suma = a + b;
        let resta = a - b;
        let mult = a * b;
        let division = a / b;
        let resto = a % b;
        console.log(`
        Suma: ${suma}
        resta: ${resta}
        miltiplicación: ${mult}
        division: ${division}
        resto: ${resto}
        `)
    }

    console.log(resultado.join());
    console.log(encontrarTrue);
    console.log(encontrarFalse);
    console.log(encontrar2, encontrar5);
    operaciones(encontrar5, encontrar2);
};


// Ejercicio 6
const letraDni = () => {
    let numerosDni = dniInput.value;
    let num = parseInt(numerosDni);
    let letra = numerosDni.slice(-1);
    let obtenerLetra = 0;
    letra = letra.toUpperCase();
    if (num > 0 && num < 99999999) {
        obtenerLetra = letras[num % 23];
        if (letra === obtenerLetra) {
            console.log(numerosDni)
            console.log(num)
            // console.log(letra);
            console.log(obtenerLetra);
        } else {
            alert("La letra que has indicado no es la correcta!");
        }

    } else {
        alert("Introduce un número de DNI válido (8 números)")
    }
    // la siguiente variable devuelve la letra que se encuentra en la
    // posición dada por el resto calculado


}

// Ejercicio 7
const calcFactorial = () => {
    let numCalcular = prompt("Introduce un número: ");
    let resultado = 1;
    for (let i = 1; i <= numCalcular; i++) {
        resultado = resultado * i;
    }

    alert(`El factorial de ${numCalcular} es: ${resultado}`);
}

// Ejercicio 8

const comprobarPar = (num) => {
    num = num % 2;
    if (num === 0) {
        return alert("Es par");
    } else {
        return alert("Es impar");
    }
}

const esPar = () => {
    let guardarNum = prompt("Introduce uno o varios números: ");
    guardarNum = parseInt(guardarNum);
    // if (guardarNum == NaN) {
    //     alert("No es un número!");
    // } else {
    //     
    // }
    comprobarPar(guardarNum);
}


// Ejercicio 9
const mayusMinus = () => {
    let cadena = prompt("Introduce una cadena de texto: ");

    if (cadena === cadena.toUpperCase()) {
        alert(`Es mayúsculas: ${cadena}.`);
    } else if (cadena === cadena.toLowerCase()) {
        alert(`Es minusculas: ${cadena}.`);
    } else {
        alert(`Es una combinación de ambas: ${cadena}.`);
    }

}


// Ejercicio 11
const registroPersonas = () => {
    let p = new Persona("Jose", 33, "f");

    let e = new Estudiante("juan", 22, "f", 3);
    e._grupo = "C";

    let m = new Profesor("Silva", 43, "f")
    m._asignatura = "matemáticas";
    m._nivel = 3;

    console.log(p.obtDetalles());
    console.log(e.registrar());
    console.log(m.asignar());

}





// Llamadas

//Ejercicio 1
console.log("Hola Mundo!");
mensajes.innerHTML = "Soy el primer script.";

// Ejercicio 3
console.log(meses.join(" "));



// Ejercicio 4
determinar();

// Eventos

// Ejercicio1
btn1.onclick = (e) => {
    e.preventDefault();
    comentarios.textContent = "Al cargar la página muestro por consola un mensaje y añado por script varios comentarios";

};

// Ejercicio
btn2.addEventListener(
    "click",
    mensajesAlert
);

// Ejercicio 6
btn3.addEventListener(
    "click",
    letraDni
);

// Ejercicio 7
btn4.addEventListener(
    "click",
    calcFactorial
);

// Ejercicio 8
btn5.addEventListener(
    "click",
    esPar
);

// Ejercicio 9
btn6.addEventListener(
    "click",
    mayusMinus
);

// Ejercicio 11
btn7.addEventListener(
    "click",
    registroPersonas
);