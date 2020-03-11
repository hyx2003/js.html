let lo1 = Math.floor(Math.random()*5);
let lo2 = lo1+1;
let lo3 = lo1+2;
//猜测
let guess;
//击中次数
let hits = 0;
//记录总的猜测次数
let guesses = 0;
//我是否被打倒
let hitten = false;
//定义结束
let final="";
let touxiang="";
while (hitten == false) {
   guess=prompt("我就藏在这7个地方中的3个，你可以输入0——6中的任意一个数字来打我");
   if(!guess){
       touxiang ="你一共用了" + guesses +"次投降了，你个辣鸡！！！！！！"
       alert(touxiang);
       break;
   }else{
    if (guess<0 || guess>6) {
        alert("请你在输入一个正确的方位");
    }else{
        guesses =guesses+1;
        if (guess == lo1 || guess == lo2 || guess == lo3) {
            alert("好疼");
        hits = hits + 1;
        if (hits == 3) {
            hitten =true;
            alert("你打倒我了");
        }
    }
    else { alert("没打到，略略略略");}
 }
}
}
if(hitten){
   final = "你用了" + guesses + "次打倒我了，" + "你的命中率是" +(3/guesses);}
else{final ="你个辣鸡！！！！！！！！！！"}
alert(final);