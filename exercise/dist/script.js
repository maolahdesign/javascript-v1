
//取得一個數字
function createGameNumber() {
  var gameNumber = parseInt(Math.random()*100);
  return gameNumber;
}

//比較兩個數字是否相等
function compare(num){
  var rel = "";
  if(num > answer) rel = "猜小一點";
  else if( num < answer) rel = "猜大一點";
  else rel = "恭喜"; 

  return rel;
}

//啟動遊戲
function gameStart(){
  var i = 0;
  while(i == 0){
    var guessNumber = prompt("猜一個數字"+result+"？");
    var result = compare(guessNumber);
    if(result == "恭喜") {
      i=1;
      alert(result);
    }
  }
    
}

function getNumber(){
    var guessNumber = document.getElementById("guess_number").value;
    var show = document.getElementById("show");
    show.innerHTML = guessNumber;
    show.className = "";
    if( guessNumber > answer) {
        if(!show.classList.contains("upper")) show.classList.add("upper");
    }else if(guessNumber < answer){
        if(!show.classList.contains("lower")) show.classList.add("lower");     
    }else{
         show.innerHTML = guessNumber+"歡呼聲";    
    }
//             
    var result = compare(guessNumber);
    if(result == "恭喜") {
      i=1;
      alert(result);
    }
    
//    console.log(guessNumber);
}
//取得菜數字遊戲的數字
guessNumber
var answer = createGameNumber();
console.log(answer);
//遊戲開始
// gameStart();
