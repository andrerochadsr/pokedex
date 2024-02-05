async function tente() {
    const idNome = document.getElementById('ipesquisa').value
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idNome}`)
    if (response['ok'] === true) {
        localStorage.setItem('Poke', idNome);
        window.location.href = `pokemon.html`;
    } else {
        retorno.innerText = 'ERRO! Nome ou ID incorretos.'
    }

}