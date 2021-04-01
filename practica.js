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

const productos = [
    {codigo: '001', nombre: 'Arroz', valor: 1500},
    {codigo: '002', nombre: 'Pasta', valor: 1300},
    {codigo: '003', nombre: 'Azucar', valor: 1200},
    {codigo: '004', nombre: 'Frijol', valor: 3500}    
];
let listaProductos = productos.map(item => console.log(item.codigo, item.nombre, item.valor)); 

//------------------------------------------------------------------------------------------------------------

let aleatorio = Math.floor(Math.random() * (10 - 1) + 1);

const myPromesa = () => {
    return new Promise ((resuelve, reject) =>{
        if (aleatorio >= 5)
        {
            resuelve('Bien el numero es: ' + aleatorio);
        }
        else{
            reject('Muy mal el numero es: ' + aleatorio);
        }
    });
}

myPromesa()
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error)); 



class persona {
    constructor(){
        this.a = 0;
        this.b = 0;
    }
    sumar(a, b){
        this.a = a;
        this.b = b;
        return this.a + this.b;
    }
}
let p = new persona();
console.log(p.sumar(3, 6));


function* myName() {
    if(true){
        yield 'German';
    }
    if(true){
        yield 'Dario';
    }
    if(true){
        yield 'Quintero';
    }
    if(true){
        yield 'Perez';
    }
};

const generetorName = myName();
console.log(generetorName.next().value);
console.log(generetorName.next().value);
console.log(generetorName.next().value);
console.log(generetorName.next().value);
console.log(generetorName.next().value);
















