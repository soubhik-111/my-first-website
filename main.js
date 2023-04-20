var str=document.querySelector("#txt");
var txt="Welcome  To  CodeWithCrazy! ";
var txtlen=txt.length;
var pos=-1;
var t=setInterval(move,200);
function move(){
pos++;
str.innerHTML+=txt.charAt(pos);
if(pos==txtlen){
clearInterval(t);
str.innerHTML="";
}
}

