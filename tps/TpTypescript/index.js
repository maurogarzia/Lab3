console.log("Ejercicio 2: corriendo desde typescrip");
//Ejercicio 3
var e3 = document.getElementById("Ejercicio3");
var text = "Hola, Typescript";
var numbers = 123;
var booleans = true;
var fecha = new Date(2003, 1, 11);
if (e3) {
    e3.innerHTML = "\n    <p>Texto: ".concat(text, "</p>\n    <p>Numeros: ").concat(numbers, "</p>\n    <p>Booleano: ").concat(booleans, "</p>\n    <p>Fecha: ").concat(fecha.toDateString(), "</p>\n");
}
//Ejercicio 4
var e4 = document.getElementById("Ejercicio4");
var convertToString = function (n) {
    n.toString();
    return n;
};
if (e4) {
    convertToString(numbers);
    e4.innerHTML = "<p>Numero convertido a cadena: ".concat(numbers, "</p>");
}
//Ejercicio 5
var numbersArray = [1, 2, 3, 4];
var additionNumbers = function (array) {
    var total = 0;
    array.forEach(function (element) {
        total += element;
    });
    return total;
};
var e5 = document.getElementById("Ejercicio5");
if (e5) {
    e5.innerHTML = "\n        <p>Suma del Array : ".concat(additionNumbers(numbersArray), "<p>\n    ");
}
//Ejercicio 6
var student = {
    name: "Juan",
    age: 20,
    course: "Matematicas"
};
var e6 = document.getElementById("Ejercicio6");
if (e6) {
    e6.innerHTML = "\n        <p>Estudiante: ".concat(student.name, "</p>\n        <p>Edad: ").concat(student.age, "</p>\n        <p>Curso: ").concat(student.course, "</p>\n    ");
}
var adress = {
    street: "Ozamis Sur 290",
    city: "Maipu",
    code: 5515,
};
var e7 = document.getElementById("Ejercicio7");
if (e7) {
    e7.innerHTML = "\n        <p>Direccion: ".concat(adress.street, ", Ciudad: ").concat(adress.city, ", Codigo Postal ").concat(adress.code, "</p>\n    ");
}
var usuario = {
    name: "Mauro",
    email: "maurogarzia2@gmail.com",
    greeter: function () {
        return "Hola, mi nombre es ".concat(usuario.name, ", y mi correo es: ").concat(usuario.email);
    },
};
var e8 = document.getElementById("Ejercicio8");
if (e8) {
    e8.innerHTML = "\n        <p>".concat(usuario.greeter(), "</p>\n    ");
}
//Ejercicio 9
var Persona = /** @class */ (function () {
    function Persona(name, age) {
        this.name = name;
        this.age = age;
    }
    Persona.prototype.saludar = function () {
        return "Hola mi nombre es ".concat(this.name, " y tengo ").concat(this.age);
    };
    return Persona;
}());
var e9 = document.getElementById("Ejercicio9");
if (e9) {
    var newPerson = new Persona("Mauro", 21);
    e9.innerHTML = "\n        <p>".concat(newPerson.saludar(), "</p>\n    ");
}
//Ejercicio 10
var Box = /** @class */ (function () {
    function Box(typeBox) {
        this.typeBox = typeBox;
    }
    Box.prototype.set = function (typeBox) {
        this.typeBox = typeBox;
    };
    Box.prototype.get = function () {
        return this.typeBox;
    };
    Box.prototype.getType = function () {
        return "".concat(this.typeBox);
    };
    return Box;
}());
var box = new Box('Mensaje Secreto');
var box1 = new Box(42);
var e10 = document.getElementById("Ejercicio10");
if (e10) {
    e10.innerHTML = "\n        <p>Contenido de CajaDeTexto: ".concat(box.getType(), "</p>\n        <p>Contenido de CajaDeTexto: ").concat(box1.getType(), "</p>\n    ");
}
//Ejercicio 11
function identity(element) {
    return element;
}
var e11 = document.getElementById("Ejercicio11");
if (e11) {
    e11.innerHTML = "\n        <p>Identidad del numero : ".concat(identity(123), "</p>\n        <p>Identidad del texto : ").concat(identity("texto"), "</p>\n    ");
}
//Ejercicio 12
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Azul"] = 1] = "Azul";
    Color[Color["Blanco"] = 2] = "Blanco";
})(Color || (Color = {}));
var favoriteColor = Color[0];
var e12 = document.getElementById("Ejercicio12");
if (e12) {
    e12.innerHTML = "\n        <p>Color Favorito: ".concat(favoriteColor, "</p>\n    ");
}
