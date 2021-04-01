//Pracica sobre ecmaScript6

//1. parametros por defecto de una funcion
function persona(nom = 'German', edad = 32, pais = 'colombia') {
    console.log(nom, edad, pais);    
}
persona();
persona('Dayanna', 27, 'Mexico');

//2. templete litros - concatenar varrios string en uno solo
let nombre = 'Alisso Salome';
let apellido = 'Quintero Momtaña';
let nomCompleto = `Mi nombre es ${nombre} ${apellido}`;
console.log(nomCompleto);

//3. Multilinea con los templete
let parrafo = `Esto es un ejemplo de multilinea,
esto es otra linea haciendo uso de los templete`;
console.log(parrafo);

//4. Destructuracion de objetos
const empleado = {
    'nom': 'Geiner', 'ape': 'Montaña',
}
let {nom, ape} = empleado;
console.log(ape);

//5. Operador de prolongacion - permite unir varios array
let hijas = ['Dolly', 'Diana'];
let hijos = ['German', 'Ruben'];
let familia = ['Dario', 'Nilsa', ...hijas, ...hijos];
console.log(familia);

//6. Array function - sirve para recorreo un array de objetos
const productos = [
    {nom: 'Arroz', valor: 1500},
    {nom: 'Alverja', valor: 2000},
    {nom: 'Frijol', valor: 4500},
    {nom: 'Aceite', valor: 3500},
];
let listProductos = productos.map(item => console.log(item.nom, item.valor));

//7. Las Promesas - Sivern para manejar el asincronismo 
const myPromesa = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('MUY BIEN'), 5000)
        : reject('MUT MAL')
    });
};
myPromesa()
    .then(resultsdo => console.log(resultsdo))
    .catch(error => console.log(error));

//8. Clases
class estudiantes {
    constructor(){
        this.nombre = '';
        this.grado = '';
    }
    saludar(nombre = 'Maria', grado = 'Prescolar'){
        this.nombre = nombre;
        this.grado = grado;
        let saludo = `Hola ${this.nombre} del grado ${this.grado}`;
        console.log(saludo);
    }
}
let alumno = new estudiantes();
alumno.saludar();
alumno.saludar('Salome', 'Segundo');

//9. modulos con impot y export
import {helloWorld} from './modulo2';
helloWorld();

//10. Variables let y const 
let valueA = '';
const valueB = '';

//11. Propiedad de objetos mejorada
let nom = 'salome';
let ape = 'Quintero';
obj = {nom, ape};
console.log(nom);

//Function Generetor
function* saludo(){
    if(true){
        yield 'Hola';
    }
    if(true){
        yield 'Mundo';
    }
}
const generetorSaludo = saludo();
console.log(generetorSaludo.next().value);
console.log(generetorSaludo.next().value);
console.log(generetorSaludo.next().value);