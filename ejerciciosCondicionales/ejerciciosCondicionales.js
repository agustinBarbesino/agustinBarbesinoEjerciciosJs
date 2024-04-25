//1. Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

let numero1 = parseInt(prompt("Ingrese el primer número:"))
let numero2 = parseInt(prompt("Ingrese el segundo número:"))

if (numero1 > numero2) {
    console.log("El primer número es mayor.")
}

//2. Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.

numero1 = parseInt(prompt("Ingrese el primer número:"))
numero2 = parseInt(prompt("Ingrese el segundo número:"))

if (numero1 == numero2) {
    console.log("Los números son iguales.")
} else {
    console.log("Los números son diferentes.")
}

//3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numero es el mas grande o si son iguales.

numero1 = parseInt(prompt("Ingrese el primer número:"))
numero2 = parseInt(prompt("Ingrese el segundo número:"))

if (numero1 > numero2) {
    console.log("El primer número es mayor.")
} else if (numero1 < numero2) {
    console.log("El segundo número es mayor.")
} else {
    console.log("Los números son iguales.")
}

//4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.

numero1 = parseInt(prompt("Ingrese el primer número:"))
numero2 = parseInt(prompt("Ingrese el segundo número:"))
let numero3 = parseInt(prompt("Ingrese el tercer número:"))

if (numero1 < numero2 && numero1 < numero3) {
    console.log("El primer número es el menor: " + numero1)
} else if(numero2 < numero1 && numero2 < numero3) {
    console.log("El segundo número es el menor: " + numero2) 
} else {
    console.log("El tercer número es el menor: " + numero3)
}

//5. Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

let persona1 = {
    nombre: prompt("Ingrese nombre de la primer persona."),
    edad: prompt("Ingrese edad de la primer persona."),
    altura: prompt("Ingrese altura de la primer persona.")
}

let persona2 = {
    nombre: prompt("Ingrese nombre de la segunda persona."),
    edad: prompt("Ingrese edad de la segunda persona."),
    altura: prompt("Ingrese altura de la segunda persona.")
}

if (persona1.altura > persona2.altura) {
    console.log("La primer persona es mas alta.")
} else {
    console.log("La primer persona es mas alta.")
}

if (persona1.edad > persona2.edad) {
    console.log("La primer persona tiene mayor edad.")
} else {
    console.log("La primer persona tiene mayor edad.")
}

//6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

let nombre = prompt("Ingrese su nombre.")
let edad = parseInt(prompt("Ingrese su edad."))
let altura = parseInt(prompt("Ingrese su altura en centímetros."))
let vision = parseInt(prompt("Ingrese su vision. (Entre 1 y 10)."))

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log("Estás capacitado para conducir.")
} else {
    console.log("No estás capacitado para conducir.")
}

//7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase
//(vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean
//tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
//mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
//caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el
//mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
//afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta
//de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
//caso contrario a no querer comprar, mostrar mensaje de despedida.

nombre = prompt("Ingrese su nombre.")
let paseVip = confirm("¿Posee pase VIP?")

if (nombre === "agustin" || nombre === "Agustin" || paseVip == true) {
    console.log("Bienvenido! Tiene pase libre.")
} else {
    let entrada = confirm("¿Posee entrada?")
    if (entrada == true) {
        let usar = confirm("¿Desea utilizarla?")
        if (usar == true) {
            console.log("Bienvenido!")
        } else {
            let compra = confirm("¿Desea comprar?")
            if (compra == true) {
                dineroDisponible = parseInt(prompt("Ingrese dinero disponible"))
                if (dineroDisponible >= 1000) {
                    console.log("Venta exitosa! Bienvenido!")
                } else {
                    console.log("Dinero insuficiente, Vuelva pronto!")
                }
            } else{
                console.log("Vuelva pronto!")
            }       
        }
    }
} 

//8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
//llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
//deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
//guardar en una variable llamada numeroIngresado, y en cada intento deberás
//mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
//intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
//adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si
//usas mucho código repetido, mas adelante veraz como realizar este juego de manera
//más eficiente.

let numeroIncognita = 7
let numeroIngresado = parseInt(prompt("Adivine el número: (entre 1 y 10)"))

if (numeroIngresado == numeroIncognita) {
    console.log("Ganaste, haz adivinado el número.")
} else if (numeroIngresado > numeroIncognita) {
    console.log("El numero ingresado es mayor, vuelve a intentarlo")
    numeroIngresado = parseInt(prompt("Segundo intento, adivine el número: (entre 1 y 10)"))
    if (numeroIngresado == numeroIncognita) {
        console.log("Ganaste, haz adivinado el número.")
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El numero ingresado es mayor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("Último intento, adivine el número: (entre 1 y 10)"))
        if (numeroIngresado == numeroIncognita) {
            console.log("Ganaste, haz adivinado el número.")
        } else if(numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, Perdiste.")
        } else{
            console.log("El numero ingresado es menor, Perdiste.")
        }

    } else {
        console.log("El numero ingresado es menor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("Segundo intento, adivine el número: (entre 1 y 10)"))
        if (numeroIngresado == numeroIncognita) {
            console.log("Ganaste, haz adivinado el número.")
        } else if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, vuelve a intentarlo")
            numeroIngresado = parseInt(prompt("Último intento, adivine el número: (entre 1 y 10)"))
            if (numeroIngresado == numeroIncognita) {
                console.log("Ganaste, haz adivinado el número.")
            } else if (numeroIngresado > numeroIncognita) {
                console.log("El numero ingresado es mayor, Perdiste.")
            } else {
                console.log("El numero ingresado es menor, Perdiste.")
            }
        }    
    }

} else {
    console.log("El numero ingresado es menor, vuelve a intentarlo")
    numeroIngresado = parseInt(prompt("Segundo intento, adivine el número: (entre 1 y 10)"))
    if (numeroIngresado == numeroIncognita) {
        console.log("Ganaste, haz adivinado el número.")
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El numero ingresado es mayor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("Último intento, adivine el número: (entre 1 y 10)"))
        if (numeroIngresado == numeroIncognita) {
            console.log("Ganaste, haz adivinado el número.")
        } else if(numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, Perdiste.")
        } else {
            console.log("El numero ingresado es menor, Perdiste.")
        }
    }    
}