// -  # Exo 1 Boucles FOREACH
//     ## - Creer une varaible de type array et inserez toutes les personnes de la classe
//     ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau

// let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];

//1
eleves.forEach(function(eleve){
    console.log("bonjour " + eleve);
});

//2
eleves.forEach(e => {
    console.log("Bonjour " + e);
});

// - # Exo 2 Boucle FOREACH
//     - ## Créez un un array qui contient 5 éléments
//     - ## Affichez touts les éléments a l'aide d'une boucle foreach

let elements = ["charles", "loic", "simon", 14, true];

//1
elements.forEach(function(element){
    console.log(element)
})

//2
array2.forEach(element => {
    console.log(element);
});