let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
   
var count=1;
shufflenumbers(num);
function shufflenumbers(num) {
    for (var i = num.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = num[i];
        num[i] = num[j];
        num[j] = temp;
    }
}
console.log(num);
k=20;
function change(e){
if (e.innerHTML==count){
    if (e.innerHTML==1){
resettimer(); startstoptimer();}
    else  if (e.innerHTML==k) {e.innerHTML=""; 
        a();resettimer();score();}
     if(count>(k-20)) { 
         e.innerHTML="";  }
     else {
        e.innerHTML=count+20;  }
    count++
}}

console.log(document.getElementsByClassName("ract"));
var box=document.getElementsByClassName("ract");

for (var i=0; i < 40; i++) {

    document.getElementsByClassName("ract")[i].innerHTML = num[i];

   
}
var millisec= 0; 
var seconds= 0;
var timer; 
var show;
var h;

function display(){ 
     if ( millisec>999 ){ 
          millisec=0 ;
          seconds+=1;
          } 
     else 
         millisec+=1 
         document.d.d2.value = seconds + "." + millisec; 
         show= (seconds + "." + millisec) ; 

   document.getElementById("dis"). innerHTML= seconds + "." + millisec; 
         timer = setTimeout("display()",100); 
} 



function stoptimer() { 
     clearTimeout(timer); 
          timer=0;
} 

function startstoptimer() {  
      if(timer>0) {      
       } 
       else { 
           display();
       } 
} 

function resettimer() { 	
        stoptimer();
       
         millisec=0;	
         seconds=0; 
} 
function score(){
alert("yourscore is "+show) ;
}

function a() {
if (k==20) {
var bestscored=[500,600,700,800,900];


if( millisec < bestscored[0]) {
       bestscored[4]= bestscored[3];
       bestscored[3]= bestscored[2]; 
       bestscored[2]= bestscored[1]; 
       bestscored[1]= bestscored[0];
       bestscored[0]= millisec;  
       }else  if( millisec < bestscored[1]) {
       bestscored[4]= bestscored[3];
       bestscored[3]= bestscored[2]; 
       bestscored[2]= bestscored[1]; 
       bestscored[1]= millisec;
       }else  if( millisec < bestscored[2]) {
       bestscored[4]= bestscored[3];
       bestscored[3]= bestscored[2]; 
       bestscored[2]=  millisec;        
       }else  if( millisec < bestscored[3]) {
       bestscored[4]= bestscored[3];
       bestscored[3]=  millisec;
       }else  if( millisec < bestscored[4]) {
       bestscored[4]= millisec;}
      else{
              }
localStorage.setItem("bestscored", JSON.stringify(bestscored));
var stored = JSON.parse(localStorage.getItem("bestscored"));

document.getElementById("1" ).innerHTML = stored;
}
else if (k==40) {
var bestscore=[1000,1100,1200,1300,1400];
   if( millisec < bestscore[0]) {
       bestscore[4]= bestscore[3];
       bestscore[3]= bestscore[2]; 
       bestscore[2]= bestscore[1]; 
       bestscore[1]= bestscore[0];
       bestscore[0]= millisec;  
       }else  if( millisec < bestscore[1]) {
       bestscore[4]= bestscore[3];
       bestscore[3]= bestscore[2]; 
       bestscore[2]= bestscore[1]; 
       bestscore[1]= millisec;
       }else  if( millisec <bestscore[2]) {
       bestscore[4]= bestscore[3];
       bestscore[3]= bestscore[2]; 
       bestscore[2]=  millisec;        
       }else  if( millisec < bestscore[3]) {
       bestscore[4]= bestscore[3];
       bestscore[3]=  millisec;
       }else  if( millisec < bestscore[4]) {
       bestscore[4]= millisec;}
      else{
              }
localStorage.setItem("bestscore", JSON.stringify(bestscored));
var stored = JSON.parse(localStorage.getItem("bestscore"));
document.getElementById("1" ).innerHTML = bestscore;
}
else if (k==60) {
var bestscor=[1500,1600,1700,1800,1900];
   if( millisec < bestscor[0]) {
       bestscor[4]= bestscor[3];
       bestscor[3]= bestscor[2]; 
       bestscor[2]= bestscor[1]; 
       bestscor[1]= bestscor[0];
       bestscor[0]= millisec;  
       }else  if( millisec < bestscor[1]) {
       bestscor[4]= bestscor[3];
       bestscor[3]= bestscor[2]; 
       bestscor[2]= bestscor[1]; 
       bestscor[1]= millisec;
       }else  if( millisec <bestscor[2]) {
       bestscor[4]= bestscor[3];
       bestscor[3]= bestscor[2]; 
       bestscor[2]=  millisec;        
       }else  if( millisec < bestscor[3]) {
       bestscor[4]= bestscor[3];
       bestscor[3]=  millisec;
       }else  if( millisec < bestscor[4]) {
       bestscor[4]= millisec;}
      else{
              }
localStorage.setItem("bestscor", JSON.stringify(bestscored));
var stored = JSON.parse(localStorage.getItem("bestscor"));
document.getElementById("1" ).innerHTML = bestscor;
}


}


function load() {
location. reload();
}

var k=20;
function level1() {
k=20;
}
function level2() {
k=40;
}
function level3() {
k=60;
}
localStorage.setItem("high-sc", JSON.stringify(bestscored));