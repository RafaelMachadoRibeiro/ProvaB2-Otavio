document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        adicionarTabela();
    });

    document.getElementById('limpar').addEventListener('click', limparTabela);
});

function adicionarTabela() {
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('1nota').value);
    const nota2 = parseFloat(document.getElementById('2nota').value);

    if (!nome || !matricula) {
        alert('Preencha todos os campos antes de enviar');
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert('As notas devem estar entre 0 e 10');
        return;
    }

    const media = calcularMedia(nota1, nota2);
    const situacaoAluno = situacao(media);

    const tabela = document.getElementById('saida').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).appendChild(document.createTextNode(nome));
    novaLinha.insertCell(1).appendChild(document.createTextNode(matricula));
    novaLinha.insertCell(2).appendChild(document.createTextNode(nota1.toFixed(2)));
    novaLinha.insertCell(3).appendChild(document.createTextNode(nota2.toFixed(2)));
    novaLinha.insertCell(4).appendChild(document.createTextNode(media.toFixed(2)));
    novaLinha.insertCell(5).appendChild(document.createTextNode(situacaoAluno));

    document.querySelector('form').reset();
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function situacao(media) {
    return media > 5 ? 'Aprovado' : 'Reprovado';
}

function limparTabela() {
    const tabela = document.getElementById('saida').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';
}
