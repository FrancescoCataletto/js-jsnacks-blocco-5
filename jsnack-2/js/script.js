/*

Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

 */
// array degli oggetti

const objArr = [
    {
        varietà: "Zucchino nero di Milano",
        peso: "200 grammi",
        lunghezza: "20cm"
    },
    {
        varietà: "Zucchino romanesco",
        peso: "300 grammi",
        lunghezza: "23cm"
    },
    {
        varietà: "Zucchino ortolano di Faenza",
        peso: "250 grammi",
        lunghezza: "14cm"
    },
    {
        varietà: "Zucchina lunga fiorentina",
        peso: "260 grammi",
        lunghezza: "30cm"
    },
    {
        varietà: "Zucchino siciliano",
        peso: "100 grammi",
        lunghezza: "15cm"
    },
    {
        varietà: "Zucchina striata di Napoli",
        peso: "270 grammi",
        lunghezza: "17cm"
    },
    {
        varietà: "Zucchina bianca triestina",
        peso: "290 grammi",
        lunghezza: "10cm"
    },
    {
        varietà: "Zucchina rigata pugliese",
        peso: "400 grammi",
        lunghezza: "12cm"
    },
    {
        varietà: "Zucchino tondo di Piacenza",
        peso: "220 grammi",
        lunghezza: "8cm"
    },
    {
        varietà: "Zucchino tondo di Nizza",
        peso: "170 grammi",
        lunghezza: "9cm"
    }
]

// funzione per prendere la lunghezza delle singole zucchine
getLength();
function getLength(){
    for(let element of objArr){
        console.log(parseInt(element.lunghezza));
    }
}