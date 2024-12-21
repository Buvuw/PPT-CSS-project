let randomNumber;  
let result = '';
const textoScore = document.querySelector('.score');
const textoResult = document.querySelector('.result');

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.js-result');

updateScoreElement();

console.log();

function pularTextoScore() {
  textoScore.classList.add("animacao-pular");
  textoScore.addEventListener('animationend', function() { textoScore.classList.remove("animacao-pular")});
}

function playGame(playerMove) {

  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    
    if (computerMove === 'scissors') {
      result = 'Tie.';
    } else if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'You win!'
    }

      } else if (playerMove === 'paper') {

            if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.'
        } else if (computerMove === 'rock') {
          result = 'You win!'
        }
        
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.'
          } else if (computerMove === 'scissors') {
            result = 'You win!'
          }
        }

        console.log(result);
        console.log(playerMove);
        console.log(computerMove);
        
  if (playerMove === 'rock') {
    playerMove = '<img class="js-player-move" src="images/rock-emoji.png">'
  } else if (playerMove === 'paper') {
    playerMove = '<img class="js-player-move" src="images/paper-emoji.png">'
  } else if (playerMove === 'scissors') {
    playerMove = '<img class="js-player-move" src="images/scissors-emoji.png">'
  }

  if (computerMove === 'rock') {
    computerMoveEmoji = '<img  class="js-computer-move" src="images/rock-emoji.png">'
  } else if (computerMove === 'paper') {
    computerMoveEmoji = '<img class="js-computer-move" src="images/paper-emoji.png">'
  } else {
    computerMoveEmoji = '<img class="js-computer-move" src="images/scissors-emoji.png">'
  }

  if (result === 'You win!') {
    score.wins++;
    document.querySelector('.result').style.textShadow = '0px 0px 15px white';
  } else if (result === 'You lose.') {
    score.losses++;
    document.querySelector('.result').style.textShadow = 'none';
  } else if (result === 'Tie.') {
    score.ties++;
    document.querySelector('.result').style.textShadow = 'none';
  }

  localStorage.setItem('score', JSON.stringify(score));
  
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `${result}`;

  document.querySelector('.js-moves').innerHTML = `<span>You</span> ${playerMove} ${computerMoveEmoji} <span>Computer</span>`;

  if (result === 'You win!') {
    document.querySelector('.js-computer-move').style.animation = 'icon-baixando 0.1s cubic-bezier(.25,.46,.45,.94) 0s 2 alternate';
    document.querySelector('.js-player-move').style.animation = 'icon-pulando 0.1s cubic-bezier(.25,.46,.45,.94) 0s 4 alternate';
  } else if (result === 'You lose.') {
    document.querySelector('.js-player-move').style.animation = 'icon-baixando 0.1s cubic-bezier(.25,.46,.45,.94) 0s 2 alternate';
    document.querySelector('.js-computer-move').style.animation = 'icon-pulando 0.1s cubic-bezier(.25,.46,.45,.94) 0s 4 alternate';
  } else if (result === 'Tie.') {
    document.querySelector('.js-computer-move').style.animation = 'empate-computer 0.1s cubic-bezier(.25,.46,.45,.94) 0s 4 alternate';
    document.querySelector('.js-player-move').style.animation = 'empate-player 0.1s cubic-bezier(.25,.46,.45,.94) 0s 4 alternate';
  }

  if (result === 'You win!') {
    textoResult.classList.add('animacao-win');
    textoResult.addEventListener('animationend', function() { textoResult.classList.remove('animacao-win')});
  } else if (result === 'You lose.') {
    textoResult.classList.add('animacao-lose');
    textoResult.addEventListener('animationend', function() { textoResult.classList.remove('animacao-lose')});
  }

}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `<span> Wins: ${score.wins} </span> <span> Losses: ${score.losses} </span> <span> Ties: ${score.ties} </span>`;
}

function pickComputerMove() {

  let computerMove = '';

  randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber > 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber > 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;

}
