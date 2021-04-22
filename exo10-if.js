
// - # Les conditions - introduction
// 1. ### Via un console.log() vérifie l'egalité entre 1 et "1"
console.log(1 == "1");

// 2. ### Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
console.log(1 === "1");

// 3. ### Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

let nom = prompt("nom svp?");
if (nom.length < 5) {
    alert("ton nom est trop court");
} else {
    alert("ok cool");
}
// 4. ### Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

let addition = prompt("2 + 2 = ?");

if (addition == 4) {
    alert("wow très fort");
} else {
    alert("t nul")
};

// 5. ### Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

let multiplication = prompt("44 x 44 = ?");
let reponse = 1936;
let diff = Math.abs(reponse - multiplication)

if (multiplication == reponse) {
    alert("wow trop fort");
} else {
    alert(`dommage mon pote tu est à ${diff} de la bonne réponse`);
}

// 6. ### Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau

let object = [];

let object1 = prompt("first");
let object2 = prompt("secoind");
let object3 = prompt("third");

object.push(object1, object2, object3);

if (object.length == 3) {
    alert(`tu as ${object} dans ton sac`);
}

// 7. ### Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

let grandNombres = [];
let petitNombres = [];
let chiffres1 = prompt('Votre chiffre');
let chiffres2 = prompt('Votre chiffre');

if (chiffres1 >= 12 && chiffres2 >= 12) {
    grandNombres.push(chiffres1, chiffres2);
} else if (chiffres1 < 12 && chiffres2 < 12) {
    petitNombres.push(chiffres1, chiffres2);
} else if (chiffres1 >= 12 && chiffres2 < 12) {
    grandNombres.push(chiffres1);
    petitNombres.push(chiffres2);
} else {
    grandNombres.push(chiffres2);
    petitNombres.push(chiffres1);
}

alert(`votre bac contient ${grandNombres} et ${petitNombres}`);

// 8. ### Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions