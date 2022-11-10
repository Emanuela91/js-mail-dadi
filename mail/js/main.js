// Mail:
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Email ammesse
const myArr = ["giorgio@gmail.com", "maria@gmail.com", "piero@gmail.com", "antonio@gmail.com"];

// Chiedo l'email all'utente
email = prompt("Scrivi la tua email");

const miaLista = document.querySelector(".myList");

// Aggiungo la mail utente alla lista
myArr.push(email);


// creo la condizione di entrata della mail


// for (let i = 0; i < myArr.length; i++){   
    
    
    let elementoUtente = myArr[i];
    
    if (email == myArr [i]){
        console.log("Benvenuto, sei invitato alla festa!");        
        
    }
    if (email !== myArr [i]){
        console.log("Mi spiace non sei invitato");
        alert ("Mi spiace non sei invitato");
    }
        
        
            // // // creo elemento li
            // let liElement = document.createElement("li");
                    
            // // // all'interno del li ci saranno le email
            // liElement.append(elementoUtente);
                    
            // // // aggiungo il "li" ad "ul" in html
            // miaLista.append(liElement);
                    
            // console.log( i, elementoUtente);
        
    
// }


            
    

