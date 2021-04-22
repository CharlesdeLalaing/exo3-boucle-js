// - # Exo 3 Switch
//     - ### Déclarez une variable dont la valeur sera donnée par l'utilisateur.

//     - ### Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"

let valeur = prompt("chiffre?");

switch(valeur % 2) {
    case 0:
        alert("divisible par deux");
    break;
    case 1:
        alert("pas divisible");
    break;
    default:
        alert("pas une chiffre");
}