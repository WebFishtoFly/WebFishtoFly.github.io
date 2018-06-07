
/*
//方法一： document.getElementsByTagName方法得到的是一个数组
var myHeading= document.getElementsByTagName('h1');
myHeading[0].innerHTML = 'Hello World!';
*/

/*
// 方法二：querySelector() 方法返回匹配指定选择器元素的第一个子元素 。
   var myHeading = document.querySelector('h1');
   myHeading.innerHTML = 'Hello World!';
*/


// 添加图像切换器，鼠标点击事件生效  -元素设置属性
var myImage = document.getElementsByTagName('img');
 myImage[0].onclick = function(){
    var mySrc = myImage[0].getAttribute('src');
    if(mySrc == '../images/firefox-icon.png'){
        myImage[0].setAttribute("src","../images/icon.png");
    }else{
        myImage[0].setAttribute("src","../images/firefox-icon.png");
    }
}

// 添加个性化的欢迎信息
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
     var myName = prompt('please enter your name'); //prompt() 方法用于显示可提示用户进行输入的对话框
     localStorage.setItem('name',myName);
     myHeading.innerHTML = 'Mozilla is cool,'+ myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool,'+ storedName;
}
myButton.onclick = function(){
    setUserName();
}
