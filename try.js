async function tente() {
    const idNome = document.getElementById('ipesquisa').value
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${idNome}`;
        localStorage.setItem('Poke', idNome)
        window.location.href = `pokemon.html`;
    } catch {
        retorno.innerText = 'ERRO! Nome ou ID incorretos.'
    }
}