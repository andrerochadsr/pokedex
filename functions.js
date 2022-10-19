async function search(){
    const listaPokesJuntos = sessionStorage.getItem('listaPokemons')
    console.log(listaPokesJuntos)
    const listaPokes = listaPokesJuntos.split(',')
    const nome = window.document.getElementById('ipesquisa').value;
    if (listaPokes.includes(nome) || (nome >= 1 && nome <= 898)) {
        localStorage.setItem('pokemon', `"${nome}"`)
        window.location.href = `pokemon.html`;
    } else {
        retorno.innerText = 'ERRO! Nome ou número incorreto.';
    };
}
