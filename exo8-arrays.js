// - # Exercice 6
//     - # 1°
//         - ## Supprimer le dernier élément de l'array
//         - ## let monTab = ['pomme', 'fraise', 'melon', 'citron']

//let monTab = ['pomme', 'fraise', 'melon', 'citron']

//monTab.pop();

//         - ## Supprimer le premier élément de l'array

//monTab.shift();

//         - ## Ajouter un élément a la fin de l'array

//monTab.push("Charles");

//         - ## Ajouter un élément au debut de l'array

//monTab.unshift("Hector");

//         - ## Mettre le deuxième élément en majuscule 

//console.log((monTab[1].toUpperCase()));

//         - ## Changer l'ordre de l'array

//monTab.reverse();

//     - ## 2°
//         - ## Ordonner les chiffres
//         - ## let chiffres = [4, 5, 2, 1, 3]

//let chiffres = [4, 5, 2, 1, 3];

//         - ## Première methode (Ordonner)
//         - ## 1, 2, 3, 4, 5

//console.log(chiffres.sort());

//         - ## Deuxième methode (Concaténer les chiffres en un string)
//         - ## 1-2-3-4-5

//console.log(chiffres.join("-"));

//         - ## Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau

//         - ## Afficher l'array avec les chiffres ordonnées

//console.log(chiffres.sort());

//     - # 3°
//         - ## Créez un tableau vide

let tableau = []

//         - ## Ajouez 10 élément dans votre array

tableau.push("un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix");

//         - ## Affichez le contenu de l'array et sa taille

console.log(tableau);
console.log(tableau.length);

//         - ## Touvez l'index de chaque éléments

console.log(tableau.indexOf("un"));
console.log(tableau.indexOf("deux"));
console.log(tableau.indexOf("trois"));
console.log(tableau.indexOf("quatre"));
console.log(tableau.indexOf("cinq"));
console.log(tableau.indexOf("six"));
console.log(tableau.indexOf("sept"));
console.log(tableau.indexOf("huit"));
console.log(tableau.indexOf("neuf"));
console.log(tableau.indexOf("dix"));

//         - ## Utiliser une methode qui permet de supprimer un element grâce à l'index

tableau.splice(2,1);
console.log(tableau);
        
//         - ## Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau

let eleves = ["Tania", "Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama",  "William", "Alain"];

console.log(eleves[Math.floor(Math.random()*eleves.length)]);


//         - ## En une ligne supprimer 'Anis' du tableau

eleves.splice(eleves.indexOf("Tania"),1);
console.log(eleves);