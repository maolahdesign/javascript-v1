//交換任意兩個數字
var num_a = "7";
var num_b = "3";
var num_c = num_a;
num_a = num_b;
num_b = num_c;

console.log(num_a+"  "+num_b);

//將任意字串轉換成首字大寫 
//ex:hello to Hello
var str = prompt("please input a new name:");
str = str.toLowerCase();
var firstLetter = str.slice(0,1);
var otherLatter = str.slice(1,str.length);
firstLetter = firstLetter.toUpperCase();

console.log(firstLetter+otherLatter);

//計算貓咪等同於人類的年齡
var humanAge = (catAge * 12) * 4/ 12;
console.log("貓咪 "+catAge+" 歲等同於人類 "+humanAge+" 歲。");

//計算狗狗等同於人類的年齡
var humanAge = ( dogAge-2 ) * 4 + 21;
console.log("狗狗 "+dogAge+" 歲等同於人類 "+humanAge+" 歲。");

function sayHello(){
    
}

function changeAB(num_a, num_b){
    var num_c =   num_a;
    num_a = num_b;
    num_b = num_c;
        
    console.log(num_a+"  "+num_b);
}

function bigFistWord( str ){
    str = str.toLowerCase();
    var firstLetter = (str.slice(0,1)).toUpperCase();
    var otherLatter = str.slice(1,str.length);
    
    console.log(firstLetter+otherLatter);
}

function countCatHumagAge( catAge ){
    var humanAge = (catAge * 12) * 4/ 12;
    console.log("貓咪 "+catAge+" 歲等同於人類 "+humanAge+" 歲。");
}

function countDogHumagAge( dogAge ){
    var humanAge = ( dogAge-2 ) * 4 + 21;
    console.log("狗狗 "+dogAge+" 歲等同於人類 "+humanAge+" 歲。");
}