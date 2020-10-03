objeto = 'X'
pontos_x = 0;
pontos_o = 0;

document.getElementById('jogador_atual').innerHTML = objeto

function resetar() {
	for (var i = 1; i <= 9; i++) {
		document.getElementById(i).innerHTML = '<span class="conteudo"></span>';
	}
	document.getElementById('pontos-o').innerHTML = pontos_o;
	document.getElementById('pontos-x').innerHTML = pontos_x;
}

function verifica() {
	document.getElementById('jogador_atual').innerHTML = objeto
	// X X X
	if (document.getElementById(1).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(2).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(3).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!');
		pontos_x += 1
		resetar()
	} else if (document.getElementById(4).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(6).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!')
		pontos_x += 1;
		resetar()
	} else if (document.getElementById(7).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(8).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(9).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!')
		pontos_x += 1;
		resetar()
		// X
		// X
		// X
	} else if (document.getElementById(1).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(4).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(7).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!')
		pontos_x += 1;
		resetar()
	} else if (document.getElementById(2).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(8).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!')
		pontos_x += 1;
		resetar()
	} else if (document.getElementById(3).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(6).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(9).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!')
		pontos_x += 1;
		resetar()
	} else if (document.getElementById(4).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(6).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!')
		pontos_x += 1;
		resetar()
		// X
		//   X
		//     X
	} else if (document.getElementById(1).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(9).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!')
		pontos_x += 1;
		resetar()
		//     X
		//   X
		// X
	} else if (document.getElementById(3).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">X</span>' && document.getElementById(7).innerHTML == '<span class="conteudo">X</span>') {
		alert('Você GANHOU!')
		pontos_x += 1;
		resetar()
	} else {
		// O O O
		if (document.getElementById(1).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(2).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(3).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
		} else if (document.getElementById(4).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(6).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
		} else if (document.getElementById(7).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(8).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(9).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
			// O
			// O
			// O
		} else if (document.getElementById(1).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(4).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(7).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
		} else if (document.getElementById(2).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(8).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
		} else if (document.getElementById(3).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(6).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(9).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
		} else if (document.getElementById(4).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(6).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
			// X
			//   X
			//     X
		} else if (document.getElementById(1).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(9).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
			//     X
			//   X
			// X
		} else if (document.getElementById(3).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(5).innerHTML == '<span class="conteudo">O</span>' && document.getElementById(7).innerHTML == '<span class="conteudo">O</span>') {
			alert('Você GANHOU!')
			pontos_o += 1;
			resetar()
		}
	}
} 

function insere(id) {	
	if (objeto == 'X') {
		document.getElementById(id).innerHTML = '<span class="conteudo">' + objeto + '</span>';
		objeto = 'O';
		verifica();
	} else {
		document.getElementById(id).innerHTML = '<span class="conteudo">' + objeto + '</span>';
		objeto = 'X';
		verifica();
	}
}
