var numPersonagem = 1;
var numStaine = 1;
window.onload = function() {
document.getElementById('personagem').innerHTML = "<img id='personagem_rotate' src='imagens/personagem.png'>";
document.getElementById('stain').innerHTML = "<img id='staine_rotate' src='imagens/stan.png'>";
var rodarPersonagem = setInterval(function() {
	switch(numPersonagem) {
	case 1:
	document.getElementById('personagem').innerHTML = "<img id='personagem_rotate' src='imagens/personagem.png'>";
	numPersonagem++;
	break;
	case 2:
	document.getElementById('personagem').innerHTML = "<img id='personagem_rotate' src='imagens/personagem_direita.png'>";
	numPersonagem++;
	break;
	case 3:
	document.getElementById('personagem').innerHTML = "<img id='personagem_rotate' src='imagens/personagem_costas.png'>";
	numPersonagem++;
	break;
	case 4:
	document.getElementById('personagem').innerHTML = "<img id='personagem_rotate' src='imagens/personagem_esquerda.png'>";
	numPersonagem=1;
	break;

}
},500);

var rodarStaine = setInterval(function() {
	switch(numStaine) {
	case 1:
	document.getElementById('stain').innerHTML = "<img id='staine_rotate' src='imagens/stan.png'>";
	numStaine++;
	break;
	case 2:
	document.getElementById('stain').innerHTML = "<img id='staine_rotate' src='imagens/stan_direita.png'>";
	numStaine++;
	break;
	case 3:
	document.getElementById('stain').innerHTML = "<img id='staine_rotate' src='imagens/stan_costas.png'>";
	numStaine++;
	break;
	case 4:
	document.getElementById('stain').innerHTML = "<img id='staine_rotate' src='imagens/stan_esquerda.png'>";
	numStaine=1;
	break;

}
},500);
}