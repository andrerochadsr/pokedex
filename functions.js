async function search(){
    const listaPokesJuntos = sessionStorage.getItem('listaPokemons')
    const listaNumPokes = sessionStorage.getItem('listaNumPokes')
    const listaPokes = listaPokesJuntos.split(',')
    const nome = window.document.getElementById('ipesquisa').value;
    if (listaPokes.includes(nome) || listaNumPokes.includes(nome)) {
        localStorage.setItem('pokemon', `"${nome}"`)
        window.location.href = `pokemon.html`;
    } else {
        retorno.innerText = 'ERRO! Nome incorreto.';
    };
}
