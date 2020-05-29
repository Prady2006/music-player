var label = document.getElementsByClassName('label');
var checkbox = document.getElementsByClassName('checkbox');
var moon = document.getElementsByClassName('fa-moon');
var sun = document.getElementsByClassName('fa-sun');
var ball = document.getElementsByClassName('ball');
var chk = document.getElementById('chk');

label[0].addEventListener('click', function () {
    if(!chk.checked){
        // console.log("inside if " , chk.checked);
        ball[0].style.backgroundColor = "white";
        moon[0].style.color = "white";
        label[0].style.backgroundColor ="black";
        document.body.style.backgroundColor = "black";
    }else {
        // console.log("inside else ", chk.checked);
        ball[0].style.backgroundColor = "black";
        sun[0].style.color = "black";
        label[0].style.backgroundColor ="white";
        document.body.style.backgroundColor = "white";

    }
})
