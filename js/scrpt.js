// Scrivi un programma che stampi in console i numeri da 1 a 100,

// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// BONUS 1
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

const gridElement = document.querySelector("#grid");

for (let i = 1; i <= 100; i++) {
    // log dei numeri da 1 a 100
    console.log(i);

    // elemento html
    const newElement = document.createElement("div");

    if (i % 3 == 0 && i % 5 == 0){
        
        // controllo per fizzbuzz
        console.log("fizzbuzz");

    }else if ( i % 3 == 0){

        // controllo per fizz
        console.log("fizz");
    }else if ( i % 5 == 0){

        // controllo per buzz
        console.log("buzz");
    }


}