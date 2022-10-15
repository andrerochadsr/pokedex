function search(){
    window.alert('oi');
    let lista_pokemons = ["bulbasaur", "squirtle", "charmander"];
    let nome_page = window.document.getElementById('ipesquisa');
    let nome = nome_page.value;
    //teste.innerText = `teste ${lista_pokemons.includes(nome)}`
    if (lista_pokemons.includes(nome)) {
        window.location.href = `../pages-pokes/${nome.trim()}.html`
    } else {
        resp.innerText = 'ERRO'
    };
}