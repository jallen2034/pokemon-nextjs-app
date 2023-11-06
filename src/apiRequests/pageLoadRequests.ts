import {Pokemon} from "@/types/pokemonAPIDataTypes";

const fetchPokemonData = async (pokemonName: string | string[]): Promise<Pokemon | null> => {
  try {
    const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return null;
  }
};

export { fetchPokemonData }
