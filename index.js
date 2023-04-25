const items = document.getElementById('root');
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        var length = data.results.length;
        namePokemon = () => {
            var randomNum = Math.floor(Math.random() * length);
            document.getElementById('root').innerHTML = data.results[randomNum].name + "<br>";
        }
        document.getElementById('btn').addEventListener("click", namePokemon);






 });