import {areaItems} from './index';

let pointsArea = document.getElementById('points');
let points = 0; 
pointsArea.innerText = `${points} баллов`;
let random = 0;

export function gameClick(event) {
  if (event.target.id == random) {
    points += 1;
    pointsArea.innerText = `${points} баллов`;
  }
}

export function emergenceDog() {
  areaItems[random].classList.remove('dog'); 
  random = Math.round(Math.random() * 8.49);
  areaItems[random].classList.add('dog');
}