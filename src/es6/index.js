//NUEVAS CARACTERISTICAS DE ECMASCRIPT6

//Parametros por defecto de una funcion-----------------------------------------------------------------
function newFunction(nombre, edad, profesion) {
    var nombre = nombre || "German";
    var edad = edad || 23;
    var profesion = profesion || "Doctor"; 
    console.log(nombre, edad, eprofesion);
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






