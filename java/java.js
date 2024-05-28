

var sorteioJog;
var numTent;
var numerosEscolhidos = []; // Array para armazenar os números já escolhidos

function sortearNumero() {
    sorteioJog = Math.floor(Math.random() * 10 + 1);
    numTent = 2;
    numerosEscolhidos = []; // Limpa o array de números escolhidos
}

function verificarNumero() {
    var numeroDigi = parseInt(document.getElementById("numeroDigi").value);
    var btnVerificar = document.querySelector("button[onclick='verificarNumero()']");
    var inputNumeroDigi = document.getElementById("numeroDigi");

    if (isNaN(numeroDigi) || numeroDigi < 0 || numeroDigi > 10) {
        document.getElementById("resultado").textContent = "Digite um número inteiro entre 0 e 10.";
    } else {
        // Verifica se o número já foi escolhido
        if (numerosEscolhidos.includes(numeroDigi)) {
            document.getElementById("resultado").textContent = "Você já escolheu esse número. Tente outro.";
        } else {
            numerosEscolhidos.push(numeroDigi); // Adiciona o número ao array
            if (numeroDigi === sorteioJog) {
                document.getElementById("resultado").textContent = "Parabéns! Você acertou.";
                btnVerificar.disabled = true;
                document.getElementById("btnJogarNovamente").disabled = false;
                inputNumeroDigi.disabled = true;
            } else {
                if (numeroDigi < sorteioJog) {
                    document.getElementById("resultado").textContent = "Tente novamente. O número sorteado é maior.";
                } else {
                    document.getElementById("resultado").textContent = "Tente novamente. O número sorteado é menor.";
                }
                numTent--;
                if (numTent === 0) {
                    document.getElementById("resultado").textContent = "Suas tentativas acabaram. O número sorteado era " + sorteioJog + ".";
                    btnVerificar.disabled = true;
                    document.getElementById("btnJogarNovamente").disabled = false;
                    inputNumeroDigi.disabled = true;
                }
            }
        }
    }
}

function jogarNovamente() {
    sortearNumero();
    document.getElementById("resultado").textContent = "";
    document.querySelector("button[onclick='verificarNumero()']").disabled = false;
    document.getElementById("btnJogarNovamente").disabled = true;
    document.getElementById("numeroDigi").value = "";
    document.getElementById("numeroDigi").disabled = false;
}

// Sorteia um número ao carregar a página
sortearNumero();

 // Verifica o número quando o usuário pressionar Enter
 document.getElementById("numeroDigi").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        verificarNumero();
        if (numTent > 0) {
            document.getElementById("numeroDigi").value = ""; // Limpa o campo de entrada
        }
    }
});