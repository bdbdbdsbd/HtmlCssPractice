
function init(){
    var Im=document.getElementById("imgg");
}
function roll(){
    window.addEventListener('scroll',function(){
        var value=window.scrollY;
        Im.style.height=(1836-value)/1836*551+'px';
    });
}
window.onload=function(){
    init();
    roll();
}