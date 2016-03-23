texte = document.querySelector("#texte");
liste = document.querySelector("#liste p");
btnTest = document.querySelector("#btnTest");

ordi = Math.floor(Math.random() * 100)+1;



function comparer(){

     if(texte.value >= 101){
        confirm("Veuillez entre un nombre entier entre 1 et 100");

    } else if(texte.value <= 0){
        confirm("Veuillez entre un nombre entier entre 1 et 100");

    } else if (texte.value == ordi) { 
        liste.innerHTML = "Bravo, le nombre était bien " + ordi + " " + "Gagné!!!";
        document.getElementById("liste").style.color ="#3653E5";

    } else if(texte.value < ordi) {
        liste.innerHTML = "Tu es trop bas";
        document.getElementById("liste").style.color ="#6A0015";

    } else if(texte.value > ordi) {
    	liste.innerHTML = "Tu es au dessus";
        document.getElementById("liste").style.color ="#39161D";

    } else {
    	liste.innerHTML = "Es tu sur d'avoir tapé un nombre entre 1 et 100";
        document.getElementById("liste").style.backgroundColor ="#B05A6B";
    }
};

btnTest.onclick = comparer;
