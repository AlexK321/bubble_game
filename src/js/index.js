
import '../css/style.scss';

import {createGameArea} from './createGameArea';

let gameArea = document.getElementById('gameArea');
export let areaItems = [];
let random = 0

createGameArea();

function emergenceDog() {
  areaItems[random].style.background = 'blue'  
  random = Math.round(Math.random() * 8.49);
  areaItems[random].style.background = 'red'
}

setInterval(emergenceDog,1000)

function gameClick() {
    console.log (event.target.id)

}


gameArea.addEventListener("click", () => gameClick());