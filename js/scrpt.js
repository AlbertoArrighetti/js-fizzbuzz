
// variabili DOM
const gridElement = document.querySelector("#grid");


// ciclo for
for (let i = 1; i <= 100; i++) {
    // log dei numeri da 1 a 100
    console.log(i);

    // elemento html
    const newElement = document.createElement("div");
    // stilizzazione elemento
    newElement.className = "box fs-4 fw-semibold ";
    newElement.innerHTML = i;

    // visualizzazione in pagina di TUTTI i numeri
    gridElement.append(newElement)




    // CONTROLLI 
    // SE i numeri sono multipli di 3 e di 5
    if (i % 3 == 0 && i % 5 == 0){

        // visualizzazione in pagina
        newElement.innerText = "fizzbuzz";
        // aggiunta classe a "col" per stilizzazione
        newElement.className += " fizz-buzz"


    // ALTRIMENTI se i numeri sono solo multipli di 3
    }else if ( i % 3 == 0){

        // visualizzazione in pagina
        newElement.innerText = "fizz";
        // aggiunta classe a "col" per stilizzazione 
        newElement.className += " fizz"


    // ALTRIMENTI si i numeri sono solo multipli di 5
    }else if ( i % 5 == 0){

        // visualizzazione in pagina
        newElement.innerText = "buzz";
        // aggiunta classe a "col" per stilizzazione 
        newElement.className += " buzz";


    }


}