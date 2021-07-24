var bgg=document.getElementsByClassName("imgg")[0];
function rolli(){
    window.addEventListener('scroll',function(){
    var value=window.scrollY;
    bgg.style.height=(700-value)/700*212+'px';
    });
}
window.onload=function(){
    rolli();
}