var texto;
var div;
var personagem = "I did it! The ocean is finally clean! Oh wait… WHAT THE HELL IS THAT";
animation(personagem,'dialogo3personagem');

function animation(texto,div) {
var str = texto.split("");
var el = document.getElementById(div);
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 10);
})();
}