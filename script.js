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
  let word = inputLetter.value.split(' ');
  word = word.filter((i) => i !== '');
  if (word.length === 0) {
    result.innerText = 'por favor, digite o conteúdo da carta.';
  }
  word.forEach(wordGen);
}

button.addEventListener('click', createLetter);
