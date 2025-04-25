let deckId = '';
let playerScore = 0;
let dealerScore = 0;
let gameOver = false;

// Valor para cartas K,Q,J,A
function getCardValue(card) {
  const value = card.value;
  if (["KING", "QUEEN", "JACK", "ACE"].includes(value)) return 10;
  return parseInt(value);
}

// Inicializar el mazo
async function initDeck() {
  const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?jokers_enabled=false');
  const data = await res.json();
  deckId = data.deck_id;

  // Robar 2 cartas para jugador y 1 para banca
  await drawCard(true);
  await drawCard(true);
  await drawCard(false, true);
}

// Robar carta
async function drawCard(isPlayer = true, isDealer = false) {
  if (gameOver) return;

  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  const data = await res.json();
  const card = data.cards[0];
  const value = getCardValue(card);
  const img = `<img src="${card.image}" alt="${card.code}">`;

  if (isPlayer) {
    playerScore += value;
    document.getElementById('player-cards').innerHTML += img;
    document.getElementById('player-score').innerText = playerScore;
    if (playerScore > 21) endGame(' No Way Perdiste :(');
  } else if (isDealer) {
    dealerScore += value;
    document.getElementById('dealer-cards').innerHTML += img;
    document.getElementById('dealer-score').innerText = dealerScore;
  }
}

// Plantarse
async function stand() {
  while (dealerScore < 17) {
    await drawCard(false, true);
    await new Promise(r => setTimeout(r, 500));
  }

  if (dealerScore > 21 || playerScore > dealerScore) {
    endGame('Felicidades Ganaste :)');
  } else if (dealerScore === playerScore) {
    endGame('Empate :/');
  } else {
    endGame('El dealer gana :(');
  }
}

function restartGame() {
    // Reiniciar variables
    playerScore = 0;
    dealerScore = 0;
    gameOver = false;
  
    // Limpiar cartas y puntajes
    document.getElementById('player-cards').innerHTML = '';
    document.getElementById('dealer-cards').innerHTML = '';
    document.getElementById('player-score').innerText = '0';
    document.getElementById('dealer-score').innerText = '0';
    document.getElementById('result').innerText = '';
    document.getElementById('restart-btn').style.display = 'none';
  
    // Iniciar un nuevo mazo
    initDeck();
  }
  
  // Finalizar juego
function endGame(message) {
    gameOver = true;
    document.getElementById('result').innerText = message;
    document.getElementById('restart-btn').style.display = 'inline-block';
  
  }

// Iniciar juego al cargar la página
window.onload = initDeck;
