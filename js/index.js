var cellsArr = ["spot1", "spot2", "spot3", "spot4", "spot5", "spot6", "spot7", "spot8", "spot9"]
var playerPiece = '';
var computerPiece = '';
var playerCountArr = [];
var compCountArr = [];
var square = document.getElementsByClassName('selectionSquare')

function playGame(piece){
  playerPiece = piece;
  if(playerPiece === 'X'){
    computerPiece = "O";
  } else {
    computerPiece = "X"
  }
  $("#startScreen").fadeOut("slow", function(){
    $("#gamecontainer").fadeIn("slow");
  })}
//function to reload page. Work around since codepen does not allow "reload".
function resetFunction(){
  history.go(0);
    }

//Function to insert player selection into clicked box


for(var i = 0; i < square.length; i++){
  
document.getElementsByClassName('selectionSquare')[i].addEventListener('click', function(){


//function gameOperation(){               
  //if(this.innerHTML == playerPiece){
  //return;
  //}
  console.log(this.id);
  this.innerHTML = playerPiece;
 var usedSpot = cellsArr.indexOf(this.id);
  cellsArr.splice(usedSpot,1);
 playerCountArr.push(this.id);
  console.log(playerCountArr);
  setTimeout(function(){
  var computerChoice = cellsArr[Math.floor(Math.random()*cellsArr.length)];
  document.getElementById(computerChoice).innerHTML = computerPiece;
  usedSpot = cellsArr.indexOf(computerChoice);
  cellsArr.splice(usedSpot,1);
  console.log(cellsArr);
  }, 200);
})}
;