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