let ind=0;
let string="Welcome to my website folks. "
let len=string.length;
let elem=document.getElementsByClassName("content");
let speed=70;
function type(){
    if(ind<len){
        elem[0].innerHTML+=string[ind];
        ind++;
        setTimeout(type,speed);
    }
}
type();