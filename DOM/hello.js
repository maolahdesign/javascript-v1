document.getElementById("title").innerHTML = "hello javascript";
//document.querySelector("h1").innerHTML = "掰掰";

document.getElementsByTagName("li")[2].innerHTML = "hello"



const container = document.getElementById('lang');
const paragraphs = container.getElementsByTagName('li');
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
}

const obj = document.getElementsByClassName("lang");
for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].textContent);
}
