const persona = {
    nombre: 'tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        Zip: 465213,
        lat: 14.65468,
        lng: 15.4646,
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);