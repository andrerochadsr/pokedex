function search(){
    const listaPokesJuntos = sessionStorage.getItem('listaPokemons')
    const listaPokes = listaPokesJuntos.split(',')
    const valor = window.document.getElementById('ipesquisa').value.trim();
    if (listaPokes.includes(valor)) {
        alert('Nome')
        localStorage.setItem('pokemon', `"${valor}"`);
        window.location.href = `pokemon.html`;
        
    } else if (valor >= 1 && valor <= 898) {
        alert('Numero')
        localStorage.setItem('pokemon', `"${valor}"`);
        window.location.href = `pokemon.html`;
    } else {
        alert('ERRO! Nome ou ID incorretos.')
    }
}
