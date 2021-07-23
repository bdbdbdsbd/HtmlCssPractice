window.onload=function(){
     
    init();
    roll();
}
function init(){
    var Img=document.getElementById("img");
}
function roll(){
    window.addEventListener('scroll',function(){
        var value=window.scrollY;
        Img.style.height=(1836-value)/1836*551+'px';
    });
}