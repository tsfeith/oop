function Pessoa(nomeCompleto, corFavorita) {
    this.nome = nomeCompleto,
    this.corFav = corFavorita,
    this.saudacao = function() {
        alert('Bom dia ' + this.nome + '! A tua cor favorita é ' + this.corFav.toLowerCase() + '? A sério!? A minha também!');
    }
}

var nomeUtilizador = String(prompt('Qual é o seu nome completo?'));
var corUtilizador = String(prompt('Qual é a sua cor favorita?'));

var utilizador = new Pessoa(nomeUtilizador, corUtilizador);
utilizador.saudacao();