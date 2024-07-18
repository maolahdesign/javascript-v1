/*
    猜數字遊戲
*/
function getRandom(scope) {
  return parseInt(Math.random()*scope);
}

function gameStart(){
    var ansNumber = getRandom(100);
    console.log(ansNumber);
    var msg="0 ~ 100" ;
    while(true){
        num = prompt("guest a number ("+msg+")?");
        if(num == ansNumber || num == 0){
            alert("歡呼聲！！！");
            break;
        }else{
            if(num > ansNumber) msg = "猜小一點";
            else if(num < ansNumber) msg = "猜大一點";
        }
    }
}

