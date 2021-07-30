var contagem = 0;
var countBomb = 0;
var counterStaine = 0;
var numPetrols;
var numMicro;
var timer1;
var timerPetrols;
var timerCheck;
var timer3;
var timerMicro;
var timer5;
var timer_mov1;
var timer_mov2;
var timerBomb;
var timerHit;
var largura = window.innerWidth - 100;
var altura = window.innerHeight - 100;
var state = 7;
var state_staine = 10;
var state_micro = 1;
var hit = true;
var colision = true;
var movleft = true;
var movright = true;
var jump = true;
var nospam = true;
var backgroundMusic = new Audio('som/boss.mp3');
var somDisparo = new Audio('som/projetil.mp3');
var perderVida = new Audio('som/perder_vida.mp3');
var staineDisparo = new Audio('som/projetilstane.mp3');

window.onload = function() {
	startGame();
}

function startGame() {
	document.getElementById('vida').innerHTML = "<img id='vidabar7' src='imagens/vidajogador_7.png'>";
	document.getElementById('vidabar7').style.width = "30%";
	document.getElementById('energia').innerHTML += "<img id='vidastaine' src='imagens/vidastane_10.png'>";
	document.getElementById('vidastaine').style.width = "40%";
	document.getElementById('jogo').innerHTML += "<img id='personagem' src='imagens/personagem.png'>";
	document.getElementById('tempo').innerHTML = contagem;
	document.getElementById('personagem').style.position = "absolute";
	document.getElementById('personagem').style.bottom = "50px";
	document.getElementById('personagem').style.left = "0px";
	document.getElementById('personagem').style.height = "20%";
	document.getElementById('jogo').innerHTML += "<img id='staine' src ='imagens/stan_esquerda.png'>";
	document.getElementById('staine').style.height = "23%";
	document.getElementById('staine').style.position = "absolute";
	document.getElementById('staine').style.bottom = "50px";
	document.getElementById('staine').style.left = parseInt(largura - 100) + "px";	
	

	window.onkeydown = function(event) {
		processa_tecla(event);
	}

	var bombstaine = setInterval (function() {
	counterStaine++;
	staineDisparo.play();	
			document.getElementById('jogo').innerHTML += "<img id='bomba"+counterStaine+"' src='imagens/bombStaine.png'>";
			document.getElementById('bomba'+counterStaine).style.width = "5%";
			document.getElementById('bomba'+counterStaine).style.position = "absolute";
			document.getElementById('bomba'+counterStaine).style.left = parseInt(document.getElementById('staine').style.left) + "px";
			document.getElementById('bomba'+counterStaine).style.bottom = parseInt(document.getElementById('staine').style.bottom) + 50 + "px";
			
	var timerCleanStaine = setInterval(function() {
		document.getElementById('bomba'+counterStaine).style.left = parseInt(document.getElementById('bomba'+counterStaine).style.left) - 3 + "px";
		if(parseInt(document.getElementById('bomba'+counterStaine).style.left) < (-100)) {
			clearInterval(timerCleanStaine);
		}
	}, (60/1000));
			
	},(2300));

	timer1 = setInterval(function() {
				
				if(document.getElementById('personagem').style.bottom <= 0 + "px") {
					clearInterval(timer5);
					document.getElementById('personagem').style.bottom = "50px";
				}

				if(document.getElementById('staine').style.bottom <= 0 + "px") {
					clearInterval(timer5);
					document.getElementById('staine').style.bottom = "50px";
				}

				if (parseInt(document.getElementById('personagem').style.left) <= 0) {
                document.getElementById('personagem').style.left = "0px";
            	};

            	if (parseInt(document.getElementById('personagem').style.left) > parseInt(largura-200)) {
                document.getElementById('personagem').style.left = largura - 200 + "px";
            	};

            	if(parseInt(document.getElementById('personagem').style.bottom) > parseInt(altura)){
            		document.getElementById('personagem').style.bottom = altura + "px";
            	}

            	
            	colisao_bomb_personagem();
            	colisao_bomb_staine();
				},(1/1000));



	var timerStaine = setInterval(function() {
		var StaineRandom = parseInt(Math.random()*5);

		switch(StaineRandom) {
			case 0:
		
		var x = 0;

		var interval = setInterval(function() {
    
    	x++;
    	document.getElementById('staine').style.bottom = - 190 + (-0.1 * x * (x - 190)) + 'px';

    	if(x >= 190) clearInterval(interval);
		}, (60/1000));
		
			break;

			case 1:

			var x = 0;

		var interval = setInterval(function() {
    
    	x++;
    	document.getElementById('staine').style.bottom = - 150 + (-0.1 * x * (x - 150)) + 'px';

    	if(x >= 150) clearInterval(interval);
		}, (60/1000));

			break;

			case 2:
		var x = 0;

		var interval = setInterval(function() {
    
    	x++;
    	document.getElementById('staine').style.bottom = - 180 + (-0.1 * x * (x - 180)) + 'px';

    	if(x >= 180) clearInterval(interval);
		}, (60/1000));
			break;

			case 3:
		var x = 0;

		var interval = setInterval(function() {
    
    	x++;
    	document.getElementById('staine').style.bottom = - 120 + (-0.1 * x * (x - 120)) + 'px';

    	if(x >= 120) clearInterval(interval);
		}, (60/1000));
			break;

			case 4:
		var x = 0;

		var interval = setInterval(function() {
    
    	x++;
    	document.getElementById('staine').style.bottom = - 135 + (-0.1 * x * (x - 135)) + 'px';

    	if(x >= 135) clearInterval(interval);
		}, (60/1000));
			break;
		}
	},1000);

		
}

