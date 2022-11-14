async function lista() {
    const listaPokemons = [];
    for (let i = 1 ; i <= 898; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(url);
        const pokemon = await response.json();
        listaPokemons.push(pokemon['name']);
    }
    localStorage.setItem('listaPokemons', listaPokemons);
}