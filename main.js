const tirageNombres = [];
while (tirageNombres.length < 5) {
    let newNumber = Math.ceil(Math.random() * 50);
    if (tirageNombres.indexOf(newNumber) == -1) {
        tirageNombres.push(newNumber);
    }
}
console.log(tirageNombres);

const tirageEtoiles = [];
while (tirageEtoiles.length < 2) {
    let newEtoile = Math.ceil(Math.random() * 12);
    if (tirageEtoiles.indexOf(newEtoile) == -1) {
        tirageEtoiles.push(newEtoile);
    }
}
console.log(tirageEtoiles);

const nbr0 = document.getElementById("nbr0");
const nbr1 = document.getElementById("nbr1");
const nbr2 = document.getElementById("nbr2");
const nbr3 = document.getElementById("nbr3");
const nbr4 = document.getElementById("nbr4");
const nbr5 = document.getElementById("nbr5");
const nbr6 = document.getElementById("nbr6");

setTimeout(() => {
    nbr0.classList.add("rond");
    nbr0.textContent = tirageNombres[0];
}, 2000);

setTimeout(() => {
    nbr1.classList.add("rond");
    nbr1.textContent = tirageNombres[1];
}, 4000);

setTimeout(() => {
    nbr2.classList.add("rond");
    nbr2.textContent = tirageNombres[2];
}, 6000);

setTimeout(() => {
    nbr3.classList.add("rond");
    nbr3.textContent = tirageNombres[3];
}, 8000);

setTimeout(() => {
    nbr4.classList.add("rond");
    nbr4.textContent = tirageNombres[4];
}, 10000);

setTimeout(() => {
    nbr5.classList.add("etoile");
    nbr5.textContent = tirageEtoiles[0];
}, 12000);

setTimeout(() => {
    nbr6.classList.add("etoile");
    nbr6.textContent = tirageEtoiles[1];
}, 14000);