// Esercizio 1

// let v = prompt("Inserisci il voto");

// if (v < 18 && v >= 0) {
//     console.log("insufficiente");

// } else if (v >= 18 && v < 21) {
//     console.log("sufficiente");

// } else if (v >= 21 && v < 24) {
//     console.log("buono");

// } else if (v >= 24 && v < 27) {
//     console.log("distinto");

// } else if (v >= 27 && v <= 29) {
//     console.log("ottimo");

// } else if (v == 30) {
//     console.log("eccellente");

// } else {
//     console.log("Voto non ammesso");
// }

// Esercizio 2

// let temperatura = Number(prompt("Inserisci la temperatura:"));

// if (temperatura < -10) {
//     console.log("copriti…ancora ti raffreddi");

// } else if (temperatura < 0) {
//     console.log("non è tanto il freddo quanto l'umidità");

// } else if (temperatura < 20) {
//     console.log("non ci sono più le mezze stagioni");

// } else if (temperatura >= 30) {
//     console.log("lu mare, lu sule e lu ientu");

// } else if (temperatura < 30) {
//     console.log("mi dia una peroni sudata");

// } else {
//     console.log("Temperatura non valida");
// }

// Esercizio 3

// let num = 2;

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }

// Esercizio 4

// let somma = 0;
// let conteggio = 0;

// for (let i = 1; i <= 20; i++) {

//     if (i % 2 === 0) {
//         console.log(i);

//     } else {
//         somma += i;
//         conteggio++;
//     }
// }

// let media = somma / conteggio;

// console.log("Numeri dispari:", conteggio);
// console.log("Media dei numeri dispari:", media);

// Esercizio 5

// let scelta;

// while (scelta !== 1 && scelta !== 2 && scelta !== 3) {

//     scelta = Number(prompt("Seleziona una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra"));

//     switch (scelta) {

//         case 1:
//             console.log("E' stata selezionata l'acqua");
//             break;

//         case 2:
//             console.log("E' stata selezionata coca cola");
//             break;

//         case 3:
//             console.log("E' stata selezionata birra");
//             break;

//         default:
//             console.log("Scelta non valida. Riprova!");
//     }
// }

// Esercizio 6


// let N = Number(prompt("Quanti tiri vuoi effettuare?"));

// let punteggioGiocatore1 = 0;
// let punteggioGiocatore2 = 0;

// for (let i = 1; i <= N; i++) {

//     let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
//     punteggioGiocatore1 += dado1;

//     let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
//     punteggioGiocatore2 += dado2;
// }

// console.log("Punteggio giocatore 1:", punteggioGiocatore1);
// console.log("Punteggio giocatore 2:", punteggioGiocatore2);

// if (punteggioGiocatore1 > punteggioGiocatore2) {
//     console.log("Ha vinto il giocatore 1!");

// } else if (punteggioGiocatore2 > punteggioGiocatore1) {
//     console.log("Ha vinto il giocatore 2!");

// } else {
//     console.log("Pareggio!");
// }








