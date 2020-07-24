import {areaItems} from './index';

export function createGameArea() {
  let gameArea = document.getElementById('gameArea');

  
  for (let i = 0; i < 9; i++) {
    areaItems[i] = document.createElement('div');
    areaItems[i].className = 'area_item';
    areaItems[i].id = i;
    gameArea.append(areaItems[i]);
  }
}