// 1. Déclaration d'une variable, Concaténation et Addition

let phrase1 = "j'aime les tartines et j'en mange";
console.log(phrase1);

let phrase2 = " 4 par jours";
console.log(phrase2)

let phraseMix = phrase1 + phrase2;
console.log(phraseMix);

let chiffre1 = 5;
let chiffre2 = 35;

let addi = chiffre1 + chiffre2;
console.log(addi);

let mixUn = phrase1 + " " + chiffre1;
console.log(mixUn);

// 2. La réaffectation

let phrase1 = "Salut tout le monde";
console.log(phrase1);

let phrase2 = "Aurevoir !";
console.log(phrase2);

phrase1 = phrase2;
console.log(phrase1);


// 3. Opérateurs de grandeur, les égalités, la différence et les Booleans
// Déclarez deux variables dont le contenu sont 4 (int) et "6" (string)
let chiffre1 = 4;
let chiffre2 = "6";


console.log(chiffre1 > chiffre2); //false -> 4 pas plus grand
console.log(chiffre1 < chiffre2); //true -> 4 plus petit que 6
console.log(chiffre1 == chiffre2); //false -> 4 n'est pas égal à 6
console.log(chiffre1 != chiffre2); //true -> 4 n'est pas égal à 6
console.log(chiffre1 === chiffre2); //false -> 4 n'est pas la meme valeur et le meme element |string vs integer| 
console.log(chiffre1 !== chiffre2); //true -> 4 n'est pas la meme valeur et le meme element