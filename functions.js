function search(){
    const listaPokesJuntos = localStorage.getItem('listaPokemons')
    const listaPokes = listaPokesJuntos.split(',')
    const valor = window.document.getElementById('ipesquisa').value.trim().toLowerCase();
    if (valor >= 1 && valor <= 898 || listaPokes.includes(valor)) {
        localStorage.setItem('pokemon', `"${valor}"`);
        window.location.href = `pokemon.html`;
        
    }
    else {
    retorno.innerText = 'ERRO! Nome ou ID incorretos.'
    }
}
