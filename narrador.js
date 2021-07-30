var texto;
var div;
var narrador = "During a dark time in the marine kingdom society where pollution is increasingly uncontrolled and shrouded by superior interests, a renegade scientist and a fervent environmentalist are persecuted for their belief that sea creatures are well beyond their limits and risk the rich fauna and flora of the marine kingdom. In the midst of the chaos of their escape the stories of the two intersect and a fervent passion grows that coupled with the power of belief in a greater good spawned our hero, the Almighty fighter against the threat of the Petroles who sow microplastics to destroy the marine kingdom, and owns the name of Vifican. The Petroles are sent by Stane, the industry king of the Marine Kingdom society, who wants to get his money without the worry of anything secondary for him, like the protection of the animal kingdom's flora and fauna. His greed is immeasurable and he will do everything to stop Vifican. Can Vifican ensure the protection of the Marine Kingdom?";
var pai = "Great job son, you’re going to make for a great man in the future. Just like your dad.";
var personagem2 = "Thanks Mom and Dad, it was a really hard journey, but I’m really happy with what I learned. Finally the marine kingdom is safe as well as all it’s creatures that make it so beautiful. And we all can learn something: If you want change you have to make change.";
animation(narrador,'dialogonarrador');

var changePage = setTimeout(function() {
	nextLevel();
},18000);

function animation(texto,div) {
var str = texto.split("");
var el = document.getElementById(div);
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 10);
})();
}

function nextLevel() {
	window.location.replace("story1.html");
}