function processa_tecla(event1) {
	var key = event.keyCode;
	switch(key) {
		case 37:
		movright = true;
		jump = true;
		if(movleft){
		movleft = false;
		document.getElementById('personagem').src="imagens/personagem_esquerda.png";
		timer_mov1 = setInterval(function() {
		document.getElementById('personagem').style.left = parseInt(document.getElementById('personagem').style.left) - 2 + "px";
		}, (60/1000));
		var timerStop = setTimeout(function() {
			clearInterval(timer_mov2);
		}, (120/1000));
		}
		
        document.getElementById('jogo').style.cursor = "none";	
		break;

		case 39:
		movleft = true;
		jump = true;
		if(movright) {
			movright = false;
		document.getElementById('personagem').src="imagens/personagem_direita.png";
		timer_mov2 = setInterval(function() {
		document.getElementById('personagem').style.left = parseInt(document.getElementById('personagem').style.left) + 2 + "px";
		}, (60/1000));
		var timerStop = setTimeout(function() {
			clearInterval(timer_mov1);
		}, (120/1000));
		}
		backgroundMusic.play();
		break;

		case 38:
		if(jump) {
		var x = 0;

		var interval = setInterval(function() {
    
    	x++;
    	document.getElementById('personagem').style.bottom = - 185 + (-0.1 * x * (x - 185)) + 'px';

    	if(x >= 185) clearInterval(interval);
		}, (60/1000));
		jump = false;
		}

		if(jump == false) {
			var timerJump = setTimeout(function() {
				jump = true;
			},500);
		}
		
		break;

		case 65:
		
		if(nospam) {
		nospam = false;
		countBomb++;
		
			document.getElementById('jogo').innerHTML += "<img id='bomb"+countBomb+"' src='imagens/bomb.png'>";
			document.getElementById('bomb'+countBomb).style.width = "5%";
			document.getElementById('bomb'+countBomb).style.position = "absolute";
			document.getElementById('bomb'+countBomb).style.left = parseInt(document.getElementById('personagem').style.left) + 120 + "px";
			document.getElementById('bomb'+countBomb).style.bottom = parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height/2) + "px";
			
			timerBomb = setInterval(function() {
				document.getElementById('bomb'+countBomb).style.left = parseInt(document.getElementById('bomb'+countBomb).style.left) + 5 + "px";
				if(parseInt(document.getElementById('bomb'+countBomb).style.left) > parseInt(window.innerWidth)) {
					clearInterval(timerBomb);
				}
			}, (60/1000));
			somDisparo.play();
			var timernospam = setTimeout(function() {
				nospam = true;
			},1000);
		}
			
		break;
	
}

}


