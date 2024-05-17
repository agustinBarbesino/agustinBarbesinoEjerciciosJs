// 1. Duplicar cada número en un array
//  - Objetivo: Utilizar `map()` para crear un nuevo array donde cada elemento sea el doble del
// elemento correspondiente en el array original.

const numeros = [1, 2, 3, 4, 5];
let numdoble = numeros.map(numero => numero*2)
console.log(numdoble);


// 2. Convertir un array de cadenas a mayúsculas:
//  - Objetivo: Utilizar `map()` para crear un nuevo array donde cada cadena sea convertida a
// mayúsculas.

const palabras = ['hola', 'mundo', 'javascript'];
let mayus = palabras.map(palabra => palabra.toUpperCase(palabra))
console.log(mayus);


// 3. Extraer las edades de un array de objetos:
//  - Objetivo: Utilizar `map()` para crear un nuevo array que contenga solo las edades de cada objeto
// en el array original.

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 40 }
];

let edades = personas.map(persona => persona.edad)
console.log(edades);


// 4. Crear un nuevo array combinando dos arrays existentes:
//  - Objetivo: Utilizar `map()` para combinar dos arrays existentes en un nuevo array donde cada
// elemento sea una combinación de un elemento de cada array.

const numeros2 = [1, 2, 3];
const letras = ['a', 'b', 'c'];

let combinar = numeros2.map((numero, i) => numero + letras[i])
console.log(combinar);

// 5. Aplicar una función de transformación compleja a un array de objetos:
//  - Objetivo: Utilizar `map()` para aplicar una función de transformación a cada objeto en el array
// original y crear un nuevo array con los resultados.

const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 }
];

let combinar2 = productos.map(producto => producto.nombre + " " + producto.precio)
console.log(combinar2);