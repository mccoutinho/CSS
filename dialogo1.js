var texto;
var div;
var stringmae = "You’re on the right path, you cleared the Petroles out of the surface of the ocean, but don’t get too confident, the hardest part is yet to come, these are the weaker of the microplastic sowing petroles.";
var personagem = "Don’t worry father, you taught me a lot about this, I’m ready!";
var pai = "The petroles use the sewers to help the rate of the microplastic spread increase. At this depth you need to close the sewers to stop the petroles.";
var timer1 = setTimeout(function() {animation(stringmae,'dialogo1mae');},1);
var timer2 = setTimeout(function() {animation(personagem,'dialogo1personagem');},8000);
var timer3 = setTimeout(function() {animation(pai,'dialogo1pai');},4000);

var changePage = setTimeout(function() {
	nextLevel();
},15000);

function animation(texto,div) {
var str = texto.split("");
var el = document.getElementById(div);
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 10);
})();
}

function nextLevel() {
	window.location.replace("loadingscreen3.html");
}