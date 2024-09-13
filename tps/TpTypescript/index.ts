console.log("Ejercicio 2: corriendo desde typescrip");
//Ejercicio 3
const e3 : HTMLElement | null = document.getElementById("Ejercicio3")

const text : string = "Hola, Typescript";
const numbers : number = 123;
const booleans : boolean = true;
const fecha : Date = new Date(2003, 1, 11);

if(e3){
    e3.innerHTML = `
    <p>Texto: ${text}</p>
    <p>Numeros: ${numbers}</p>
    <p>Booleano: ${booleans}</p>
    <p>Fecha: ${fecha.toDateString()}</p>
`
}

//Ejercicio 4
const e4 : HTMLElement | null = document.getElementById("Ejercicio4")

const convertToString = (n : number) => {
    n.toString();
    return n;
}

if(e4){
    convertToString(numbers);
    e4.innerHTML = `<p>Numero convertido a cadena: ${numbers}</p>`;
}

//Ejercicio 5

let numbersArray : number[] = [1,2,3,4];

const additionNumbers = (array : number[]) => {
    let total : number = 0;

    array.forEach(element => {
        total += element;
    });
    
    return total;
}

const e5: HTMLElement | null = document.getElementById("Ejercicio5");

if(e5){
    e5.innerHTML = `
        <p>Suma del Array : ${additionNumbers(numbersArray)}<p>
    `
}

//Ejercicio 6

let student = {
    name : "Juan",
    age : 20,
    course : "Matematicas"
}

const e6 : HTMLElement | null = document.getElementById("Ejercicio6");

if(e6){
    e6.innerHTML = `
        <p>Estudiante: ${student.name}</p>
        <p>Edad: ${student.age}</p>
        <p>Curso: ${student.course}</p>
    `
}

//Ejercicio 7

type Direcction = {
    street : string,
    city : string,
    code : number;
}

let adress : Direcction = {
    street : "Ozamis Sur 290",
    city : "Maipu",
    code : 5515,
}

const e7 : HTMLElement | null = document.getElementById("Ejercicio7");

if(e7){
    e7.innerHTML = `
        <p>Direccion: ${adress.street}, Ciudad: ${adress.city}, Codigo Postal ${adress.code}</p>
    `
}

//Ejercicio 8

interface User {
    name : string,
    email : string

    greeter() : string;
}


let usuario : User = {
    name : "Mauro",
    email : "maurogarzia2@gmail.com",

    greeter() {
        return `Hola, mi nombre es ${usuario.name}, y mi correo es: ${usuario.email}`
    },
}

const e8 : HTMLElement | null = document.getElementById("Ejercicio8");

if(e8){
    e8.innerHTML = `
        <p>${usuario.greeter()}</p>
    `
}

//Ejercicio 9

class Persona {
    name? : string;
    age? : number;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }

    saludar(){
        return `Hola mi nombre es ${this.name} y tengo ${this.age}`
    }
}

const e9 : HTMLElement | null = document.getElementById("Ejercicio9");

if(e9){
    const newPerson = new Persona("Mauro", 21);
    e9.innerHTML = `
        <p>${newPerson.saludar()}</p>
    `
}

//Ejercicio 10

class Box<T>{
    private typeBox? : T;

    constructor(typeBox : T){
        this.typeBox = typeBox;
    }

    set(typeBox : T){
        this.typeBox = typeBox;
    }

    get(){
        return this.typeBox;
    }

    getType() : string{
        return `${this.typeBox}`
    }

}


let box = new Box<string>('Mensaje Secreto');

let box1 = new Box<number>(42);

const e10 : HTMLElement | null = document.getElementById("Ejercicio10");

if(e10){
    e10.innerHTML = `
        <p>Contenido de CajaDeTexto: ${box.getType()}</p>
        <p>Contenido de CajaDeTexto: ${box1.getType()}</p>
    `
}

//Ejercicio 11

function identity<T>(element : T){
    return element;
}

const e11 : HTMLElement | null = document.getElementById("Ejercicio11");

if(e11){
    e11.innerHTML = `
        <p>Identidad del numero : ${identity(123)}</p>
        <p>Identidad del texto : ${identity("texto")}</p>
    `
}

//Ejercicio 12

enum Color {
    Rojo,
    Azul,
    Blanco
}

let favoriteColor = Color[0];

const e12 : HTMLElement | null = document.getElementById("Ejercicio12");

if(e12){
    e12.innerHTML = `
        <p>Color Favorito: ${favoriteColor}</p>
    `
}





