// - # Exo 3 Switch
//     - ## Déclarer une variable qui prendra comme valeur un type de météo

//     - ## À l'aide d'un switch, affichez une réaction appropriée au temps
//         - ### Ex: Il pleut. Je prend un parapluie

let meteo = prompt("meteo");

switch (meteo) {
    case 'pluie':
        alert("parapluie");
    break;
    default: 
        alert("stout");
}