/*

Jsnack 4
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal

 */

// array delle bici
const objArr = [
    {
        nome: "Pinarello Razha",
        peso: "6,5 Kg"
    },
    {
        nome: "Savadeck Warwind5.0",
        peso: "8 Kg"
    },
    {
        nome: "Savadeck Warwind3.0",
        peso: "6,8 Kg"
    },
    {
        nome: "Savadeck Phantom3.0",
        peso: "4,65 Kg"
    },
    {
        nome: "Savadeck Herd 6.0",
        peso: "5,9 Kg"
    }
]


// funzione che pusha
let lightestBike;

getWeight();

function getWeight(){
    objArr.forEach((element) => {
        element = objArr.reduce((min, obj) => (min.peso < obj.peso) ? min : obj);
        lightestBike = element;
    }) 
    // for(let element of objArr){
    //     element = objArr.reduce((min, obj) => (min.peso < obj.peso) ? min : obj);
    //     lightestBike = element;
    // }
    console.log(lightestBike);
}

printInPage();

function printInPage(){
    document.getElementById("bike-weight").innerHTML = `<p>La bici più leggera del catalogo è ${lightestBike.nome}: pesa ${lightestBike.peso}</p>`
}