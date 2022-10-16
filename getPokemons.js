async function getPoke() {
    //extrai o nome do pokemon baseado na url
    const urlPoke = window.location.pathname;
    console.log("urlPoke", urlPoke) //1 /pokedex/bulbasaur.html
    const arrayPoke = urlPoke.split('/');
    console.log("arrayPoke", arrayPoke) //2 ['', 'pokedex', 'bulbasaur.html']
    const htmlPoke = arrayPoke[2];
    console.log("htmlPoke", htmlPoke) //3 bulbasaur.html
    const splitNomePoke = htmlPoke.split('.');
    console.log("splitNomePoke", splitNomePoke) //4 ['bulbasaur', 'html']
    const nomePoke = splitNomePoke[0];
    console.log("nomePoke", nomePoke) //5 undefined
    // extrai o nome do pokemon baseado na url
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePoke}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon)
    document.getElementById('nome-pokemon').innerHTML = pokemon['name']
    document.getElementById('numero').innerHTML += pokemon['id'];
    document.getElementById('hp').innerHTML += pokemon['stats'][0]['base_stat'];
    document.getElementById('atk').innerHTML += pokemon['stats'][1]['base_stat'];
    document.getElementById('def').innerHTML += pokemon['stats'][2]['base_stat'];
    document.getElementById('spl-atk').innerHTML += pokemon['stats'][3]['base_stat'];
    document.getElementById('spl-def').innerHTML += pokemon['stats'][4]['base_stat'];
    document.getElementById('spd').innerHTML += pokemon['stats'][5]['base_stat'];

    document.getElementById('total').innerHTML += ((pokemon['stats'][0]['base_stat']) + (pokemon['stats'][1]['base_stat']) + (pokemon['stats'][2]['base_stat']) + (pokemon['stats'][3]['base_stat']) + (pokemon['stats'][4]['base_stat']) + (pokemon['stats'][5]['base_stat'])) // soma todos os pontos de atributos
}
getPoke();