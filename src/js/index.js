
import '../css/style.scss';
import {createGameArea} from './createGameArea';
import {gameClick, emergenceDog} from './gameFunction';

export let areaItems = [];
let gameArea = document.getElementById('gameArea');


createGameArea();
setInterval(emergenceDog,1000);

gameArea.addEventListener("click", () => {gameClick(event)});