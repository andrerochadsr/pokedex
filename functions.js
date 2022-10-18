async function search(){
    const listaPokesJuntos = sessionStorage.getItem('listaPokemons')
    const listaPokes = listaPokesJuntos.split(',')
    const nome = window.document.getElementById('ipesquisa').value;
    if (listaPokes.includes(nome)) {
        localStorage.setItem('pokemon', `"${nome}"`)
        console.log(nome)
        window.location.href = `pokemon.html`;
    } else {
        retorno.innerText = 'ERRO! Nome incorreto.';
    };
}
