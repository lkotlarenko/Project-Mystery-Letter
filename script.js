const result = document.getElementById('carta-gerada');
const inputLetter = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const counter = document.getElementById('carta-contador');
const hiddenSection = document.getElementById('word-counter');
const style = [
  'medium',
  'big',
  'reallybig',
  'newspaper',
  'magazine1',
  'magazine2',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright',
];

function wordGen(word) {
  const nWord = document.createElement('span');
  nWord.innerText = word;
  nWord.className = style[Math.floor(Math.random() * style.length)];
  result.appendChild(nWord);
}

function createLetter() {
  hiddenSection.style.display = 'flex';
  result.innerHTML = '';
  let word = inputLetter.value.split(' ');
  word = word.filter((i) => i !== '');
  counter.innerText = word.length;
  if (word.length === 0) {
    result.innerText = 'por favor, digite o conteúdo da carta.';
  }
  word.forEach(wordGen);
}

button.addEventListener('click', createLetter);
