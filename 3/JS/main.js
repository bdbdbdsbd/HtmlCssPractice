
function initi(){
    var bgg=document.getElementsByClassName("imgg")[0];
}
function roll(){
    
    window.addEventListener('scroll',function(){
        var value=window.scrollY;
        document.getElementsByClassName("imgg")[0].style.height=(700-value)/700*212+'px';
    });
}
window.onload=function(){
    initi();
    roll();
}