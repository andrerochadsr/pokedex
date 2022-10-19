function page_poke(pokemon) {
    localStorage.setItem('pokemon', `"${pokemon}"`);
    window.location.href = `pokemon.html`;
}