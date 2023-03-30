Campo Minato
===

## Consegna 

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


**BONUS:**

Aggiungere una `select` accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


## Step da seguire: 

1. Dichiarare le variabili per i riferimenti agli elementi HTML utilizzati nel gioco, come il container, il bottone di generazione e la select per la scelta della difficoltà.

2. Aggiungere un gestore di eventi al bottone di generazione per avviare il gioco.

3. All'interno del gestore di eventi, ottenere il valore della difficoltà selezionata dall'utente dalla select.

4. In base alla difficoltà selezionata, calcolare il numero di righe e colonne della griglia e il numero di mine da posizionare nella griglia.

5. Generare una griglia vuota, rappresentata come una matrice di valori numerici.

6. Posizionare le mine in modo casuale nella griglia, evitando di posizionare due mine nella stessa cella.

7. Calcolare il numero di mine adiacenti a ogni cella della griglia, utilizzando i valori 'M' per rappresentare le mine e i numeri per le celle adiacenti alle mine.

8. Aggiungere un gestore di eventi alle celle della griglia per gestire il clic dell'utente.

9. All'interno del gestore di eventi, verificare se la cella cliccata dall'utente è una bomba o una cella vuota e aggiornare di conseguenza il colore della cella e il punteggio dell'utente.

10. Se la cella cliccata dall'utente è una cella vuota, mostrare anche le celle adiacenti ad essa che non sono mine, ricorsivamente.

11. Verificare se l'utente ha raggiunto il punteggio massimo possibile, ovvero se ha rivelato tutte le celle che non sono bombe, e terminare il gioco.

12. Comunicare il punteggio dell'utente al termine del gioco.

13. Aggiungere la possibilità di scegliere tra tre diversi livelli di difficoltà tramite una select accanto al bottone di generazione.