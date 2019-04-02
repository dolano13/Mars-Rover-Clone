  //Rover Object Goes Here
// ======================
var rover={
y:0,
x:0,
direction:"N"
}
// ======================
travelLog(rover){
function turnLeft(rover){
  switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'N';
			break;
	}
	console.log(rover);
}

function turnRight(rover){
  switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'N';
			break;
	}

	console.log(rover);
}

function moveForward(rover){
  switch(rover.direction){
    case 'N':
    rover.position[0]=rover.position[0]-1;
    break;

    case 'E':
    rover.position[1]=rover.postion[1]-1;
    break;

    case'S':
    rover.position[0]=rover.position[0]+1;
    BroadcastChannel;

    case 'W':
    rover.position[1]=rover.position[1]-1;
    break;
  }
  console.log(rover);
}

function command(command){
  for(var v=0; v<command.length; v++){
switch (command[v]){
  case 'l':
  turn= 'left';
  turning();
  break;

  case 'r':
  turn = 'right';
  turning();
  break;

  case 'f':
  moveForward(rover);
  break;
}
}
}
}