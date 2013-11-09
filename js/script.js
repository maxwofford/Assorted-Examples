//init vars
var vowels = [a,e,i,o,u]
var consinents = [q,w,r,t,y,p,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m]

function myTestFunction()
{
var x=document.getElementById("demo")
x.innerHTML=Math.floor((Math.random()*10)+1);
//decide parameters of the word
var wordL=document.getElementById("wordL"); //word length
var wordV=document.getElementById("wordV"); //which vowels
var wordC=document.getElementById("wordC"); //which consinents

//update to what i need
wordL.innerHTML=Math.floor((Math.random()*15)+1);
wordV.innerHTML=Math.floor((Math.random()*5)+1);
wordC.innerHTML=Math.floor((Math.random()*21)+1);
}