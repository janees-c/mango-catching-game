let basket = document.getElementById('basket')
let mango = document.getElementById('mango')

let basketLeft = 300;

let score = 0
let lives = 3
let restart = document.getElementById('restart')

let scoreArea = document.getElementById('score')
let livesArea = document.getElementById('lives')


function moveLeft() {
  if (basketLeft > 0) {
    basketLeft = basketLeft - 50;
    basket.style.left = basketLeft + 'px'
  }
}

function moveRight() {
  if (basketLeft < window.innerWidth - 150) {
    basketLeft = basketLeft + 50;
    basket.style.left = basketLeft + 'px'
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    moveLeft()
  }
  if (event.key === 'ArrowRight') {
    moveRight()
  }
})

let mangoTop = 20

let mangoLeft = 300

function dropMango() {
  if (mangoTop < window.innerHeight - 50) {
    mangoTop = mangoTop + 5
    mango.style.top = mangoTop + 'px'

    checkCatch()

  } else {
    lives = lives - 1
    livesArea.innerText = '❤️'.repeat(lives);
    if (lives === 0) {
      alert('GAME OVER')
      clearInterval(gameInterval)
    }
    mangoTop = 20
    let randomPosition = Math.random() * (window.innerWidth - 150)

    mangoLeft = randomPosition

    mango.style.left = mangoLeft + 'px'
    mango.style.top = mangoTop + 'px'
  }
}

let gameInterval = setInterval(dropMango, 20)

function checkCatch() {
  if (mangoTop > window.innerHeight - 140) {

    if (mangoLeft >= basketLeft - 50 &&
      mangoLeft <= basketLeft + 100) {

      score = score + 10
      scoreArea.innerText = score

      mangoTop = 20
      mangoLeft = Math.random() * (window.innerWidth - 150)
      mango.style.top = mangoTop + 'px';
      mango.style.left = mangoLeft + 'px';
    }

  }
}


restart.addEventListener('click', restartGAme)

function restartGAme() {
  clearInterval(gameInterval)
  score = 0
  scoreArea.innerText = score
  lives = 3
  livesArea.innerText = '❤️'.repeat(lives);
  mangoTop = 20;
  mangoLeft = 300;

  mango.style.top = mangoTop + 'px';
  mango.style.left = mangoLeft + 'px';

  gameInterval = setInterval(dropMango, 20)
}