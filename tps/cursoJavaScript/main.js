
//1.INTRODUCCION A JAVASCRIPT

//Ejercicio 2
/*
let a = 5;
let b = 10;
let c = a + b;
console.log("a = " + a)
console.log("b = " + b)
console.log("c = " + c);

//Ejercicio 3

let nombre = prompt("Por favor, ingresa tu nombre:");

console.log("Hola, " + nombre);


//----------------------------------------------------------------

//2. Operadores lógicos y condicionales

//Ejercicio 1


let a = 5;
let b = 10;
let c = 14;

if(a > b && a > c){
  console.log("El mayor es : " + a);
} else if (b > a && b > c) {
  console.log("El mayor es: " + b);
} else{
  console.log("El mayor es: " + c);
}

//Ejercicio 2

let number = prompt("Ingrese un numero y te dire si espar o impar");
if (number % 2 == 0){
  console.log("El numero es par")
}else{
  console.log("El numero es impar")
}


//----------------------------------------------------------------
//3. Operadores de asignación y bucles

//Ejercicio 1

let number = 10;
while(number > 0){
  console.log(number)
  number--;
}

//Ejercicio 2
let numberTwo = 0;

do{
  numberTwo = prompt("Ingrese un numero mayor a 100");
}while(numberTwo <= 100)
console.log("El numero ingresado es: " + numberTwo)

//----------------------------------------------------------------

//4. Funciones de JavaScript

//Ejercicio 1

const esPar = (number) => {
  
  if (number % 2 == 0){
    return true;
  } else {
    return false;
  }
};

console.log("El numero " + 2 + " es Par: " + esPar(2))
console.log("El numero " + 5 + " es Par: " + esPar(5))

//Ejercicio 2

let celcius = prompt("Ingrese los grados Celcius: ");

const convertirCelsiusAFahrenheit = (celcius) => {
  return celcius * 1.8 + 32;
}

console.log(celcius + " grados Celcius son equivalentes a: " + convertirCelsiusAFahrenheit(celcius) + " grados Fahrenheit");

//----------------------------------------------------------------

//5. Objetos en JavaScript

//Ejercicio 1

let persona = {
  nombre : 'Mauro',
  apellido : 'Garzia',
  ciudad : 'Maipu',

  cambiarCiudad : function(newCiudad){
    persona.ciudad = newCiudad;
  }
}


console.log("Datos iniciales: ")
console.log("Nombre: " + persona.nombre + ", apellido: " + persona.apellido + ", ciudad: " + persona.ciudad)
let newCiudad = prompt("Ingrese una nueva Ciudad")
persona.cambiarCiudad(newCiudad);
console.log("Datos finales: ")
console.log("Nombre: " + persona.nombre + ", apellido: " + persona.apellido + ", ciudad: " + persona.ciudad)

//Ejercicio 2

let libro = {
  title : 'Caballo de Troya',
  author : 'Juan José Benítez',
  yearOfPublication : 2004,

  ageOfBook : function(){
    if(2024 - libro.yearOfPublication > 10){
      return true;
    }else return false;
  }
}

console.log("El libro: " + libro.title + " es antiguo: " + libro.ageOfBook())


//----------------------------------------------------------------

//6. Arrays

//Ejercicio 1

let numbers = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];

numbers.forEach(element => {
  newArray.push(element * 2);
});
console.log("Numeros originales : " + numbers)
console.log("Numeros multiplicados por 2: " + newArray);


//Ejercicio 2

let pares = []; 

for (let i = 0; i <= 20; i++ ){
  if (i % 2 == 0){
    pares.push(i);
  }
}

console.log("Primeros 10 numeros pares: " + pares);

//----------------------------------------------------------------

//7. Introducción al DOM

//Ejercicio 1

const button = document.getElementById("button");
const divv = document.getElementById("divv")

const cambio = () => {
  divv.classList.add('azul');
}

button.addEventListener("click", () => {
  console.log("El usuario hizo click");
  cambio();
})
 

//Ejercicio 2

const alerta = document.getElementById("alerta");
const campoTexto = document.getElementById("campoTexto");

alerta.addEventListener("click", () => {
  const valor = campoTexto.value;
  alert(valor);

})

//----------------------------------------------------------------


//8. Eventos en DOM

//Ejercicio 1


const elementosLista = document.querySelectorAll("#lista li")

elementosLista.forEach( elemento => {
  elemento.addEventListener("click", () => {
    console.log(elemento.textContent);
  });
});


//Ejercicio 2

const texto = document.getElementById("texto")
const deshabilitarButton = document.getElementById("deshabilitar")
const habilitarButton = document.getElementById("habilitar")


habilitarButton.addEventListener("click", () => {
  texto.disabled = false;
  texto.placeholder = 'Ingresa algo';
})

deshabilitarButton.addEventListener("click", () => {
  texto.disabled = true;
  texto.placeholder = '';
})
  */

//----------------------------------------------------------------


//9. LocalStorage 

//Ejercicio 1

const buttonInputs = document.getElementById("buttonInput");
const buttonOutputs = document.getElementById("buttonOutput");
const datoGuardado = document.getElementById("datosGuardados");
const eliminarDato = document.getElementById("buttonDelete");

buttonInputs.addEventListener("click", () => {
  event.preventDefault(); //Prevengo la recarga de pagina
  const datos = document.getElementById("email").value; //Obtengo valor del input


  if(datos){
    localStorage.setItem("datos", JSON.stringify(datos));
  }else{
    alert("Ingrese un correo valido");
  }
});

const verdDatos = () => {
  const getDato = JSON.parse(localStorage.getItem("datos"));
  console.log(getDato);

  if(getDato){
    datoGuardado.textContent = getDato;
  }else{
    datoGuardado.textContent = "No hay email guardado";
  }
};

buttonOutputs.addEventListener("click", () => {
  event.preventDefault();
  verdDatos();
});

eliminarDato.addEventListener("click", ()=>{
  if(localStorage.getItem("datos")){
    localStorage.removeItem("datos");
  }else{
    alert("No hay datos guardados");
  }
  
})

