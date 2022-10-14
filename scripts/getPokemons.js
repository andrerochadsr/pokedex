async function getPoke() {
    const url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
    const response = await fetch(url);
    const pokemon = await response.json();
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
