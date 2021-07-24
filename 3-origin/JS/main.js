var scroll1=document.getElementsByClassName('curve')[0];
function roll(){
    // var scroll1=document.querySelector('.curve');
    window.addEventListener('scroll',function(){
        var value =1-window.scrollY/500;
        scroll1.style.transfrom =`scaleY(${value})`;console.log(scroll1.style.transfrom);
        // transfrom属性允许您对元素进行旋转、缩放、移动或倾斜。
        // scaleY通过设置 Y 轴的值来定义缩放转换。
        // $保留数字，再变成字符
        //这里用的也不是单引号，而是``
}
);
}
window.onload=function(){
    roll();
}