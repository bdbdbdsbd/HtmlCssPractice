window.onload=function(){
    var tog=document.getElementById('toggleIcon');
    var menu=document.getElementById('menu-overlay');
    // toggle: 如果classList中存在给定的值，删除它，否则，添加它
    tog.addEventListener('click',function(){
        menu.classList.toggle('active');
        tog.classList.toggle('active');
    });
}
