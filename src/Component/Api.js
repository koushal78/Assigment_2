import axios from "axios";


export const fetchData = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
    const results = response.data.results; 
    const pokemonData = await Promise.all(
      results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url)
        return {
          name: pokemon.name, 
          image: details.data.sprites.front_default, 
        };
      })
    )

    
    return pokemonData
  } catch (error) {
  
    console.error("Error in data fecthing:", error)
    return []
  }
};

export default fetchData