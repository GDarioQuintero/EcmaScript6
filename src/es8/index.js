//NUEVAS CARACTERISTICAS ENecmaScript8

//object.entries - convierte un objeto en una matris-------------------------------------------

const profes = {
    lenguaje: 'Crity',
    informatica: 'German',
    fisica: 'Ivan',
}

const entries = Object.entries(profes);
console.log(entries);
console.log(entries.length);//devuelve elnumero de elementos en el objeto

//como obtener solamente los valores de un objeto en un arreglo ------------------------------------------

const data = {
    lenguaje: 'Crity',
    informatica: 'German',
    fisica: 'Ivan',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);//numero de elementos

//El padEnd - Agregar caracteres antes o despues de un string-------------------------------------------------------

const string = 'hello';
console.log(string.padStart(7, '--'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));
console.log('adios'.padEnd(12, ' -----'));

//async y await - forma para manejar los errores ------------------------------------------------------------------

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ?  setTimeout(() => resolve('Hello World'), 3000) //Esto es como un if -- son 3000 milisegundo osea 3 segundos
        : reject(new Error('Test Error')) //Este es el else
    })
}; 

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

// Otra forma mejor para capturar los errores 

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch(error){
        console.log(error);
    }
};

anotherFunction();































