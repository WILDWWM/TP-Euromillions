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