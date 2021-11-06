const result = document.getElementById('carta-gerada');
const inputLetter = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const style = ['small', 'medium', 'big', 'red', 'green', 'black', 'pink'];

function wordGen(word) {
  const nWord = document.createElement('span');
  nWord.innerText = word;
  nWord.className = style[Math.floor(Math.random() * style.length)];
  result.appendChild(nWord);
}

function createLetter() {
  result.innerHTML = '';
  const word = inputLetter.value.split(' ');
  word.forEach(wordGen);
}

button.addEventListener('click', createLetter);
