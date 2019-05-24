var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var c
var acento = ["ã", "á", "à", "â", "é", "è", "ê", "í", "î", "ì", "ó", "ô", "ò", "õ", "ú", "ù", "û", "ç"]
var sAcento = ["a", "a", "a", "a", "e", "e", "e", "i", "i", "i", "o", "o", "o", "o", "u", "u", "u", "c"]

function capturarElemento(ref) {
    const elemento = document.querySelector(ref);
    return elemento;
}

const criptografar = capturarElemento('form');
criptografar.addEventListener('submit', function (event) {
    console.log(criptografar)
    verificarChave();
    event.preventDefault();
}, false)

function verificarChave() {
    let chave = capturarElemento('.chave');
    c = chave.value
    if (c > 26 || c <= 0) {
        alert("Chave Inválida - Informe uma chave entre 1 e 26");
        inner.HTML();
    } else {
        retirarAcento()
    }
}

function retirarAcento() {
    let aux = "", a = "";
    let texto = capturarElemento('.texto').value.toLowerCase();
    console.log(texto);

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != " ") {
            for (let j = 0; j < acento.length; j++) {
                if (acento[j] == texto[i]) {
                    aux += sAcento[j]
                } else {
                    a = texto[i]
                }
            }
            aux += a
        } else if (texto[i] == " ") {
            aux += " "
        }
    }
    console.log(aux);
    criptografarTexto(aux);
}

function criptografarTexto(aux) {
    let ch = parseInt(c);
    console.log(ch);
    let res = "", resultado = "";
    console.log(aux)
    console.log(aux.length)
    for (let i = 0; i < aux.length; i++) {
        if (aux[i] != " ") {
            for (let j = 0; j < alfabeto.length; j++) {
                if (aux[i] == alfabeto[j]) {
                    let pos = ((j + ch) % 26);
                    console.log(pos);
                    res = alfabeto[pos];
                    resultado += res;
                }
            }
        } else {
            res = " ";
            resultado += res;
        }
    }
    console.log(resultado);
    
    mostrarnaTela(resultado);
}

function mostrarnaTela(resultado) {
    let p = document.createElement('p')
    let conteudo = document.createTextNode(resultado)
    p.appendChild(conteudo)
    p.className = ('textCript')
    capturarElemento('.res').appendChild(p)
}