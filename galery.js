let ke=document.getElementById("ke");
let ei1=document.getElementById("0");
let ei2=document.getElementById("1");
let ei3=document.getElementById("2");
function eikona1(){
    ke.src=ei1.src;
    ei1.classList.add("alagi");
    ei2.classList.remove("alagi");
    ei3.classList.remove("alagi");
}
function eikona2(){
    ke.src=ei2.src;
    ei1.classList.remove("alagi");
    ei3.classList.remove("alagi");
    ei2.classList.add("alagi");
}
function eikona3(){
    ke.src=ei3.src;
    ei1.classList.remove("alagi");
    ei2.classList.remove("alagi");
    ei3.classList.add("alagi");
}