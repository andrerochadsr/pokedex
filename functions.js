async function search(){
    let lista_pokemons = [];
    for (let i = 1; i<=150; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await response.json()
        lista_pokemons.push(pokemon['name'])
    }
    let nome_page = window.document.getElementById('ipesquisa');
    let nome = nome_page.value;
    if (lista_pokemons.includes(nome)) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        const pokemon = await response.json()
        localStorage.setItem('pokemon', JSON.stringify(pokemon['name']))
        //console.log(pokemon)
        window.location.href = `pokemon.html`;
    } else {
        retorno.innerText = 'ERRO! Nome incorreto.';
        console.log('erro')
    };
}