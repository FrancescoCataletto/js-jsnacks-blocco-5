/*

Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


 */
reverseString("computer");


function reverseString(param){
    let reversedString = " ";
    for(let i = param.length - 1; i >= 0; i--){
        reversedString += param[i];
    }
    console.log(reversedString);
}
