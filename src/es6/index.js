//NUEVAS CARACTERISTICAS DE ECMASCRIPT6

//Parametros por defecto de una funcion-----------------------------------------------------------------
function newFunction(nombre, edad, profesion) {
    var nombre = nombre || "German";
    var edad = edad || 23;
    var profesion = profesion || "Doctor"; 
    console.log(nombre, edad, profesion);
}
newFunction();
newFunction("Dayanna", 30, "Enfermera");

//con es6
  
function newFunction2(name = "Dario", edad = 26, profesion = "docente") {
    console.log(name, edad, profesion);   
}

newFunction2();
newFunction2("Ruben", 35, "Plomero");

//Template litrors -----------------------------------------------------------------------------------------
let hello = "Hola";
let world = "mundo";
let saludo = hello + " " + world;
console.log(saludo); 

//es6
let hola = "Hola";
let mundo = "mundo";
let saludo2 = `${hola} ${mundo}`;
console.log(saludo2);

//Multilinia en los string---------------------------------------------------------------------------------
let texto = "hola soy un aficionado por la programacio.\n" 
+ "y estoy seguro de que sere un buen programador";
console.log(texto);

//es6
let texto2 = `hola soy geman quintero un ingeniero de sistemas. 
actualmente estudio en platzi`;
console.log(texto2);

//Destructuracion de elementos-------------------------------------------------------------------------
let person = {
    'nombre': 'German',
    'age': 32,
    'country': 'Colombia'
}
console.log(person.nombre, person.age, person.country);

//es6
let {nombre, age, country} = person;
console.log(age);//puedo traer el elemento que yo quiera

//Operador de propagacion- expandir varios elementos-----------------------------------------------------
let team1 = ['German', 'Dayanna', 'Salome'];
let team2 = ['Wilson', 'Dolly', 'Gabriel'];
let familia = ['Ruben', ...team1, ...team2];
console.log(familia);

//Variables con var y let--------------------------------------------------------------------------------
{
    var globalvar = 'Global var';
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);//Solo es accesible en el bloque de codigo en donde se declara
}
console.log(globalvar);//Es accesible de forma global

//Variable  const, garantiza que un valor asifnado a una variable no cambie.-----------------------------
const a = "b";
console.log(a);//muestra el valor que se le asigno al ser creada con const
a = "c";// const no deja reasignar otro valor a una constante, esta linea me da un error 
console.log(a);

//Propiedad de objetos mejorada-----------------------------------------------------------------------
let nom = 'German';
let edad = 32;

//es5
obj = {nom: nom, edad: edad};
console.log(nom, edad);

//es6
obj2 = {nom, edad};
console.log(obj2);
console.log(nom, edad);

//Arrow Functions------------------------------------------------------------------------------------------
const estudiantes = [
    {nom: 'salome', edad: 7},
    {nom: 'Geiner', edad: 17},    //Array de objetos
    {nom: 'Isabella', edad: 9}
]
//Iterar con los elementos
let listOfEstudiantes = estudiantes.map(function(item){
    console.log(item.nom, item.edad)//Por medio de una funcion anonima
});

//es6  -- las arrow fucntion son funciones anonimas
let listOfEstudiantes2 = estudiantes.map(item => console.log(item.nom));

const listOfEstudiantes3 = (nom, edad) => {
    //...Bloque de codigo que necesitemos
}
const listOfEstudiantes4 = nom => {
    //...Bloque de codigo que necesitemos
}
let num = 2;
const square = num => num * num;
console.log(num);

//Promesas -- sirve para trabajr el sincronismo -------------------------------------------------------------
const helloPromise = () => {
    return new Promise ((resolve, reject) => {//pueden ser otras palabras diferentes a resolve  y reject
        if (true){
            resolve('Bien'); //resuelve cuando es verdadero
        }
        else{
            reject('Mal');//No resuelve cuando la validacion es falsa
        }
    });
}
helloPromise()
    .then(response => console.log(response))//debe de ir de primero para inicializar la variable
    .then(response => console.log('Hola a todos'))
    .catch(error => console.log(error));//Necesariamente debe de ir para cuando rechaza

//Clases - paara trabajar herencia y objetos ---------------------------------------------------------------

class calculadora {
    constructor() {
        this.a = 0;
        this.b = 0;
    }
    sumar(a, b) {
        this.a = a;
        this.b = b;
        return this.a + this.b;
    }
}

const cal = new calculadora();
console.log(cal.sumar(3, 6));

//Modulos ------------------------------------------------------------------------------------------------------
//con import y export - Esto nos permite separar la logica en varios modulos para poder trabajarlos mejor y llamrlos segun sea el caso en el documento principal.

import {hello} from './modulo';//Importo la array fucntion de modulo
hello(); //Ejecuto la array fucntion por que ya esta disponble

//Generetor - Funcion especila que retorna una serie de valores segun el algoritmio definido.

function* helloWorld() {
    if (true){
        yield 'Hola, ';
    }
    if (true){
        yield 'Mundo';
    }
};

const generetorHello = helloWorld();
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);

//