function colisao_bomb_personagem() {
		if (parseInt(document.getElementById('bomba'+counterStaine).style.left) + 50 < parseInt(document.getElementById('personagem').style.left) + parseInt(document.getElementById('personagem').width) && parseInt(document.getElementById('bomba'+counterStaine).style.left) + parseInt(document.getElementById('bomba'+counterStaine).width) - 50 > parseInt(document.getElementById('personagem').style.left)) {
			if (parseInt(document.getElementById('bomba'+counterStaine).style.bottom) + parseInt(document.getElementById('bomba'+counterStaine).height) - 20 > parseInt(document.getElementById('personagem').style.bottom) && parseInt(document.getElementById('bomba'+counterStaine).style.bottom) + 50 < parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height)) {	
				document.getElementById('bomba'+counterStaine).style.left = "-200px";

					switch (state) {
					case 7:
					document.getElementById('vida').innerHTML = "<img id='vidabar' src='imagens/vidajogador_6.png'>";
					document.getElementById('vidabar').style.width = "30%";
					state = 6;
					perderVida.play();
					break;

					case 6:
					document.getElementById('vida').innerHTML = "<img id='vidabar' src='imagens/vidajogador_5.png'>";
					document.getElementById('vidabar').style.width = "30%";
					state = 5;
					perderVida.play();
					break;

					case 5:
					document.getElementById('vida').innerHTML = "<img id='vidabar' src='imagens/vidajogador_4.png'>";
					document.getElementById('vidabar').style.width = "30%";
					state = 4;
					perderVida.play();
					break;

					case 4:
					document.getElementById('vida').innerHTML = "<img id='vidabar' src='imagens/vidajogador_3.png'>";
					document.getElementById('vidabar').style.width = "30%";
					state = 3;
					perderVida.play();
					break;

					case 3:
					document.getElementById('vida').innerHTML = "<img id='vidabar' src='imagens/vidajogador_2.png'>";
					document.getElementById('vidabar').style.width = "30%";
					state = 2;
					perderVida.play();
					break;

					case 2:
					document.getElementById('vida').innerHTML = "<img id='vidabar' src='imagens/vidajogador_1.png'>";
					document.getElementById('vidabar').style.width = "30%";
					state = 1;
					perderVida.play();
					break;

					case 1:
					document.getElementById('vida').innerHTML = "<img id='vidabar' src='imagens/vidajogador_0.png'>";
					document.getElementById('vidabar').style.width = "30%";
					
					document.getElementById('game-over').style.display = "block";
					
					break;

					}
					}
				}
			}

function colisao_bomb_staine() {
		if (parseInt(document.getElementById('bomb'+countBomb).style.left) + 50 < parseInt(document.getElementById('staine').style.left) + parseInt(document.getElementById('staine').width) && parseInt(document.getElementById('bomb'+countBomb).style.left) + parseInt(document.getElementById('bomb'+countBomb).width) - 50 > parseInt(document.getElementById('staine').style.left)) {
			if (parseInt(document.getElementById('bomb'+countBomb).style.bottom) + parseInt(document.getElementById('bomb'+countBomb).height) - 20 > parseInt(document.getElementById('staine').style.bottom) && parseInt(document.getElementById('bomb'+countBomb).style.bottom) + 50 < parseInt(document.getElementById('staine').style.bottom) + parseInt(document.getElementById('staine').height)) {	
				document.getElementById('bomb'+countBomb).style.bottom = "-200px";

					switch (state_staine) {
					case 10:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_9.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 9;
					break;

					case 9:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_8.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 8;
					break;

					case 8:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_7.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 7;
					break;

					case 7:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_6.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 6;
					break;

					case 6:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_5.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 5;
					break;

					case 5:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_4.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 4;
					break;

					case 4:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_3.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 3;
					break;

					case 3:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_2.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 2;
					break;

					case 2:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_1.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					state_staine = 1;
					break;

					case 1:
					document.getElementById('energia').innerHTML = "<img id='vidastaine' src='imagens/vidastane_0.png'>";
					document.getElementById('vidastaine').style.width = "40%";
					nextLevel();
					break;

					}
					}
				}
			}

	function nextLevel() {
	window.location.replace("dialogo4.html");
}

			