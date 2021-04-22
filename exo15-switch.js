// - # Exo 4 Switch
//     - ### Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;

//     - ###  Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

//         - ### Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4

let nbr1 = +prompt("chiffre 1");
let operateur = prompt("+ * - /");
let nbr2 = +prompt("chiffre2");

switch(operateur){
    case "+":
        alert(nbr1 + nbr2);
    break;
    case "-":
        alert(nbr1 - nbr2);
    break;
    case "*":
        alert(nbr1 * nbr2);
    break;
    case "/":
        alert(nbr1 / nbr2);
    break;
}