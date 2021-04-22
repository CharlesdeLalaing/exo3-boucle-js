// -  # Exo 1 Boucles FOR
//     ## - Creer une varaible de type array et inserez toutes les personnes de la classe
//     ## - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau

let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
for (let e = 0; e < eleves.length; e++) {
    console.log('Bonjour ' + eleves[e]);
}

// - # Exo 2 Boucles FOR (let)
//     ## - Dans un prompt inserés un nombre 
//     ## - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.

let chiffre = +prompt("chiffre")
for (let e = 0; e <= chiffre; e++) {
    console.log(e)
}
