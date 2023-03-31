const container = document.querySelector(".container");
const generateButton = document.querySelector("#generate");
const difficultySelect = document.querySelector("#difficulty");

let rows;
let cols;
let totalCells;
let bombArray;

function generateGrid() {
  //Determina righe e colonne in base alla difficoltà
  switch (difficultySelect.value) {
    case "1":
      rows = 10;
      cols = 10;
      break;
    case "2":
      rows = 9;
      cols = 9;
      break;
    case "3":
      rows = 7;
      cols = 7;
      break;
    default:
      rows = 10;
      cols = 10;
  }
  
  // Calcola il numero totale di celle
  totalCells = rows * cols;

  // Genera schiera di bombe
  bombArray = [];
  while (bombArray.length < 16) {
    const randomNumber = Math.floor(Math.random() * totalCells) + 1;
    if (!bombArray.includes(randomNumber)) {
      bombArray.push(randomNumber);
    }
  }
  
  // Genera codice HTML per la griglia
  let gridHtml = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      gridHtml += `<div class="cell" data-row="${i}" data-col="${j}"></div>`;
    }
  }
  container.innerHTML = gridHtml;

  // Aggiungi il listener di eventi clic a ogni cella
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
  });
}

function handleCellClick(event) {
  const clickedCell = event.target;
  const row = Number(clickedCell.getAttribute("data-row"));
  const col = Number(clickedCell.getAttribute("data-col"));
  const cellIndex = row * cols + col + 1;
  
  // Controlla se la cella contiene una bomba
  if (bombArray.includes(cellIndex)) {
    clickedCell.classList.add("mine");
    endGame(false);
  } else {
    clickedCell.classList.add("clicked");
    checkWin();
  }
}

function checkWin() {
  const clickedCells = document.querySelectorAll(".clicked");
  const clickedCount = clickedCells.length;
  const safeCount = totalCells - clickedCount - bombArray.length;
  if (safeCount === 0) {
    endGame(true);
  }
}

function endGame(isWin) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    const row = Number(cell.getAttribute("data-row"));
    const col = Number(cell.getAttribute("data-col"));
    const cellIndex = row * cols + col + 1;
    if (bombArray.includes(cellIndex)) {
      cell.classList.add("mine");
    }
    cell.classList.remove("clicked");
    cell.removeEventListener("click", handleCellClick);
  });
  if (isWin) {
    alert("Hai vinto!");
  } else {
    alert("Hai perso!");
  }
}

generateButton.addEventListener("click", generateGrid);


/*

1. Definizione delle variabili e selezione degli elementi del DOM:

-container è una variabile che fa riferimento all'elemento del DOM che ha una classe "container".
-generateButton è una variabile che fa riferimento all'elemento del DOM che ha l'ID "generate".
-difficultySelect è una variabile che fa riferimento all'elemento del DOM che ha l'ID "difficulty".


2. Definizione di alcune variabili importanti:

-rows e cols rappresentano il numero di righe e colonne della griglia.
-totalCells rappresenta il numero totale di celle nella griglia.
-bombArray è un array che conterrà gli indici delle celle che contengono le bombe.


3. La funzione generateGrid() viene eseguita quando l'utente clicca sul pulsante "Genera" (generateButton.addEventListener("click", generateGrid);). Questa funzione esegue i seguenti passaggi:

-Determina il numero di righe e colonne in base alla difficoltà selezionata dall'utente.
-Calcola il numero totale di celle nella griglia.
-Genera un array di 16 numeri casuali (da 1 a totalCells) che rappresentano gli indici delle celle che conterranno le bombe.
-Genera il codice HTML per la griglia (un insieme di elementi <div> con una classe "cell" e gli attributi data-row e data-col che indicano la riga e la colonna di ciascuna cella).
-Aggiunge un listener di eventi "click" a ciascuna cella.


4. La funzione handleCellClick(event) viene eseguita quando l'utente clicca su una cella della griglia. Questa funzione esegue i seguenti passaggi:

-Ottiene l'elemento cliccato (clickedCell).
-Ottiene la riga e la colonna della cella cliccata (attraverso gli attributi data-row e data-col).
-Calcola l'indice della cella (cellIndex) a partire dalla riga e dalla colonna.
-Controlla se la cella contiene una bomba (controllando se l'indice della cella è presente nell'array bombArray).
-Se la cella contiene una bomba, la classe "mine" viene aggiunta all'elemento cliccato e viene chiamata la funzione endGame(false) per terminare il gioco con una sconfitta.
-Se la cella non contiene una bomba, la classe "clicked" viene aggiunta all'elemento cliccato e viene chiamata la funzione checkWin() per controllare se l'utente ha vinto il gioco.


5. La funzione checkWin() viene eseguita dopo che l'utente ha cliccato su una cella e la cella non conteneva una bomba. Questa funzione esegue i seguenti passaggi:

-Ottiene tutti gli elementi della griglia che hanno la classe "clicked".
-Calcola il numero di celle cliccate (clickedCount).
-Calcola il numero di celle sicure (

*/