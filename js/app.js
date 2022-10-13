// Selector
const player = document.getElementById("player");
let div = document.createElement("div");
div.classList.add("dice");
player.appendChild(div);

function randomDice(min, max) {
  // Function pour générer un nombre aléatoire entre deux argument choisis et je le stock dans une variable en l'appellant
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Je genere un nombre aléatoire depuis ma function
let numberofdice = randomDice(1, 6);
// test

if (numberofdice == 1) {
  console.log("Tu est tombé sur 1");
} else if (numberofdice == 2) {
  console.log("Tu est tombé sur 2");
  div.style.backgroundPositionX = "-6.2em";
} else if (numberofdice == 3) {
  console.log("Tu est tombé sur 3");
  div.style.backgroundPositionX = "-12.5em";
} else if (numberofdice == 4) {
  console.log("Tu est tombé sur 4");
  div.style.backgroundPositionX = "-18.7em";
} else if (numberofdice == 5) {
  console.log("Tu est tombé sur 5");
  div.style.backgroundPositionX = "-25em";
} else if (numberofdice == 6) {
  console.log("Tu est tombé sur 6");
  div.style.backgroundPositionX = "-31.2em";
} else {
  console.log("Sa n'arrivera jamais ahahhaahahahahhaha");
}

// Box pour demander a l'user de lancer un nombre x de dé
let multipleLaunch = prompt("Combien de des veux tu lancé ? :)");
console.log(multipleLaunch);
// Function pour créée un dice
function createDice(i) {
  numberofdice = randomDice(1, 6);
  const player = document.getElementById("player");
  let div = document.createElement("div");
  div.classList.add("dice");
  player.appendChild(div);
  console.log(numberofdice);
  classadd(div);
}

function doTimes(multipleLaunch) {
  for (var i = 0; i < multipleLaunch; i++) {
    createDice(i);
  }
}

doTimes(multipleLaunch);

// Function pour gérer chaque case :)
function classadd(div) {
  if (numberofdice == 1) {
    console.log("Tu est tombé sur 1");
  } else if (numberofdice == 2) {
    console.log("Tu est tombé sur 2");
    div.style.backgroundPositionX = "-6.2em";
  } else if (numberofdice == 3) {
    console.log("Tu est tombé sur 3");
    div.style.backgroundPositionX = "-12.5em";
    console.log("test 12 12");
  } else if (numberofdice == 4) {
    console.log("Tu est tombé sur 4");
    div.style.backgroundPositionX = "-18.7em";
  } else if (numberofdice == 5) {
    console.log("Tu est tombé sur 5");
    div.style.backgroundPositionX = "-25em";
  } else if (numberofdice == 6) {
    console.log("Tu est tombé sur 6");
    div.style.backgroundPositionX = "-31.2em";
  } else {
    console.log("Sa n'arrivera jamais ahahhaahahahahhaha");
  }
}
