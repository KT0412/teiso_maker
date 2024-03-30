'use strict'

//時刻変更
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;
let day = today.getDate();

var Date = document.getElementById('Date');
Date.innerHTML = year+"年"+month+"月"+day+"日";

//背景編集
let gray = document.getElementById('gray');
let con = document.getElementById('main-contents');

gray.addEventListener('click',function(){

    con.style.backgroundColor = '#dedede';
    con.style.backgroundImage = 'linear-gradient(#ecebeb 50%, transparent 50%, transparent';
    con.style.backgroundSize = '10px 10px';

});

let black = document.getElementById('black');
black.addEventListener('click',function(){

    con.style.backgroundColor = '#2f2e2e';
    con.style.backgroundImage = 'linear-gradient(#2e2c2c 50%, transparent 50%, transparent)';
    con.style.backgroundSize = '10px 10px';

});

let brown = document.getElementById('brown');
brown.addEventListener('click',function(){

    con.style.backgroundColor = '#8b4513';
    con.style.backgroundImage = 'repeating-linear-gradient(0deg, #000, #8b4513 2px, #8b4513 2px, #000)';
    con.style.backgroundSize = '10px 30px';

});


//文字色編集
let Teiso = document.getElementById('main-contents');
let Gray = document.getElementById('color-gray');
Gray.addEventListener('click',function(){
    Teiso.style.color = '#e6e6e6';
})
let BlackGray = document.getElementById('color-black-gray');
BlackGray.addEventListener('click',function(){
    Teiso.style.color = '#333';
})

let White = document.getElementById('color-white');
White.addEventListener('click',function(){
    Teiso.style.color = '#fff';
})


let ColorButton = document.getElementById('color-button');
let ColorEdit = document.getElementById('color-edit');

ColorButton.addEventListener('click',function(){
    let FontValue = ColorEdit.value;
    Teiso.style.color = FontValue;
})




document.addEventListener("DOMContentLoaded", function () {
    html2canvas(document.getElementById("main-contents")).then(function (canvas) {
        // キャンバスからデータURLを取得
        var imageDataURL = canvas.toDataURL("image/png");
        // 画像を表示するimg要素にセット
        document.getElementById("capturedImage").src = imageDataURL;
    });
});

