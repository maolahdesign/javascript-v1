var robots = {
    number: "r20240708",
    name: "C-3PO",
    type: "humanoid",
    feature: ["make trouble","service","anwser"],
    bio:function(){
        console.log(
            this.number+" "+this.name+" "+this.type
        );
    },
    sayhi:function(){alert("Hi, I am "+this.name+"!");}
};

//var robots1 = new Robots(l)