//Mostrar una matris que contiene varios niveles de forma aplanada -------------------------------

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];//una matris con varios niveles de profundidad

console.log(array.flat());//Al metodo flat se le da el parametro del nivel de profundidad que queremos
console.log(array.flat(2));

//flatMap() - Permite mapear cada elemento pasarle una funcion y aplanarla ------------------------------

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));//Imprime cada elemento seguido de su valor multiplicado por 2

//TrimStart() - Eliminar los espacios en blanco al inicio de un string -------------------------------------------------

let hello = '                   hello';
console.log(hello);//Lo muestra con los espacion
console.log(hello.trimStart());//lo muestra sin los espacios

//TrimEnd() - Eliminar los espacios en blanco al final de un string -----------------------------------------------------

let hello = 'hello                   ';
console.log(hello);
console.log(hello.trimEnd());

//NO pasar el erro como parametro en un try catch

try{

}
catch{
    error //Este error va estar disponible sin necesidad de que lo pasencomo parametro
}

//From entreis - trasfomar clave valor a un objeto 

let entries = [["name", "Salome"], ["age", "7"]];
console.log(Object.fromEntries(entries));// Nos devuelve un objeto construido a partir de dos arreglos con la clave y valor

//Objeto de tipo simbolo que nos permite acceder a una nueva descripcion--------------------------------------------

let mySimbol = `My simbolo`;
let symbol = Symbol(mySimbol);
console.log(symbol.description);

