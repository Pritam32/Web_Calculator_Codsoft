b1=document.getElementsByTagName("button p");
exp=document.querySelector(".exp");
ans=document.querySelector(".ans");

function addexp(a){
    exp.value+=a;
}
function expAns(){
    ans.value="Ans: "+eval(exp.value);
    
}
function clear1(){
    exp.value="";
    ans.value="";
}
function del1(){
    exp.value=exp.value.substring(0,exp.value.length-1);
}