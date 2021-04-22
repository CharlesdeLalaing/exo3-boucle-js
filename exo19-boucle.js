// - ## Exo 1 
//     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
//     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

let multiplicateur = 5;

for(let e = 0; e <= 9; e++){
    let result = e * multiplicateur
    console.log(result)
}

// - ## Exo 2
//     ## La même chose sauf qu'on incrémente par deux

let multiplicateur = 5;

for(let e = 0; e <= 9; e+=2){
    let result = e * multiplicateur
    console.log(result)
}

// - ## Exo 3
//     ## Faire une boucle décendante pour les nombres pairs de 20 à 0
//         ## Ex: 20-18-16, ect.


let pair = 2; 

for (let e = 22; e >= 2; e-=2) {
    let pair2 = e - pair
    console.log(pair2)
}

// - ## Exo 4
//     ## Créer un tableau avec les prénoms des gens de la classe
//     ## Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'

let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];

let longPrenoms = [];

eleves.forEach(function(eleve){
    if (eleve.length > 5) {
        longPrenoms.push(eleve)
    } 
});

// console.log(longPrenoms)

// - ## Exo 5
//     ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     ## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes

let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
let grossesSommes = [];

sommes.forEach(function(somme){
    if (somme > 60) {
        grossesSommes.push(somme);
    } 
});

console.log(sommes)
console.log(grossesSommes);

// - ## Exo 6
//     ##  Voici un tableau : 
//     let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.


let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

donnees.forEach(function(donnee){
    if (typeof(donnee) == "string") {
        typeString.push(donnee);
    } else if (typeof(donnee) == "number") {
        typeNumber.push(donnee);
    } else if (typeof(donnee) == "object") {
        typeObject.push(donnee);
    } else {
        typeAutre.push(donnee);
    }
});

console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);




