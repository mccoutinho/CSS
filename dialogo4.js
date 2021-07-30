var texto;
var div;
var stringmae = "Oh my dear son… You made it! I’m so relieved and happy!";
var pai = "Great job son, you’re going to make for a great man in the future. Just like your dad.";
var personagem2 = "Thanks Mom and Dad, it was a really hard journey, but I’m really happy with what I learned. Finally the marine kingdom is safe as well as all it’s creatures that make it so beautiful. And we all can learn something: If you want change you have to make change.";
animation(stringmae,'dialogo4mae');
var timer1 = setTimeout(function() {
	animation(pai,'dialogo4pai');
},1000);
var timer1 = setTimeout(function() {
	animation(personagem2,'dialogo4personagem2');
},3000);

var changePage = setTimeout(function() {
	nextLevel();
},12000)
function animation(texto,div) {
var str = texto.split("");
var el = document.getElementById(div);
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 10);
})();
}

function nextLevel() {
	window.location.replace("win_screen.html");
}
