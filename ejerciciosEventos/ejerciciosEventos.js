//CALCULAR INDICE DE MASA CORPORAL

let botonCalcular = document.getElementById("calcular")
botonCalcular.addEventListener("click", function() {
    let peso = document.getElementById("peso").value
    let estatura = document.getElementById("estatura").value / 100
    let resultado = peso / estatura
    document.getElementById("resultado").value = resultado
})

//CAMBIO DE MONEDA

let tasaDolar = 0.0011;
let tasaPeso = 881.59;
let pesoArg = document.getElementById("pesoArgentino");
let dolar = document.getElementById("dolar");

pesoArg.addEventListener("input", function(){
    let pesoArgValue = parseFloat(pesoArg.value);
    let calculoDolar = pesoArgValue * tasaDolar;
    dolar.value = calculoDolar.toFixed(2);
});

dolar.addEventListener("input", function(){
    let dolarValue = parseFloat(dolar.value);
    let calculoPesoArg = dolarValue * tasaPeso;
    pesoArg.value = calculoPesoArg.toFixed(2); 
});

//TARJETAS

let notas = [
    {
        id: 1,
        title: "Sacar la basura",
        text: "Si no la saco mi mamá me pega",
        realizada: false
    }
    ,
    {
        id: 2,
        title: "Sacar a pasear al gato",
        text: "Si no lo saco mi gato me pega",
        realizada: false
    }
    ,
    {
        id: 3,
        title: "Limpiar la pieza",
        text: "Si no la limpio mi pieza me pega",
        realizada: false
    }
    ,
    {
        id: 4,
        title: "Cocinar",
        text: "Si no cocino mi estomago me pega",
        realizada: false
    }
]

let idGlobal = 4
let divNotas = document.getElementById("notas")
printNotes(notas)

function createNote(notas, divNotas){
    let note = document.createElement("div")
    note.classList.add("card", "col-6",  "col-md-3", "p-3")
    note.innerHTML = 
    `<div class="card-body">
        <input onClick="marcarRealizada(${notas.id})" type="checkbox" ${notas.realizada ? "checked": ""}>
        <h5 class="card-title">${notas.title}</h5>
        <p class="card-text">${notas.text}</p>
        <input type="button" onClick="deleteNote(${notas.id})" id="borrar" value="borrar">
    </div>`
    console.log(note);
    divNotas.appendChild(note)
}

function printNotes(notas) {
    divNotas.innerHTML = ""
    for (let i = 0; i < notas.length; i++) {
        if (notas.length == 0) {
            divNotas.innerHTML = "<h2>NO HAY NOTAS<h2/>"
        } else {
            createNote(notas[i], divNotas)  
        }
        
    }
}

function addNote(title, text) {
    title.value
    text.value
    let note = {
        id: ++idGlobal,
        title: title,
        text: text,
        realizada: false
    }
    notas.push(note)
    console.log(note);
}

function wipe() {
    let text = document.getElementById("contNota")
    let title = document.getElementById("title")
    text.value = ""
    title.value = ""
}

let saveButton = document.getElementById("save")
saveButton.addEventListener("click", function () {
    let title = document.getElementById("title").value
    let text = document.getElementById("contNota").value
    if (title.value!="" && text.value!="") {
        addNote(title, text)
        printNotes(notas)
        wipe()
    } else {
        alert("No se puede crear nota vacia!")
    }   
})

let deleteButton = document.getElementById("delete")
console.log(deleteButton);
deleteButton.addEventListener("click", function () {
    let title = document.getElementById("title")
    let text = document.getElementById("contNota")
    console.log(title, text);
    text.value = ""
    title.value = ""
})

function deleteNote(id) {
    let index = notas.findIndex(nota => nota.id === id);
    if (index !== -1) {
        notas.splice(index, 1);
    }
    printNotes(notas)
}

function marcarRealizada(id) {
    for (let i = 0; i < notas.length; i++) {
        if (id === notas[i].id) {
            notas[i].realizada = !notas[i].realizada
        }
    }
}

let check = document.getElementById("realized")
check.addEventListener("change", function () {
    let checked = []
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].realizada) {
            checked.push(notas[i])
        }
    }
    console.log(checked);
    printNotes(checked)
})

let search = document.getElementById("search")
search.addEventListener("change", function () {
    let checked = []
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].text) {
            checked.push(notas[i])
        }
    }
    console.log(checked);
    printNotes(checked)
})