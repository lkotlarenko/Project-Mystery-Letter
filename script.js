const result = document.getElementById('carta-gerada');
const inputLetter = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const counter = document.getElementById('carta-contador');
const hiddenSection = document.getElementById('word-counter');
const hint = document.getElementById('hint');
let tick = 0;
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

function refreshStyle(event) {
  const selected = event.target;
  if (tick === style.length) {
    tick = 0;
  } else {
    selected.className = style[tick];
    tick += 1;
  }
}

function autoSave() {
  localStorage.setItem('mystery', inputLetter.value);
}

function hideHint() {
  hint.style.display = 'none';
}

function showHint() {
  if (inputLetter.value.length > 0) {
    hint.style.display = 'block';
    setTimeout(hideHint, 3000);
  }
}

function renameButton() {
  button.innerText = 'Create';
}

function createLetter() {
  hiddenSection.style.display = 'flex';
  result.innerHTML = '';
  let word = inputLetter.value.split(' ');
  word = word.filter((i) => i !== '');
  counter.innerText = word.length;
  if (word.length === 0) {
    renameButton();
    result.innerText = 'por favor, digite o conteúdo da carta.';
  } else {
    button.innerText = 'Refresh';
  }
  word.forEach(wordGen);
  document.querySelectorAll('span').forEach((element) => {
    element.addEventListener('click', refreshStyle);
  });
  autoSave();
}

function syncSave() {
  const localList = localStorage.getItem('mystery');
  if (localList) {
    inputLetter.value = localList;
    createLetter();
    button.innerText = 'Refresh';
  }
}

inputLetter.addEventListener('input', renameButton);
button.addEventListener('click', createLetter);
button.addEventListener('dblclick', showHint);

window.onload = syncSave;
