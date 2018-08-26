var speed = 150;
var port='';

var i = 0;

var j=0;
$(document).ready(function(){
    var hello = '안녕하세요! 명훈\'s Portfolio입니다.';
    var hello1='안녕하세요!';
    var hello2= '명훈\'s Portfolio입니다.';
    setInterval(function(){
    if (i < hello.length) {
        if(i<hello1.length){
            document.getElementById("say_hello1").innerHTML += hello.charAt(i);
            i++;
        }else {
            document.getElementById("say_hello2").innerHTML += hello.charAt(i);
            i++;
        }
    }else{
        console.log('멘트 끝');
        setTimeout(function(){
            i=0;
            document.getElementById("say_hello1").innerHTML='';
            document.getElementById("say_hello2").innerHTML='';
        },100);
        
    }},speed);
  console.log('loaded');
});

/*function helloWriter() {
  if (i < hello.length) {
    document.getElementById("say_hello").innerHTML += hello.charAt(i);
    i++;
    setInterval(helloWriter, speed);
  }
}
  helloWriter();
  console.log('loaded');
});*/