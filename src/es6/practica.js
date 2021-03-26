function miFuncion(nombre = 'German', telefono = '3144441022', correo = 'ing.germanquintero@gmail.com'){
    console.log(nombre, telefono, correo);
}

miFuncion();
miFuncion('Dayanna', '3107927479', 'lealdayanna@gmail.com');

//----------------------------------------------------------------------------------------------------------

let nombres = 'German Dario';
let apellidos = 'Quintero Perez';
let nombreCompleto = `${nombres} ${apellidos}`;
console.log(nombreCompleto);

//---------------------------------------------------------------------------------------------------------

let person = {
    'nom': 'German',
    'age': 30,
    'country': 'Colombia'
}

let = {nom, age, country} = person;
console.log(nom, country);

//--------------------------------------------------------------------------------------------------------

let grupo1 = ['dayanna', 'diana', 'dolly'];
let grupo2 = ['wilson', 'german', 'ruben'];
let family = ['Nilsa', ...grupo1, ...grupo2];
console.log(family);

//----------------------------------------------------------------------------------------------------------

let productos = [
    {nombre: 'Arroz', precio:1800},
    {nombre: 'Frijol', precio:2500},
    {nombre: 'Azucar', precio:1500},
    {nombre: 'Queso', precio:5000},
]

let lista = productos.map(item => console.log(item.nombre));


let clientes = [
    {name: 'Camilo', phone:'3144441022', tipo: 3},
    {name: 'Eduardo', phone:'3102581022', tipo: 1},
    {name: 'Sofia', phone:'3147859654', tipo: 2},
    {name: 'Diana', phone:'3215689742', tipo: 3}
];

let listClientes = clientes.map(item => console.log(item.name, item.phone, item.tipo));


let numero = 12;
const miPromesa = () => {
    return new Promise ((resolve, reject) => {
        if (numero > 5){
            resolve('Bien');
        }else{
            reject('muy malo');
        }
    });
}

miPromesa()
    .then(response => console.log(response))
    .then(response => console.log('hola a todos'))
    .catch(error => console.log(error));

    


const nuwPromesa = () => {
    return new Promise ((verdad, falsa) => {
        if (false){
            verdad('hola niños aprendi promesas');
        }else{
            falsa('ho nooooooo');
        }
    });
}

nuwPromesa()
    .then(respuesta => console.log(respuesta))
    .then(respuesta => console.log('Si que estoy aprendiendo'))
    .catch(error => console.log(error));



    class persona{
        constructor(){
            this.nom = '';
            this.apellido = '';
            this.ciudad = '';
        }

        saludar(nom = 'German', apellido = 'Quintero', ciudad = 'Ortega') {
            this. nom = nom;
            this.apellido = apellido;
            this.ciudad = ciudad;

            return `Mi nombre es ${nom} ${apellido} y vivo en ${ciudad}`;
        }        
    }

    let p = new persona();
    console.log(p.saludar('Dayanna', 'Leal', 'Ibague'));

















