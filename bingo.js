const bingoCard = document.getElementById('bingoCard');
const bingo_check = document.getElementById('bingo_check');


let listNumber = [];
//数字の設定
function setNumber(){
    var number = new Set();

    while(number.size < 25){
        var num = Math.floor(1+Math.random()*75);
        number.add(num);
    }
    listNumber = Array.from(number);

    bingo_card();
}


function bingo_card(){
    bingoCard.innerHTML = '';
    for(let i = 0; i < 5; i++){
        var gyo = bingoCard.insertRow();
        for(let j = 0; j < 5; j++){
            const retsu = gyo.insertCell();
            const num = listNumber[i*5+j];
            retsu.textContent = num;
            retsu.addEventListener('click',()=> checkNumber(num,retsu));
        }
    }

}

let selectNumber = new Set();
function checkNumber(num, retsu) {
    if(selectNumber.has(num)){
        selectNumber.delete(num);
        retsu.classList.remove('selected');
    }else{
        selectNumber.add(num);
        retsu.classList.add('selected');
    }
}




function hantei(){
    const list1 =[
        [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
        [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
        [0,6,12,18,24],[4,8,12,16,20]
    ];

    const list2 = [
        [0,1,2,3],[0,1,2,4],[0,1,3,4],[0,2,3,4],[1,2,3,4],
        [5,6,7,8],[5,6,7,9],[5,6,8,9],[5,7,8,9],[6,7,8,9],
        [10,11,12,13],[10,11,12,14],[10,11,13,14],[10,12,13,14],[11,12,13,14],
        [15,16,17,18],[15,16,17,19],[15,16,18,19],[15,17,18,19],[16,17,18,19],
        [20,21,22,23],[20,21,22,24],[20,21,23,24],[20,22,23,24],[21,22,23,24],
        [0,5,10,15],[0,5,10,20],[0,5,15,20],[0,10,15,20],[5,10,15,20],
        [1,6,11,16],[1,6,11,21],[1,6,16,21],[1,11,16,21],[6,11,16,21],
        [2,7,12,17],[2,7,12,22],[2,7,17,22],[2,12,17,22],[7,12,17,22],
        [3,8,13,18],[3,8,13,23],[3,8,18,23],[3,13,18,23],[8,13,18,23],
        [4,9,14,19],[4,9,14,24],[4,9,19,24],[4,14,19,24],[9,14,19,24],
        [0,6,12,18],[0,6,12,24],[0,6,18,24],[0,12,28,24],[6,12,18,24],
        [4,8,12,16],[4,8,12,20],[4,8,16,20],[4,12,16,20],[8,12,16,20]
    ]
    const Bingo = list1.some(comp=>comp.every(comp_gaito=>selectNumber.has(listNumber[comp_gaito])));
    const Riichi = list2.some(incomp=>incomp.every(incomp_gaito=>selectNumber.has(listNumber[incomp_gaito])))

    if(!Riichi && !Bingo){
        alert("リーチでもビンゴでもない");
    }
    else if(Riichi){
        if(Riichi && !Bingo){
            alert("リーチ");
        }
        else if(Riichi && Bingo){
            alert("ビンゴ！")
        }
    }
    else if(Bingo){
        alert("ビンゴ！");
    }
            
}
