$egalite = document.querySelector("#egalite");
$result = document.querySelector("#result");
$resultat = document.querySelector("#result1");
$defaite = document.querySelector("#defaite");
$victoire = document.querySelector("#victoire");
$btnTest = document.querySelector("#btnTest");
$select = document.querySelector("#Selected");
$choixOrdi = Math.floor(Math.random() * 3);

egalite = 0;
victoire = 0;
defaite = 0;
resultat = '';

function selitem(){
    $choix = $select.selectedIndex;
    $valeur = $select.options[$choix].value;
    $choixOrdi = Math.floor(Math.random() * 3);
    affichageResult();
};
 
function affichageEgalite(){
    $egalite.innerHTML = egalite + " Egalité";
}

function affichageVictoire(){
    $victoire.innerHTML = victoire + " Victoire";
}

function affichageDefaite(){
    $defaite.innerHTML = defaite + " Défaite";
}

function affichageResult() { 
        if($choixOrdi == 0){
            ordi = 'Pierre';
        } else if($choixOrdi == 1){
            ordi = 'Feuille';
        } else {
            ordi = 'Ciseaux';
        }
        $resultat.innerHTML = "L'ordinateur a joué " +  ordi;
        setTimeout(function(){
            $resultat.innerHTML ='';
        },5000);
        
};





function comparer(){
    if($valeur == $choixOrdi) {
        egalite++;
        $result.innerHTML = "Egalité !";
        setTimeout(function(){
            $result.innerHTML = ''
        }, 3000);
        $select.selectedIndex = 0;
        affichageEgalite();

    } else if(($valeur == 0 && $choixOrdi == 2) || ($valeur == 1 && $choixOrdi == 0) || ($valeur == 2 && $choixOrdi == 1)){        
        victoire++;
        $result.innerHTML = "Vous avez gagné !!!";
        setTimeout(function(){
            $result.innerHTML ='';
        },3000);
        $select.selectedIndex = 0;
        affichageVictoire();

    } else {
        defaite++;
        $result.innerHTML = "L'ordinateur gagne !!!";
        setTimeout(function(){
            $result.innerHTML = 0;
        },3000);
        $select.selectedIndex = 0;
        affichageDefaite();
    }        
};



$btnTest.onclick = comparer;
affichageDefaite();
affichageVictoire();
affichageEgalite();
 

    
 
    
    

