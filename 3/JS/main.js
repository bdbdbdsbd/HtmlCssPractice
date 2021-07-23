window.onload=function(){
     let Img=document.getElementById("img");
    window.addEventListener('scroll',function(){
    var value=window.scrollY;
    Img.style.height=(1000-value)/1000+'px';
});
}
