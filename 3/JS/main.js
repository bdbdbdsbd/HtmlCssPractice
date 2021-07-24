
function rolli(){
    window.addEventListener('scroll',function(){
    var value=window.scrollY;
    bgg.style.height=(700-value)/700*212+'px';
    // 这里还可以使用
    // bgg.style.height='calc(40%-'(700-value)/700*212+'px'+')';
    });
}
window.onload=function(){
    var bgg=document.getElementsByClassName("imgg")[0];
    rolli();
}