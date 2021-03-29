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




let personas = [
    {nombre: 'Diana', edad: 25, parentesco: 'Hermana'},
    {nombre: 'Ruben', edad: 70, parentesco: 'Padre'},
    {nombre: 'Gilberto', edad: 65, parentesco: 'Tio'}
];

let listaPersonas7 = personas.map(item => console.log(item.nombre, item.edad, item.parentesco));


const myPromesa = () => {
    return new Promise((resolver, reject) => {
        if (false){
            resolver('excente vamos mejorando');
        }else{
            reject('Que me falta');
        }
    });
};

myPromesa()
    .then(resultado => console.log(resultado))
    .then(resultado => console.log('Esta ves lo hice re bien'))
    .catch(error => console.log(error));



    class saludarPersona {
        constructor(){
            this.nom = '';
            this.edad = '';
            this.parentesco = '';
        }

         saludar(nom = 'German', edad = '28', parentesco = 'hermano') {
             this.nom = nom;
             this.edad = edad,
             this.parentesco = parentesco;
            let saludo = `Hola soy ${nom} tengo ${edad} años de edad`;    
            return saludo;
        }
    }
    let s = new saludarPersona();
    console.log(s.saludar());
    console.log(s.saludar('Maria', '52', 'Madre'));




    class myCalculadora{
        constructor(){
            let a = 0;
            let b = 0;
        }
        multiplicar(a = 5, b = 2){
            this.a = a;
            this.b = b;
            return a * b;
           
        }
    }

    let c = new myCalculadora();
    console.log(c.multiplicar());
    console.log(c.multiplicar(10, 5));

const nuevaPromesa = () => {
    return new Promise((r, d) => {
        if(false){
            r('si');
        }else{
            d('No');
        }
    });
};

nuevaPromesa()
    .then(res => console.log(res))
    .then(res => console.log('Entendido'))
    .catch(e => console.log(e));

   
