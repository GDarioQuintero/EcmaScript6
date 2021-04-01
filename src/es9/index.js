//NUEVAS CARACTERISTICAS DE EcmaScript9

//Operador de reposo - puede extraer las propiedades de un un objeto que aun no se ha construido --------
//Sirve para extraer lo que necesitamos sin necesidad de destructurar todo elobjeto

const obj = {
    nom: 'German',
    age: 23,
    country: 'COL',
};

let {nom, ...all} = obj;//Extraigo en nombre y lo demas lo dejo en el objeto
console.log(nom, all); 
console.log(all);//Muesta las propiedades que quedadon enel objeto

//Utilizando la propiedades de propagacion pordemos unir varios elementos deobjetos a otro objeto-------------------------

const obj = {
    name: 'Dayanna',
    age: 23,
};

const obj1 = {
    ...obj, //Utiliza los operadores de propagacion para unir elementos de dos obejetos
    country: 'MX,'
}
console.log(obj1);

const obj2 = {
    ...obj1,
    phone: 3107927479,
};
console.log(obj2);

//finally - avisa cuando finaliza la ejecucion de la promesa

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)//el setTimeout espara que espere el tiempo que deseemos enmilesegundos
        : reject(new Error('Test Error'))
    });
};

helloWorld()//Lo que ecmaScript6 se hacia para obtener la respuesta de la promesa
    .then(response => console.log(response))
    .catch(error => console.log(Error))
    .finally(() => console.log('Finaliso'));//Estolo agrego ecmaScript9 para mostrar que termino de ejecutarse la promesa

//Como agrupar bloques de regex y acceder a cada uno de ellos

//Para obtener los datos de una fecha en formato aaaa/mm/dd
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2021-03-30');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);//Obtenemos los datos por separado de cada grupo de regex


















