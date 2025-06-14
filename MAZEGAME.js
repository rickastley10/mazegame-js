console.log('starting MAZEGAME');
let x = 0;
let y = 0;
let level = 0;
let move = '';

room = ' ==W== \n A   *   D \n ==S==';

  

function movement(){
  move = prompt('(w/a/s/d)');

}
function coordinates(){
  if (move === 'w'){
    x = x + 1;
  }
  else if (move === 'a'){
    y = y - 1;
  }
  else if (move === 's'){
    x = x - 1;
  }
  else if (move === 'd'){
    y = y + 1;
  }
}
function info(){
    alert(`Current position: x=${x}, y=${y}\nLevel: ${level}\n${room}`);
}
  

function finish(){
  if (x === 1 && y === -3 && level === 0){
    alert('LEVEL 0 COMPLETE');
    level = level + 1;
  }
  else if (x === -9 && y === 5 && level === 1){
    alert('LEVEL 1 COMPLETE');
    level = level + 1;
  }
  else if (x === -5 && y === -4 && level === 2){
    alert('LAST LEVEL COMPLETE');
    level = level + 1;
  }
}
while (true){
  info();

  movement();
  coordinates();
  finish();
}
