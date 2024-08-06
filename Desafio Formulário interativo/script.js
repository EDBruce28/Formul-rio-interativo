function alternativa(opcao) {
    if (opcao === 'criarSites') {
        document.getElementById('pergunta').innerText = 'Você prefere trabalhar com:'
        document.getElementById('opcoes').innerHTML = `<input type="button" value="Design e aparência visual?" class="botao" onclick="exibirResultado('Design Gráfico, UX/UI')"><br><br>
            <input type="button" value="Programação e desenvolvimento?" class="botao" onclick="exibirResultado('Desenvolvimento Web, Programação')"><br>`
    } else if (opcao === 'consertar') {
        document.getElementById('pergunta').innerText = 'Você prefere:'
        document.getElementById('opcoes').innerHTML =`<input type="button" value="Entender como as redes funcionam?" class="botao" onclick="exibirResultado('Redes de Computadores')"><br><br>
        <input type="button" value="Resolver problemas técnicos?" class="botao" onclick="exibirResultado('Suporte Técnico')"><br>`
    } else if (opcao === 'design') {
        document.getElementById('pergunta').innerText = 'Você prefere:'
        document.getElementById('opcoes').innerHTML = `<input type="button" value="Criar artes visuais e gráficos?" class="botao" onclick="exibirResultado('Design Gráfico')"><br><br>
            <input type="button" value="Desenvolver interfaces e experiências de usuário?" class="botao" onclick="exibirResultado('UX/UI')"><br>`
    } else if (opcao === 'analisarDados') {
        document.getElementById('pergunta').innerText = 'Você prefere:'
        document.getElementById('opcoes').innerHTML = `<input type="button" value="Explorar dados para encontrar padrões?" class="botao" onclick="exibirResultado('Ciência de Dados')"><br><br>
            <input type="button" value="Analisar informações para tomar decisões de negócio?" class="botao" onclick="exibirResultado('Análise de Negócios')"><br>`
    }
}

function exibirResultado(resultado) {
    document.getElementById('pergunta').innerText = `Se essas foram as suas escolhas, o caminho indicado seria: ${resultado}.`;
    document.getElementById('opcoes').innerHTML = `<p>Boa sorte com seus estudos!</p>`;
}
