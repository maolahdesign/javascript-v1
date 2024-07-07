function getRandom() {
  return parseInt(Math.random()*100);
}

function guessNumber(num){
    if(num > ansNumber) console.log("太大");
    else if(num < ansNumber) console.log("太小");
}

function gameStart(){
    while(true){
        num = prompt("guest a number?");
        if(num == ansNumber){
            break;
        }else{
            guessNumber(num);
        }
    }
}
var ansNumber = getRandom();
gameStart();

var transportation = prompt("你將使用哪一種交通工具 ?");
switch(n){
    case "走路":
        console.log("大約需要30分鐘");
        break;
    case "機車":
        console.log("大約需要10分鐘");
        break;
    case "公車":
        console.log("大約需要15分鐘");
        break;
    case "捷運":
        console.log("大約需要20分鐘");
        break;
    defaule:
        console.log("無法估計時間");
}