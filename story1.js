var texto;
var div;
var stringmae = "Son, your father and I are also keen to stop this scum that destroys our kingdom, but we don't want anything bad to happen to you! Stane-shipped petroles are releasing microplastics at a breakneck pace and only gain power the deeper in the sea they are! Stane's evil mansion gives them power and you're too young!";
var personagem = "You know well that microplastics can't hurt me, with my fact I can control my power and use them to my advantage! I have everything I need to catch that scumbag!";
var pai = "With great power comes great responsibility Vifican. You have to realize that you’re dealing with higher powers that have not captured me and your mother by pure luck. Your power does not make you immortal and I am afraid that you are too immature to understand the gravity of the situation.";
var personagem2 = "I won't stand still while Stane's greed destroys my home! Nothing will stop me, his mansion is not impenetrable and the I know the sea by heart! I will use my power to save the world! LET'S GO!";
var timer1 = setTimeout(function() {animation(stringmae,'falamae');},1);
var timer2 = setTimeout(function() {animation(personagem,'falapersonagem');},4000);
var timer3 = setTimeout(function() {animation(pai,'falapai');},8000);
var timer4 = setTimeout(function() {animation(personagem2,'falapersonagem2');},12000);
var changePage = setTimeout(function() {
	nextLevel();
},19000);
function animation(texto,div) {
var str = texto.split("");
var el = document.getElementById(div);
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 10);
})();
}

function nextLevel() {
	window.location.replace("loadingscreen.html");
}