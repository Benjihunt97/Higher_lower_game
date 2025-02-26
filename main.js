const gameButtons = document.querySelectorAll('.btn-controls');
const numberCard = document.getElementById('number-card');
const scoreText = document.getElementById('score-txt');
const gameText = document.getElementById('game-txt');

// Game stats
let score = 0;
let games = 0;
let currentNum = Math.floor(Math.random() * 100);
let game = true;

numberCard.innerHTML = currentNum;
numberCard.setAttribute('data-num', currentNum);

// Function to start a new round
const startGame = () => {
  gameButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      let randomNumber = Math.floor(Math.random() * 100);
      let guess = btn.value; // 'higher' or 'lower'

      if ((guess === 'higher' && randomNumber > currentNum) ||
          (guess === 'lower' && randomNumber < currentNum)) {
        score++;
      }
      
      games++;

      // Update current number for the next round
      currentNum = randomNumber;

      // Function to update score and game text with fade effect
      function updateScore() {
        [scoreText, gameText].forEach(el => {
          el.classList.add("fade-effect");
        });

        setTimeout(() => {
          scoreText.innerHTML = score;
          gameText.innerHTML = games;

          [scoreText, gameText].forEach(el => {
            el.classList.remove("fade-effect");
          });
        }, 400);
      }

      updateScore();

      // Generate a new number
      randomNumber = Math.floor(Math.random() * 100);
      
      numberCard.innerHTML = currentNum;
      numberCard.setAttribute('data-num', currentNum);
    });
  });
};

// Start the game when the page loads
startGame();
