function search(){
    const listaPokesJuntos = sessionStorage.getItem('listaPokemons')
    const listaPokes = listaPokesJuntos.split(',')
    const valor = window.document.getElementById('ipesquisa').value.trim();
    if (listaPokes.includes(valor)) {
        
        localStorage.setItem('pokemon', `"${valor}"`);
        window.location.href = `pokemon.html`;
        
    } else if (valor >= 1 && valor <= 898) {
        
        localStorage.setItem('pokemon', `"${valor}"`);
        window.location.href = `pokemon.html`;
    } else {
    retorno.innerText = 'ERRO! Nome ou ID incorretos.'
    }
}
