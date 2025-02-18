import React, { useEffect, useState } from "react";
import { fetchData } from "./Component/Api";


const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getPokemonData = async () => {
      const data = await fetchData();
      setPokemonList(data);
    };

    getPokemonData();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Pokemon </h1>
        <input
          type="text"
          placeholder="Search your Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto block p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-8"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPokemon.map((pokemon, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto"
              />
              <p className="mt-4 text-xl font-semibold capitalize">
                {pokemon.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;