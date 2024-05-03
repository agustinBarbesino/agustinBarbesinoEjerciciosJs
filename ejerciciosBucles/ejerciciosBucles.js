//1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
//multiplicar (Los primeros 10 multiplos).

let num = parseInt(prompt("Ingrese un número"))
console.log("Multipos de " + num);

for (let i = 1; i < 11; i++) {
    console.log(num * i);
}

//2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
//acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

let acumular = 0
num = parseInt(prompt("Ingrese un número"))

while (num != 0) {
    acumular = acumular + num;
    num = parseInt(prompt("Ingrese un número"))
}

console.log(acumular);

//3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
//variable guardar un numero que este en el rango 1 - 100. La persona debera poder
//ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
//valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
//nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
//cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
//que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
//felicitaciones y decirle en cuantos intentos lo ha realizado.

let numeroIncognita = 54
let intentos = 0
let numeroIngresado = parseInt(prompt("Adivine el número: (entre 1 y 100)"))

do {
    intentos++
    if (numeroIngresado === numeroIncognita) {
        alert("Felicitaciones! Adivinaste en " + intentos + " intentos.")
    }else if (numeroIngresado > numeroIncognita) {
        alert("El número ingresado es mayor, intente nuevamente.");
        numeroIngresado = parseInt(prompt("Adivine el número: (entre 1 y 100)"))
    } else {
        alert("El número ingresado es menor, intente nuevamente.");
        numeroIngresado = parseInt(prompt("Adivine el número: (entre 1 y 100)"))
    }
} while (numeroIncognita != numeroIngresado);

alert("Felicitaciones! Adivinaste en " + intentos + " intentos.");

//4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
//si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
//Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
//como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
//numero ya no es primo.

num = parseInt(prompt("Verificador de números primos, ingrese un número:"))
div = 0
for (i = 1; i < num; i++) {
    resto = num % i
    if (resto == 0){
        div++
    }
}

if (div > 2) {
    alert("El número no es primo")
} else {
    alert("El número es primo")
}

//5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

num = parseInt(prompt("Ingrese un número para conocer sus divisores:"))
let divisores = []

for (i = 1; i < num; i++) {
    resto = num % i
    if (resto == 0){
        divisores = divisores + " " + i
    }
}

console.log("Los divisores son: " + divisores);

//6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
//muestre un mensaje por consola con cada uno de los elementos del array.

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

//7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
//doble de cada uno de los elementos.

array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < array.length; i++) {
    console.log(array[i] * 2)
}

//8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
//objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
//que muestre un mensaje de presentacion por cada elemento del array.

let pers1 = {
    nombre: "Pedro", 
    apellido: "Rodriguez",
    edad: 56,
    altura: 176
}

let pers2 = {
    nombre: "Carla", 
    apellido: "Paez",
    edad: 54,
    altura: 170
}

let pers3 = {
    nombre: "Pablo", 
    apellido: "Rodriguez",
    edad: 26,
    altura: 173
}

let pers4 = {
    nombre: "Priscila", 
    apellido: "Rodriguez",
    edad: 22,
    altura: 158
}

let pers5 = {
    nombre: "Ramón", 
    apellido: "Rodriguez",
    edad: 17,
    altura: 169
}

let personas = [pers1, pers2, pers3, pers4, pers5]

for (i = 0; i < personas.length; i++) {
    console.log("Hola! Soy " + personas[i]["nombre"] + " " + personas[i]["apellido"] +", tengo " + personas[i]["edad"] + "años y mido " + personas[i]["altura"])
}

//9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
//muestre los numeros impares.

for (let i = 0; i < array.length; i++) {
    if (array[i]%2 != 0) {
        console.log(array[i]);
    }
    
}

//10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
//numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
//el usuario ingresa un 0.

let sumPar = 0
let sumImpar = 0
numeroIngresado = parseInt(prompt("Ingrese un número a sumar: "))

while (numeroIngresado != 0) {
    if (numeroIngresado%2 == 0) {
        sumPar = sumPar + numeroIngresado
    } else {
        sumImpar = sumImpar + numeroIngresado
    }
    numeroIngresado = parseInt(prompt("Ingrese un número a sumar: "))
}

console.log("Suma de números pares: " + sumPar)
console.log("Suma de números impares: " + sumImpar)

//11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas grande.

let mayor = 0

for (let i = 0; i < array.length; i++) {
    if(array[i] > mayor) {
        mayor = array[i]
    }
}

console.log("El mayor es: " + mayor);

//12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas chico.

let menor = 0

for (let i = 0; i < array.length; i++) {
    if(array[i] < menor) {
        menor = array[i]
    }
}

console.log("El menor es: " + menor);

//13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
//ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
//manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
//un empate. Caso contrario mostrar un mensaje con el nombre de la persona
//ganadora.

let player1 = prompt("Ingrese el nombre del jugador 1: ")
let player2 = prompt("Ingrese el nombre del jugador 2: ")
let eleccion1 = prompt("Ingrese elección " + player1 + ": (PIEDRA, PAPEL o TIJERAS)")
let eleccion2 = prompt("Ingrese elección " + player2 + ": (PIEDRA, PAPEL o TIJERAS)")

do {
    if (eleccion1 === "PIEDRA" && eleccion2 === "TIJERAS") {
        alert("Gana " + player1)
    } else if (eleccion1 === "PIEDRA" && eleccion2 === "PAPEL") {
        alert("Gana " + player2)
    } else if (eleccion1 === "PAPEL" && eleccion2 === "PIEDRA") {
        alert("Gana " + player1)
    } else if (eleccion1 === "PAPEL" && eleccion2 === "TIJERAS") {
        alert("Gana " + player2)
    } else if (eleccion1 === "TIJERAS" && eleccion2 === "PAPEL") {
        alert("Gana " + player1)
    } else if (eleccion1 === "TIJERAS" && eleccion2 === "PIEDRA") {
        alert("Gana " + player2)
    } else {
        alert("EMPATE")
    }
    eleccion1 = prompt("Ingrese elección " + player1 + ": (PIEDRA, PAPEL o TIJERAS)")
    eleccion2 = prompt("Ingrese elección " + player2 + ": (PIEDRA, PAPEL o TIJERAS)")
} while (eleccion1 === eleccion2);

//14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

let generador = ["*"]

for (let i = 0; i < 5; i++) {
    console.log(generador)
    generador = generador + "*"
}

//15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
//pero invertido.

generador = ["*", "*", "*", "*", "*"]

for (let i = 0; i < 5; i++) {
    console.log(generador)
    generador.pop()
}

//16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
//pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

let arrayNum = [5, 2, 15, 45, 3, 87, 54, 18, 97, 12]
let temp = 0

for (let i = 0; i < arrayNum.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
        if (arrayNum[j] > arrayNum[j+1]) {
            temp = arrayNum[j]
            arrayNum[j] = arrayNum[j+1]
            arrayNum [j+1] = temp
        }
    }
}

alert(arrayNum)