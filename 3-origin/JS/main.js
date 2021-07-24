var scroll=document.querySelector('.curve');
window.onload=function(){
    window.addEventListener('scroll',function(){
        var value =1+window.scrollY/500;
        scroll.style.transfrom =`scaleY(${value})`;
    })
}