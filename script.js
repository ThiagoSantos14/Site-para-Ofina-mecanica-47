//Evento click para o botão serviço

const btnServico = document.querySelector('.btn-servico');
const tituloServicos = document.querySelector('.titulo-servicos');
const tabelaPreco = document.querySelector('.tabela-preco');
const containerSobre = document.querySelector('.container-sobre');
const btnSobre = document.querySelector('.btn-sobre');
const btnContato = document.querySelector('.btn-contato');
const containerContato = document.querySelector('.container-contato');
const rodape = document.querySelector('.footer');

btnServico.addEventListener('click', function(event){
    event.preventDefault();

    tituloServicos.classList = 'display-titulo-servico';
    tabelaPreco.classList = 'display-tabela';
    containerSobre.classList = 'display-sobre-off';
    containerSobre.classList = 'display-titulo-sobre';
    containerContato.classList = 'display-contato-off';
    rodape.classList = 'display-footer-servico';
});

//Evento click para o botão sobre
btnSobre.addEventListener('click', function(event){
    event.preventDefault();

    containerSobre.classList = 'display-sobre-on';
    tabelaPreco.classList = 'display-servico';
    containerContato.classList = 'container-contato';
    rodape.classList = 'display-footer-sobre';
});

//Evento click para o botão contato
btnContato.addEventListener('click', function(event){
    event.preventDefault();

    containerContato.classList = 'display-contato';
    containerContato.classList = 'display-contato-on';
    tabelaPreco.classList = 'display-servico';
    containerSobre.classList = 'display-sobre-off';
    containerSobre.classList = 'display-titulo-sobre';
    rodape.classList = 'display-footer-contato';
});

