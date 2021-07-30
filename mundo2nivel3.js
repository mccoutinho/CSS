var contagem = 0;
var countBomb = 0;
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
var state_micro = 1;
var hit = true;
var colision = true;
var count_Grade = 0;
var backgroundMusic = new Audio('som/MUNDO2.mp3');
var somDisparo = new Audio('som/projetil.mp3');
var perderVida = new Audio('som/perder_vida.mp3');
var somGrade = new Audio('som/fechar_grades.mp3');
var ganharVida = new Audio('som/ganhar_vida.mp3');

window.onload = function() {
	startGame()
	
}

function startGame() {
	document.getElementById('vida').innerHTML = "<img id='vidabar7' src='imagens/vidajogador_7.png'>";
	document.getElementById('vidabar7').style.width = "30%";
	document.getElementById('energia').innerHTML += "<img id='green' src='imagens/green_1.png'>";
	document.getElementById('green').style.width = "30%";
	document.getElementById('energia').innerHTML += "<img id='orange' src='imagens/orange_1.png'>";
	document.getElementById('orange').style.width = "30%";
	document.getElementById('energia').innerHTML += "<img id='yellow' src='imagens/yellow_1.png'>";
	document.getElementById('yellow').style.width = "30%";
	document.getElementById('jogo').innerHTML += "<img id='personagem' src='imagens/personagem.png'>";
	document.getElementById('tempo').innerHTML = contagem;
	document.getElementById('personagem').style.position = "absolute";
	document.getElementById('personagem').style.bottom = "0px";
	document.getElementById('personagem').style.left = "0px";
	document.getElementById('personagem').style.height = "20%";
	grades();
	numPetrols = 4;
	for (var i = 1; i <= numPetrols; i++) {
		document.getElementById('jogo').innerHTML += "<img id='petrol"+i+"' src='imagens/oilfluid.png'>";
		document.getElementById('petrol'+i).style.position = "absolute";
		document.getElementById('petrol'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
		document.getElementById('petrol'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
		document.getElementById('petrol'+i).style.height = "18%";	
	}

	micro();

	timerPetrols = setInterval(function() {
		for (var i = 1; i <= numPetrols; i++) {
		document.getElementById('petrol'+i).style.left = parseInt(document.getElementById('petrol'+i).style.left) - parseInt(Math.random()*3+1) + "px";
		if (parseInt(document.getElementById('petrol'+i).style.left) < -document.getElementById('petrol'+i).width) {
                document.getElementById('petrol'+i).style.left = largura + 90 + "px"
            };
        }
		}, (60/1000));

	window.onkeydown = function(event) {
		processa_tecla(event);
	}

	window.onkeyup = function(event) {
		processa_teclaup(event);
	}

	timer1 = setInterval(function() {
				
				if(document.getElementById('personagem').style.bottom <= 0 + "px") {
					clearInterval(timer5);
					document.getElementById('personagem').style.bottom = "0px";
				}

				if (parseInt(document.getElementById('personagem').style.left) <= 0) {
                document.getElementById('personagem').style.left = "0px";
            	};

            	if (parseInt(document.getElementById('personagem').style.left) > parseInt(largura)) {
                document.getElementById('personagem').style.left = largura + "px";
            	};

            	if(parseInt(document.getElementById('personagem').style.bottom) > parseInt(altura)){
            		document.getElementById('personagem').style.bottom = altura + "px";
            	}
				},(1/1000));
	
}

function processa_tecla(event) {
	var key = event.keyCode;
	switch(key) {
		case 37:
		document.getElementById('personagem').src="imagens/personagem_esquerda.png";
		clearInterval(timer_mov2);
		clearInterval(timer_mov1);
		timer_mov1 = setInterval(function() {
		document.getElementById('personagem').style.left = parseInt(document.getElementById('personagem').style.left) - 2 + "px";
		}, (60/1000));

            detecta_colisao();
            colisao_green();
            colisao_yellow();
            colisao_orange();
            colisao_grade();
            colisao_coracao();

            document.getElementById('jogo').style.cursor = "none";
		break;

		case 39:
		document.getElementById('personagem').src="imagens/personagem_direita.png";
		clearInterval(timer_mov1);
		clearInterval(timer_mov2);
		timer_mov2 = setInterval(function() {
		document.getElementById('personagem').style.left = parseInt(document.getElementById('personagem').style.left) + 2 + "px";
		}, (60/1000));
            detecta_colisao();
            colisao_green();
            colisao_yellow();
            colisao_orange();
            colisao_grade();
            colisao_coracao();
        backgroundMusic.play();
		break;

		case 38:
		clearInterval(timer3);
		clearInterval(timer5);

		timer3 = setInterval(function() {
			document.getElementById('personagem').style.bottom = parseInt(document.getElementById('personagem').style.bottom) + 2 + "px";
			},(60/1000));
			detecta_colisao();
			colisao_green();
			colisao_yellow();
			colisao_orange();
			colisao_grade();
			colisao_coracao();
		break;
	
}
}

function processa_teclaup(event1) {
	var key = event1.keyCode;
	switch(key) {
		case 37:
		document.getElementById('personagem').src="imagens/personagem_esquerda.png";
		clearInterval(timer_mov2);
		clearInterval(timer_mov1);
		document.getElementById('personagem').src="imagens/personagem_esquerda.png";
            detecta_colisao();
            colisao_green();
            colisao_yellow();
            colisao_orange();
            colisao_grade();
            colisao_coracao();
		break;

		case 39:
		document.getElementById('personagem').src="imagens/personagem_direita.png";
		document.getElementById('personagem').src="imagens/personagem_direita.png";
		clearInterval(timer_mov1);
		clearInterval(timer_mov2);
			detecta_colisao();
			colisao_green();
			colisao_yellow();
			colisao_orange();
			colisao_grade();
			colisao_coracao();
		break;

		case 38:
		clearInterval(timer3);
		clearInterval(timer5);

		timer5 = setInterval(function() {
			document.getElementById('personagem').style.bottom = parseInt(document.getElementById('personagem').style.bottom) - 2 + "px";
			},(60/1000));
			detecta_colisao();
			colisao_green();
			colisao_yellow();
			colisao_orange();
			colisao_grade();
			colisao_coracao();
		break;
		
		case 65:
			countBomb++;
			if(document.getElementById('green').src.search('imagens/green_7.png') != -1 ) {
			document.getElementById('jogo').innerHTML += "<img id='bomb"+countBomb+"' src='imagens/bomb.png'>";
			document.getElementById('bomb'+countBomb).style.width = "5%";
			document.getElementById('bomb'+countBomb).style.position = "absolute";
			document.getElementById('bomb'+countBomb).style.left = parseInt(document.getElementById('personagem').style.left) + 120 + "px";
			document.getElementById('bomb'+countBomb).style.bottom = parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height/2) + "px";
			
			timerBomb = setInterval(function() {
				document.getElementById('bomb'+countBomb).style.left = parseInt(document.getElementById('bomb'+countBomb).style.left) + 5 + "px";
			}, (60/1000));

			var timerBombCheck = setInterval(function() {
				colisao_bomb();
			}, (1/1000));
			
			document.getElementById('green').src = "imagens/green_1.png";
			}
			somDisparo.play();
		break;

		case 83:
		if(document.getElementById('orange').src.search('imagens/orange_7.png') != -1 ) {
           document.getElementById('orange').src = "imagens/orange_1.png";
			freeze();
          } 
					
		
		
		break;

		case 68:

			if(document.getElementById('yellow').src.search('imagens/yellow_7.png') != -1 ) {
			document.getElementById('yellow').src = "imagens/yellow_1.png";
			shield();		
		}

		break;

		}
	}

	function detecta_colisao() {
		if (colision) {
		for(var i=1; i<=numPetrols ;i++) {
		if (parseInt(document.getElementById('personagem').style.left) + 50 < parseInt(document.getElementById('petrol'+i).style.left) + parseInt(document.getElementById('petrol'+i).width) && parseInt(document.getElementById('personagem').style.left) + parseInt(document.getElementById('personagem').width) - 50 > parseInt(document.getElementById('petrol'+i).style.left)) {
			if (parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height) - 20 > parseInt(document.getElementById('petrol'+i).style.bottom) && parseInt(document.getElementById('personagem').style.bottom) + 50 < parseInt(document.getElementById('petrol'+i).style.bottom) + parseInt(document.getElementById('petrol'+i).height)) {	
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
					clearInterval(timerMicro);
					clearInterval(timerPetrols);

					window.onkeydown = function(event) {
					return false;
					}

					window.onkeyup = function(event) {
					return false;
					}
					
					break;

					}
				}
			}
		}
	}
}

	function micro() {
		numMicro = 4;
	for (var i = 1; i <= numMicro; i++) {
		document.getElementById('jogo').innerHTML += "<img id='green"+i+"' src='imagens/microgreen.png'>";
		document.getElementById('green'+i).style.position = "absolute";
		document.getElementById('green'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
		document.getElementById('green'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
		document.getElementById('green'+i).style.height = "5%";
		document.getElementById('green'+i).style.display = "none";	
	}

	for (var i = 1; i <= numMicro; i++) {
		document.getElementById('jogo').innerHTML += "<img id='orange"+i+"' src='imagens/microorag.png'>";
		document.getElementById('orange'+i).style.position = "absolute";
		document.getElementById('orange'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
		document.getElementById('orange'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
		document.getElementById('orange'+i).style.height = "5%";
		document.getElementById('orange'+i).style.display = "none";	
	}

	for (var i = 1; i <= numMicro; i++) {
		document.getElementById('jogo').innerHTML += "<img id='yellow"+i+"' src='imagens/microyellow.png'>";
		document.getElementById('yellow'+i).style.position = "absolute";
		document.getElementById('yellow'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
		document.getElementById('yellow'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
		document.getElementById('yellow'+i).style.height = "5%";
		document.getElementById('yellow'+i).style.display = "none";	
	}

	timerMicro = setInterval(function() {
		for (var i = 1; i <= numMicro; i++) {
		document.getElementById('yellow'+i).style.left = parseInt(document.getElementById('yellow'+i).style.left) - parseInt(Math.random()*3+1) + "px";
		if (parseInt(document.getElementById('yellow'+i).style.left) < -document.getElementById('yellow'+i).width) {
                document.getElementById('yellow'+i).style.left = largura + 90 + "px"
            };

        document.getElementById('orange'+i).style.left = parseInt(document.getElementById('orange'+i).style.left) - parseInt(Math.random()*3+1) + "px";
		if (parseInt(document.getElementById('orange'+i).style.left) < -document.getElementById('orange'+i).width) {
                document.getElementById('orange'+i).style.left = largura + 90 + "px"
            };

        document.getElementById('green'+i).style.left = parseInt(document.getElementById('green'+i).style.left) - parseInt(Math.random()*3+1) + "px";
		if (parseInt(document.getElementById('green'+i).style.left) < -document.getElementById('green'+i).width) {
                document.getElementById('green'+i).style.left = largura + 90 + "px"
            };
        }
		}, (60/1000));

	
	document.getElementById('jogo').innerHTML += "<img id='coracao' src ='imagens/iconevida.png'>";
	document.getElementById('coracao').style.height = "5%";
	document.getElementById('coracao').style.position = "absolute";
	document.getElementById('coracao').style.bottom = parseInt(Math.random() * window.innerHeight) + "px";
	document.getElementById('coracao').style.left = parseInt(Math.random() * window.innerWidth) + "px";

	
}
	
function colisao_green() {
	var numMicro = 4;
	for(var i=1; i<=numMicro ;i++) {
		if (parseInt(document.getElementById('personagem').style.left) + parseInt(document.getElementById('personagem').width) > parseInt(document.getElementById('green'+i).style.left) && parseInt(document.getElementById('personagem').style.left) < parseInt(document.getElementById('green'+i).style.left) + parseInt(document.getElementById('green'+i).width)) {
			if (parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height) > parseInt(document.getElementById('green'+i).style.bottom) && parseInt(document.getElementById('personagem').style.bottom) < parseInt(document.getElementById('green'+i).style.bottom) + parseInt(document.getElementById('green'+i).height)) {	
				switch (document.getElementById('green'+i).id) {
					case 'green1':
					document.getElementById('green'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('green'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'green2':
					document.getElementById('green'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('green'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'green3':
					document.getElementById('green'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('green'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'green4':
					document.getElementById('green'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('green'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

				}

				if(document.getElementById('green').src.search('imagens/green_1.png') != -1 ) {
					state_micro = 1;
				}
				
				switch (state_micro) {

					case 6:
					document.getElementById('green').src = "imagens/green_7.png";
					document.getElementById('green').style.width = "30%";
					break;

					case 5:
					document.getElementById('green').src = "imagens/green_6.png";
					document.getElementById('green').style.width = "30%";
					state_micro = 6;
					break;

					case 4:
					document.getElementById('green').src = "imagens/green_5.png";
					document.getElementById('green').style.width = "30%";
					state_micro = 5;
					break;

					case 3:
					document.getElementById('green').src = "imagens/green_4.png";
					document.getElementById('green').style.width = "30%";
					state_micro = 4;
					break;

					case 2:
					document.getElementById('green').src = "imagens/green_3.png";
					document.getElementById('green').style.width = "30%";
					state_micro = 3;
					break;

					case 1:
					document.getElementById('green').src = "imagens/green_2.png";
					document.getElementById('green').style.width = "30%";
					state_micro = 2;
					break;

					}
				}
			}
		}
	}

	function colisao_yellow() {
	var numMicro = 4;
	for(var i=1; i<=numMicro ;i++) {
		if (parseInt(document.getElementById('personagem').style.left) + parseInt(document.getElementById('personagem').width) > parseInt(document.getElementById('yellow'+i).style.left) && parseInt(document.getElementById('personagem').style.left) < parseInt(document.getElementById('yellow'+i).style.left) + parseInt(document.getElementById('yellow'+i).width)) {
			if (parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height) > parseInt(document.getElementById('yellow'+i).style.bottom) && parseInt(document.getElementById('personagem').style.bottom) < parseInt(document.getElementById('yellow'+i).style.bottom) + parseInt(document.getElementById('yellow'+i).height)) {
				switch (document.getElementById('yellow'+i).id) {
					case 'yellow1':
					document.getElementById('yellow'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('yellow'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'yellow2':
					document.getElementById('yellow'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('yellow'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'yellow3':
					document.getElementById('yellow'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('yellow'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'yellow4':
					document.getElementById('yellow'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('yellow'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

				}
				
				if(document.getElementById('yellow').src.search('imagens/yellow_1.png') != -1 ) {
					state_micro = 1;
				}

				switch (state_micro) {

					case 6:
					document.getElementById('yellow').src = "imagens/yellow_7.png";
					document.getElementById('yellow').style.width = "30%";
					break;

					case 5:
					document.getElementById('yellow').src = "imagens/yellow_6.png";
					document.getElementById('yellow').style.width = "30%";
					state_micro = 6;
					break;

					case 4:
					document.getElementById('yellow').src = "imagens/yellow_5.png";
					document.getElementById('yellow').style.width = "30%";
					state_micro = 5;
					break;

					case 3:
					document.getElementById('yellow').src = "imagens/yellow_4.png";
					document.getElementById('yellow').style.width = "30%";
					state_micro = 4;
					break;

					case 2:
					document.getElementById('yellow').src = "imagens/yellow_3.png";
					document.getElementById('yellow').style.width = "30%";
					state_micro = 3;
					break;

					case 1:
					document.getElementById('yellow').src = "imagens/yellow_2.png";
					document.getElementById('yellow').style.width = "30%";
					state_micro = 2;
					break;

					}
				}
			}
		}
	}

	function colisao_orange() {
	var numMicro = 4;
	for(var i=1; i<=numMicro ;i++) {
		if (parseInt(document.getElementById('personagem').style.left) + parseInt(document.getElementById('personagem').width) > parseInt(document.getElementById('orange'+i).style.left) && parseInt(document.getElementById('personagem').style.left) < parseInt(document.getElementById('orange'+i).style.left) + parseInt(document.getElementById('orange'+i).width)) {
			if (parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height) > parseInt(document.getElementById('orange'+i).style.bottom) && parseInt(document.getElementById('personagem').style.bottom) < parseInt(document.getElementById('orange'+i).style.bottom) + parseInt(document.getElementById('orange'+i).height)) {
				switch (document.getElementById('orange'+i).id) {
					case 'orange1':
					document.getElementById('orange'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('orange'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'orange2':
					document.getElementById('orange'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('orange'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'orange3':
					document.getElementById('orange'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('orange'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

					case 'orange4':
					document.getElementById('orange'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('orange'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					break;

				}

				if(document.getElementById('orange').src.search('imagens/orange_1.png') != -1 ) {
					state_micro = 1;
				}

				switch (state_micro) {

					case 6:
					document.getElementById('orange').src = "imagens/orange_7.png";
					document.getElementById('orange').style.width = "30%";
					break;

					case 5:
					document.getElementById('orange').src = "imagens/orange_6.png";
					document.getElementById('orange').style.width = "30%";
					state_micro = 6;
					break;

					case 4:
					document.getElementById('orange').src = "imagens/orange_5.png";
					document.getElementById('orange').style.width = "30%";
					state_micro = 5;
					break;

					case 3:
					document.getElementById('orange').src = "imagens/orange_4.png";
					document.getElementById('orange').style.width = "30%";
					state_micro = 4;
					break;

					case 2:
					document.getElementById('orange').src = "imagens/orange_3.png";
					document.getElementById('orange').style.width = "30%";
					state_micro = 3;
					break;

					case 1:
					document.getElementById('orange').src = "imagens/orange_2.png";
					document.getElementById('orange').style.width = "30%";
					state_micro = 2;
					break;

					}
				}
			}
		}
	}

	function colisao_bomb() {
	
		if(hit) {
		for(var i=1; i<=numPetrols ;i++) {
		if (parseInt(document.getElementById('bomb'+countBomb).style.left) + 50 < parseInt(document.getElementById('petrol'+i).style.left) + parseInt(document.getElementById('petrol'+i).width) && parseInt(document.getElementById('bomb'+countBomb).style.left) + parseInt(document.getElementById('bomb'+countBomb).width) - 50 > parseInt(document.getElementById('petrol'+i).style.left)) {
			if (parseInt(document.getElementById('bomb'+countBomb).style.bottom) + parseInt(document.getElementById('bomb'+countBomb).height) - 20 > parseInt(document.getElementById('petrol'+i).style.bottom) && parseInt(document.getElementById('bomb'+countBomb).style.bottom) + 50 < parseInt(document.getElementById('petrol'+i).style.bottom) + parseInt(document.getElementById('petrol'+i).height)) {	
				document.getElementById('bomb'+countBomb).style.display = "none";
					switch (document.getElementById('petrol'+i).id) {
					case 'petrol1':
					document.getElementById('petrol'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('petrol'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					hit = false;
					timerHit = setTimeout(function() {
						hit = true;
					},2000);
					contagem++;
					document.getElementById('tempo').innerHTML = contagem;
					if(contagem == 8) {
						nextLevel();
					}
					break;

					case 'petrol2':
					document.getElementById('petrol'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('petrol'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					hit = false;
					timerHit = setTimeout(function() {
						hit = true;
					},2000);
					contagem++;
					document.getElementById('tempo').innerHTML = contagem;
					if(contagem == 8) {
						nextLevel();
					}
					break;

					case 'petrol3':
					document.getElementById('petrol'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('petrol'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					hit = false;
					timerHit = setTimeout(function() {
						hit = true;
					},2000);
					contagem++;
					document.getElementById('tempo').innerHTML = contagem;
					if(contagem == 8) {
						nextLevel();
					}
					break;

					case 'petrol4':
					document.getElementById('petrol'+i).style.bottom = (Math.random()*window.innerHeight-30) + "px";
					document.getElementById('petrol'+i).style.left = (Math.random()*window.innerWidth-30) + "px";
					hit = false;
					timerHit = setTimeout(function() {
						hit = true;
					},2000);
					contagem++;
					document.getElementById('tempo').innerHTML = contagem;
					if(contagem == 8) {
						nextLevel();
					}
					break;
					}
				}
			}
		}
	}
}

function freeze() {
	clearInterval(timerPetrols);
	for (var a = 1 ; a <= numPetrols ; a++) {
		document.getElementById('petrol'+a).src = "imagens/oilfluidfreeze.png";
	}
	var timerFreeze = setTimeout ( function() {
		timerPetrols = setInterval(function() {
		for (var i = 1; i <= numPetrols; i++) {
		document.getElementById('petrol'+i).src = "imagens/oilfluid.png";
		document.getElementById('petrol'+i).style.left = parseInt(document.getElementById('petrol'+i).style.left) - parseInt(Math.random()*3+1) + "px";
		if (parseInt(document.getElementById('petrol'+i).style.left) < -document.getElementById('petrol'+i).width) {
                document.getElementById('petrol'+i).style.left = largura + 90 + "px"
            };
        }
		}, (60/1000));
	},4000);

}


function shield() {
	var timerShield = setInterval (function() {
		colision = false;
	}, (1/1000));

	

	var timerColorShield = setInterval(function() {
		var numColor = Math.floor(Math.random()*4+1);

		switch(numColor) {
			case 1:
			document.getElementById('personagem').src = "imagens/personagem_direitablue.png";
			break;

			case 2:
			document.getElementById('personagem').src = "imagens/personagem_direitagreen.png";
			break;

			case 3:
			document.getElementById('personagem').src = "imagens/personagem_direitaorg.png";
			break;

			case 4:
			document.getElementById('personagem').src = "imagens/personagem_direitared.png";
			break;
		}
	},(10));
	
	var shieldDisable = setTimeout (function() {
			clearInterval(timerShield);
			colision = true;
			clearInterval(timerColorShield);
		},3000);
}

function nextLevel() {
	window.location.replace("nivel2.html");
}

function grades() {
	for(var i = 1; i <=3 ; i++) {	
	document.getElementById('jogo').innerHTML += "<img id='gradeaberta"+i+"' src='imagens/gradeaberta.png'>";
	document.getElementById('gradeaberta'+i).style.height = "8%";
	document.getElementById('gradeaberta'+i).style.position = "absolute";
	document.getElementById('gradeaberta'+i).style.bottom = parseInt(Math.random()*window.innerHeight) + "px";
	document.getElementById('gradeaberta'+i).style.left = parseInt(Math.random()*window.innerWidth) + "px";
	}
}

function colisao_grade() {
	
	for(var i=1; i<=3 ;i++) {
		if (parseInt(document.getElementById('personagem').style.left) + parseInt(document.getElementById('personagem').width) > parseInt(document.getElementById('gradeaberta'+i).style.left) && parseInt(document.getElementById('personagem').style.left) < parseInt(document.getElementById('gradeaberta'+i).style.left) + parseInt(document.getElementById('gradeaberta'+i).width)) {
			if (parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height) > parseInt(document.getElementById('gradeaberta'+i).style.bottom) && parseInt(document.getElementById('personagem').style.bottom) < parseInt(document.getElementById('gradeaberta'+i).style.bottom) + parseInt(document.getElementById('gradeaberta'+i).height)) {
				switch (document.getElementById('gradeaberta'+i).id) {
					case 'gradeaberta1':
					document.getElementById('gradeaberta1').src = "imagens/gradefechada.png";
					fadeOutEffect("gradeaberta1");
					count_Grade++;
					for (var i = 1 ; i <= 4 ; i++) {
						document.getElementById('orange'+i).style.display = "block";
					}
					somGrade.play();
					break;

					case 'gradeaberta2':
					document.getElementById('gradeaberta2').src = "imagens/gradefechada.png";
					fadeOutEffect("gradeaberta2");
					count_Grade++;
					for (var i = 1 ; i <= 4 ; i++) {
						document.getElementById('green'+i).style.display = "block";
					}
					somGrade.play();
					break;

					case 'gradeaberta3':
					document.getElementById('gradeaberta3').src = "imagens/gradefechada.png";
					fadeOutEffect("gradeaberta3");
					count_Grade++;
					for (var i = 1 ; i <= 4 ; i++) {
						document.getElementById('yellow'+i).style.display = "block";
					}
					somGrade.play();
					break;

				}			
				}
				}
			}
		}

function colisao_coracao() {
		if (parseInt(document.getElementById('personagem').style.left) + parseInt(document.getElementById('personagem').width) > parseInt(document.getElementById('coracao').style.left) && parseInt(document.getElementById('personagem').style.left) < parseInt(document.getElementById('coracao').style.left) + parseInt(document.getElementById('coracao').width)) {
			if (parseInt(document.getElementById('personagem').style.bottom) + parseInt(document.getElementById('personagem').height) > parseInt(document.getElementById('coracao').style.bottom) && parseInt(document.getElementById('personagem').style.bottom) < parseInt(document.getElementById('coracao').style.bottom) + parseInt(document.getElementById('coracao').height)) {
				switch (document.getElementById('coracao').id) {
					case 'coracao':
					document.getElementById('vidabar').src = "imagens/vidajogador_7.png";
					state = 7;
					document.getElementById('coracao').style.bottom = "-200px";
					var timerCoracao = setTimeout(function() {
					document.getElementById('coracao').style.bottom = parseInt(Math.random() * window.innerHeight) + "px";
					document.getElementById('coracao').style.left = parseInt(Math.random() * window.innerWidth) + "px";
					},8000);
					ganharVida.play();
					break;
				}			
				}
				}
			}
		

function fadeOutEffect(fade) {
    var fadeTarget = document.getElementById(fade);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

function nextLevel() {
	window.location.replace("dialogo2.html");
}






	
	 








