console.log("x")

    document.getElementById("FunFact1").addEventListener("click", myFunFact1);
    function myFunFact1(){
    alert ("I was Born and raised in Michigan");
    }  
    document.getElementById("FunFact2").addEventListener("click", myFunFact2);
    function myFunFact2(){
    alert ("My Favorite Era of History,is the Cold War!");
    }
    document.getElementById("FunFact3").addEventListener("click", myFunFact3);
    function myFunFact3(){
    alert ("When I was 16 I meet the developers of my favorite Video Game,Halo at BUNGIE studios in Seattle Washington!");
    }
function myContext() {
        var myobj = document.getElementById("context");
        myobj.remove();
}
function myQuote() {
        var x = document.createElement("TEXTAREA");
        var t = document.createTextNode("The Biggest Room in the World is the room for Improvement.");
        x.appendChild(t);
        document.body.appendChild(x);
}
var myVar = setInterval(myTimer, 1000);
import moment from 'moment';

function myTimer() {
    document.getElementById("clock").innerHTML = moment().format("DD-MM-YYYY hh:mm:ss A");
}
<button onclick="myFunction()">Dark Mode</button>
document.getElementById("dark-mode").addEventListener("click", myFunction());
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
myFunction();