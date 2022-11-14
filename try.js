async function tente() {
    const idNome = document.getElementById('ipesquisa').value
    console.log(idNome)
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${idNome}`;
        const response = await fetch(url);
        const pokemon = await response.json();
        console.log(pokemon)
        localStorage.setItem('Poke', idNome)
        window.location.href = `pokemon.html`;
    } catch {
        retorno.innerText = 'ERRO! Nome ou ID incorretos.'
    }
}