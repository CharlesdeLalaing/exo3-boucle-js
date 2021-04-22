// Créez une variable contenant un tableau du nom de tabExo avec 5 valeurs, une de type string, une variable, deux de type int et une de type booléenne
// Affichez le contenu du tableau dans un console.log()
let tab = 5;
let tableau = ["chaise", tab, 4, 42, true];
console.log(tableau);

// 2. Length
// Faite un console.log() qui renvoi la longueur du tableau dans l'exercice précedent (tabExo)
console.log(tableau.length);

// 3.
// Trouvez une méthode de l'objet Array qui permet de retirer le dernier élément du tableau tabExo et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrer 4 éléments
tableau.pop();
console.log(tableau);

// 4.
// Trouvez une méthode de l'objet Array qui permet de retirer le premier élément du tableau tabExo et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrer 3 éléments
tableau.shift();
console.log(tableau);

// 5.
// Trouvez une méthode de l'objet Array qui permet de rajouter des éléménts au tableau tabExo, ajoutez y 2 éléménts et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrez 5 éléments
tableau.push("Charles", "Maurice");
console.log(tableau);

// 6.
// Trouvez une méthode qui rajoute un ou des éléménts au début du tableau tabExo, ajoutez y 3 éléménts et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrez 8 éléments
tableau.unshift(14, true, "salon");
console.log(tableau);

// 7.
// Trouvez une méthode qui permet de retourner le tableau et affichez le via un console.log()

console.log(tableau.reverse());

// 8.
// Elias est très méticuleux et à besoin de ranger quelques vieilles affaires à lui d'une manière assez particulière et évidemment il à horreur qu'on le fasse à sa place. Aidez Elias à pouvoir ranger ses affaires dans un ordre très précis.
// Créer lui une boite ou il pourra y stocker des choses de différens type
let boiteElias = [];
// Elias mettra son premier objet normalement dans la boite
boiteElias.push("objet1");
// Il veut pouvoir repeter cette action une seconde fois.
boiteElias.push("objet2");
// Elias observe sa boite avec une alert
alert(boiteElias);
// Pour son troisieme objet il aimerait le mettre avant les autres
boiteElias.unshift("objet3");
// Elias observe sa boite avec une alert
alert(boiteElias);
// Il attrape 3 objets et décidera de les mettre tout au fond de la boite
boiteElias.unshift("objet4", "objet5", "objet6");
// Je pense qu'une alert serait la bienvenue pour aider Elias à savoir ce que contient sa boite car il est un peu perdu entre toutes ces choses.
alert(boiteElias);
// N'étant pas satisfait de son rangement il décide de retirer les trois premiers objets
boiteElias.splice(-3);
alert(boiteElias);
// D'en rajouter un
boiteElias.push("objet7");
// Elias à un petit problème il ne sait pas compter je me demande comment on pourrait afficher le nombre d'objet contenu par sa boite dans une alert...
alert(boiteElias.length);
console.log(boiteElias);
// Trouvant que c'est un peu trop chargé il décide de retirer les 2 derniers objets de sa boîte
boiteElias.splice(0,2);
console.log(boiteElias);
// Et pourquoi pas retirer les 2 premier...
boiteElias.splice(-2);
// Elias observe sa boite via une alert
alert(boiteElias);
// Desespéré de voir qu'il à fini par tout y retirer Elias range sa boite et s'en va.
















