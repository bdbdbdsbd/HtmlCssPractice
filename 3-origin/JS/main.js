//Js中没有用var声明的变量都是全局变量，而且是顶层对象的属性。
function roll(){
    // var scroll1=document.querySelector('.curve');
    window.addEventListener('scroll',function(){
        value =1-window.scrollY/500;
        scroll1.style.transfrom =`scaleY(${value})`;
        console.log(scroll1.style.transfrom);
        // transfrom属性允许您对元素进行旋转、缩放、移动或倾斜。
        // scaleY通过设置 Y 轴的值来定义缩放转换。
        // $保留数字，再变成字符
        //这里用的也不是单引号，而是``
}
);
}
window.onload=function(){
    scroll1=document.getElementsByClassName('curve')[0];
    roll();
    //注意作用域链
    // JS的作用域是从内往外走寻找定义的，并使用找到的第一个定义
}