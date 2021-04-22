// # Consignes de l'exercice 5
// ### 1. let phrase = 'Bonjour tout le monde    '

let phrase = "bonjour tout le monde    ";

// ### 2. Afficher la longueur de la phrase

console.log(phrase.length);

// ### 3. Enlever l'espace à la fin grâce à une méthode
// ### 4. Reafficher la longueur de la phrase

console.log(phrase.trim().length);

// ### 5. Afficher uniquement la dernière lettre de la phrase

phrase = "bonjour tout le monde";
console.log(phrase.slice(-1));

// ### 6. Enlever "Bonjour" de la phrase

console.log(phrase.substr(phrase.indexOf(" ") + 1));

// ### 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode

phrase = "tout le monde";
phrase2 = "Bonjour";
console.log(phrase2.concat(" ", phrase ));

// ### 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode

phrase = "Bonjour tout le monde";
console.log(phrase.replace(" tout le monde", ""));


// ### 9. Remplacer dans la phrase le mot "number" par le mot "string"

console.log(phrase.replace("Bonjour", "string"));


// ### 10. Bonus : Donner un chiffre aléatoire 

console.log(Math.floor((Math.random()*100+1)));