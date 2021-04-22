// - # Variables temporaires
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 1

let temp = a;
a = b;
b = c;
c = temp;

//     - ## Afficher le changement des variables

// - # Exo 1
//     - ## Afficher 4, 3, 2, 1
//     - ## let a = 1; -> 4
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 2
//     - ## let d = 4; -> 1

let a = 1; //-> 4
let b = 2; //-> 3
let c = 3; //-> 2
let d = 4; //-> 1

let temp = d;
d = a;
a = temp;

temp = c;
c = d;
d = temp;

//     - ## Afficher le changement des variables

// - #  Exo 2
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 4
//     - ## let d = 4; -> 1

//     - ## Afficher le changement des variables
let a = 1; //-> 2
let b = 2; //-> 3
let c = 3; //-> 4
let d = 4; //-> 1

let temp = d;
d = a;
a = b;
b = c;
c = temp;

// - # Exo 3
//     - ## Afficher 4, 3, 2, 1 avec une variable temporaire
//     - ## let tableau = [1, 2, 3, 4];

let tableau = [1, 2, 3, 4];

let temp = tableau[3];

tableau[3] = tableau[0];
tableau[0] = temp;

temp = tableau[2];
tableau[2] = tableau[1];
tableau[1] = temp;

//     - # Exo 4
//     - ## let a = 1 -> 4
//     - ## let b = 2 -> 5
//     - ## let c = 3 -> 1
//     - ## let d = 4 -> 2
//     - ## let e = 5 -> 6
//     - ## let f = 6 -> 3

//     - ## Afficher le changement des variables

let a = 1 //-> 4
let b = 2 //-> 5
let c = 3 //-> 1
let d = 4 //-> 2
let e = 5 //-> 6
let f = 6 //-> 3

let temp = f;

f = c;
c = a;
a = d;
d = b;
b = e;
e = temp;
