// # Exercice 4 Les variables, prompt et methods string
// *Pour plus de facilité commente à chaque fois l'exercice précédent*

// ## 1.
// - Demande à l'utilisateur avec l'aide d'un prompt quel est son prénom
// - Répond lui avec Bonjour "prenom"

let prenom = prompt("Salut c'est quoi ton nom?");
alert("Bonjour " + prenom);

// ## 2.
// - Demande lui son age
// - Dit lui tu as x ans

let age = prompt("tu as quel âges");
alert("tu as " + age);

// ## 3. 
// - Demande lui son prénom
// - Demande lui son nom de famille
// - Stock le prénom et le nom dans une variable
// - Répond avec le contenu de la variable

let prenom = prompt("ton prénom");
let nom = prompt("ton nom");
alert("tu es " + prenom + " " + nom);

// ## 4.
// - Demande lui son prénom
// - Demande lui son nom de famille
// - Applique sur le prénom une methode pour le mettre en majuscule
// - Stock le prénom et le nom dans une variable
// - Répond lui avec le contenu de la nouvelle variable, Bonjour "NOM prénom" 

let prenom = prompt("ton prénom").toUpperCase();
let nom = prompt("ton nom");
alert("bonjour " + prenom + " " + nom)