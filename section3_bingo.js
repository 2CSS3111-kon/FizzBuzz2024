list = [];
let nowY = 30;

function setNumber(){
    if(list.length == 75){
        alert("数字は全て出ました。");
        return;
    }
    let random;

    do{
        random = Math.floor(1+Math.random()*75);
        
    }
    while(list.includes(random));

    list.push(random);

    console.log("出た番号:"+ random);
    
    drawNumber(random);
}

function drawNumber(number) {
    const canvas = document.getElementById("main_canvas");
    const ctx = canvas.getContext("2d");

    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("出た番号: " + number, canvas.width / 2, nowY);

    nowY += 40;
}