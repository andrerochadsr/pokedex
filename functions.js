function pesq(){
    let lista_pokemons = ["bulbassauro"]
    let nome_page = window.document.getElementById('ipesquisa')
    let nome = nome_page.value
    //teste.innerText = `teste ${lista_pokemons.includes(nome)}`
    if (lista_pokemons.includes(nome)) {
        window.location.href = `${nome.trim()}.html`
    } else {
        resp.innerText = 'ERRO'
    }

    //teste.innerText = `nome pagina : ${nome}`
    //
    
}