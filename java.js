// var myName = 'sally';
// var sayHello = 'my name is ' + myName;


document.getElementById('btn').onclick = function () {

var myName = document.getElementById('name').value;
// targetting a element in html

if (myName){
var sayHello = 'WSLM PLEASE ENTER A VALID REASON SHUKRAN>INVALID REASON>' + myName;

document.getElementById('hello').innerHTML = sayHello;
 } else {
    alert('LOL ASK HER')

 }
}

document.getElementById('btn').onclick = function () {

   var myName = document.getElementById('name').value;
   // targetting a element in html
   
   if (myName){
   var sayHello = 'WSLM PLEASE ENTER A VALID REASON SHUKRAN>INVALID REASON>' + myName;
   
   document.getElementById('hello').innerHTML = sayHello;
    } else {
       alert('LOL ASK HER')
   
    }
   }
