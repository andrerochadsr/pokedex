const pokemon = localStorage.getItem('pokemon');
console.log(pokemon)
const nomeAspas = pokemon.split('"');
const nomePoke = nomeAspas[1];
console.log(nomePoke)
async function getPoke(nome) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePoke}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon)
    document.getElementById('head').innerHTML += `<link rel="icon" type="image/png" href=${pokemon['sprites']['front_default']}>`
    document.getElementById('title').innerHTML = pokemon['name'].toUpperCase();
    document.querySelector('#img-poke').innerHTML += `<img src="${pokemon['sprites']['front_default']}" class="img-poke">`;
    document.getElementById('numero').innerHTML += pokemon['id'];
    document.getElementById('nome-pokemon').innerHTML = pokemon['name']
    const array = pokemon['types']
    for (let i = 0; i < array.length; i++) {
        document.getElementById('tipo').innerHTML += ` ${pokemon['types'][i]['type']['name']}`
    }
    document.getElementById('hp').innerHTML += pokemon['stats'][0]['base_stat'];
    document.getElementById('xp').innerHTML += pokemon['base_experience']
    document.getElementById('peso').innerHTML += `${(pokemon['weight'])/10} quilos`
    document.getElementById('altura').innerHTML += `${pokemon['height']/10} metros`
    document.getElementById('atk').innerHTML += pokemon['stats'][1]['base_stat'];
    document.getElementById('def').innerHTML += pokemon['stats'][2]['base_stat'];
    document.getElementById('spl-atk').innerHTML += pokemon['stats'][3]['base_stat'];
    document.getElementById('spl-def').innerHTML += pokemon['stats'][4]['base_stat'];
    document.getElementById('spd').innerHTML += pokemon['stats'][5]['base_stat'];
    document.getElementById('total').innerHTML += ((pokemon['stats'][0]['base_stat']) + (pokemon['stats'][1]['base_stat']) + (pokemon['stats'][2]['base_stat']) + (pokemon['stats'][3]['base_stat']) + (pokemon['stats'][4]['base_stat']) + (pokemon['stats'][5]['base_stat'])) // soma todos os pontos de atributos
}
getPoke(nomePoke);
