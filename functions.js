async function search(){
    const listaPokesJuntos = sessionStorage.getItem('listaPokemons')
    const listaPokes = listaPokesJuntos.split(',')
    const valor = window.document.getElementById('ipesquisa').value;
    if (valor >= 1 && valor <= 898) {
        const id = parseInt(valor);
        localStorage.setItem('pokemon', `"${id}"`)
        window.location.href = `pokemon.html`;
    } else {
        if (listaPokes.includes(valor)) {
            const nome = valor
            localStorage.setItem('pokemon', `"${nome}"`)
            window.location.href = `pokemon.html`;
    } else {
        retorno.innerText = 'ERRO! Nome ou número incorreto.';
    }
    }
}
