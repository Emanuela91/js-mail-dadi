// Mail:
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Email ammesse
let inLista = ["giorgio@gmail.com", "maria@gmail.com", "piero@gmail.com", "antonio@gmail.com"];
console.log(inLista);

// Chiedo l'email all'utente
let richiesta = document.getElementById("text");

// creo il bottone
let bottone = document.getElementById("bottone");

// creo output
let output = document.getElementById("uscita");



// creo la condizione di entrata della mail, con array

bottone.addEventListener("click",
    function() {

        let inputUtente = richiesta.value;
        console.log(inputUtente);
        let entra = false;

        
        // ciclo
        for (let i = 0; i < inLista.length; i++){   
            
            
            if (inputUtente === inLista[i]){
                entra = true;
                
            }
            
            if (entra == true){
                console.log(entra, "sei ammesso");

            } else {
                console.log(entra, "non sei ammesso");
            }
            
        }
    }
)



    
    
    