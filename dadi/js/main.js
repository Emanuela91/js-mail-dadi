// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let bottone = document.getElementById("button");

bottone.addEventListener("click",

    function(){
        var utente = Math.floor(Math.random() * 5) + 1;
        var pc = Math.floor(Math.random() * 5) + 1;
        console.log(utente);
        console.log(pc);
        document.getElementById("numero1").innerHTML = `Il tuo numero è ${utente}`;
        document.getElementById("numero2").innerHTML = `Il numero del Pc è ${pc}`;

        
        if(utente > pc){
            console.log("hai vinto");
            document.getElementById("totale").innerHTML = "Hai Vinto!";
        }
        else if(utente == pc){
            console.log("avete pareggiato");
            document.getElementById("totale").innerHTML = "Avete pareggiato!";
        }
        else{
            console.log("Ha vinto il Pc");
            document.getElementById("totale").innerHTML = "Ha vinto il Pc!";
        }

    }
)