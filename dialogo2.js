var texto;
var div;
var stringmae = "Oh dear lord, I don’t think I can let you go!";
var personagem = "I’m catching up!";
var pai = "You’re doing great son, but be very careful, nobody really knows whats going on down there, it may be a trap.";
var personagem2 = "I got this mom! I’ll do it, I’m so close to cleaning the ocean of all its microplastics. I have to finish this.";

var timer1 = setTimeout(function() {
	animation(personagem,'dialogo2personagem');
},10);

var timer2 = setTimeout(function() {
	animation(pai,'dialogo2pai');
},1000);

var timer3 = setTimeout(function() {
	animation(stringmae,'dialogo2mae');
},3000);

var timer4 = setTimeout(function() {
	animation(personagem2,'dialogo2personagem2');
},5000);

function animation(texto,div) {
var str = texto.split("");
var el = document.getElementById(div);
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 10);
})();
}

function nextLevel() {
	window.location.replace("loadingscreen5.html");
}