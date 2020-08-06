import { colors } from './bg_color';

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

refs.start.addEventListener('click', onClickStarts);
refs.stop.addEventListener('click', onClickStops);

let setInterId = null;

function onClickStarts() {
  setInterId = setInterval(setBgcolorStart, 1000);
  refs.start.setAttribute('disabled', 'disabled');
}

function onClickStops() {
  clearInterval(setInterId);
  refs.start.removeAttribute('disabled', 'disabled');
}

function setBgcolorStart() {
  const bgColor = colors[randomIntegerFromInterval([0], [5])];
  document.body.style.backgroundColor = bgColor;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
