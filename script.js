
		// Catturo i riferimenti agli elementi HTML che verranno utilizzati
		const container = document.querySelector('.container');
		const generateBtn = document.getElementById('generate');
		const difficultySelect = document.getElementById('difficulty');

		// Aggiungo un gestore di eventi al bottone di generazione della griglia
		generateBtn.addEventListener('click', () => {
			// Ottieni il valore della difficoltà selezionata dall'utente
			const difficulty = difficultySelect.value;

			// Calcolo il numero di righe e colonne della griglia in base alla difficoltà
			let rows, cols, maxNum;
			if (difficulty === '1') {
				rows = cols = 10;
				maxNum = 100;
			} else if (difficulty === '2') {
				rows = cols = 9;
				maxNum = 81;
			} else if (difficulty === '3') {
				rows = cols = 7;
				maxNum = 49;
			}

			// Creo la griglia di gioco
			let cellNum = 1; // Numero di cella iniziale
			container.innerHTML = ''; // Pulisci la griglia precedente (se presente)
			for (let i = 0; i < rows; i++) {
				for (let j = 0; j < cols; j++) {
					// Crea una nuova cella e aggiungi un gestore di eventi per il clic
					const cell = document.createElement('div');
					cell.classList.add('cell');
					cell.innerText = cellNum;
					container.appendChild(cell);
					cellNum++;
					cell.addEventListener('click', () => {
						// Colora la cella di azzurro e stampa il numero della cella nella console
						cell.classList.add('clicked');
						console.log(cellNum);
					});
				}
			}
		});
