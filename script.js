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
