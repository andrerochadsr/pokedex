function page_poke(poke) {
    const pokemon = poke
    localStorage.setItem('Poke', `${pokemon}`);
    window.location.href = `pokemon.html`;
}