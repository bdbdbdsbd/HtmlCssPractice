function getId(){
    var bg=document.getElementById("bg");
    var moon=document.getElementById("moon");
    var mountain=document.getElementById("mountain");
    var road=document.getElementById("road");
    var text=document.getElementById("text");
}
function roll(){
    window.addEventListener('scroll',function(){
    var value=window.scrollY;
    bg.style.top=value*0.5+'px';
    moon.style.left=-value*0.5+'px';
    mountain.style.top=-value*0.15+'px';
    road.style.top=value*0.15+'px';
    text.style.top=value*1+'px';
})
}

window.onload=function(){
    getId();
    roll();

}