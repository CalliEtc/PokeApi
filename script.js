// fetch(' https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(response => response.json())
//   .then(data =>  {console.log(data)}
//   .catch(error => console.error('Une erreur s\'est produite : ', error));

// const pokemonSprit = data.sprites.front_default;
// const imgPokemonShow = document.getElementById("imgPokemon");

// imgPokemonShow.src = pokemonSprit;



async function fetchPokemon() {
    try {
      const pokemonName = document
        .getElementById("pokemonName")
        .value.toLowerCase();
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      
      const response = await fetch(url);
  
      if (!response.ok) {
        console.error("Failed to fetch Pokémon:", response.status);
        return;
      }
  
      const data = await response.json();
  
      console.log(data);
      const pokemonSprite = data.sprites.front_default;

      
      let imgPokemonShow = document.getElementById("imgPokemon");
      let tiltePokemonShow = document.getElementById("tiltePokemon");
      const tiltePokemon = data.name;

      console.log(tiltePokemon);
  
      tiltePokemonShow = tiltePokemon;
      imgPokemonShow.src = pokemonSprite;
      imgPokemonShow.style.display = "block";
    } catch (error) {
      console.error(error);
    }
    
  }
