import type { NextApiRequest, NextApiResponse } from 'next'
import { Pokemon } from "@/types/pokemonAPIDataTypes";
import { fetchPokemonData } from "@/apiRequests/pageLoadRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon | { error: string }>
) {
  try {
    const { newPokemon } = req.query;

    // Guard clause to check the user entered a valid pokemon
    if (!newPokemon) {
      return res.status(500).json({ error: 'You must enter a valid pokemon!' });
    }

    const pokemonData: Pokemon | null = await fetchPokemonData(newPokemon);

    if (pokemonData) {
      return res.status(200).json(pokemonData);
    }
    res.status(404).json({ error: 'Pokemon not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Pokemon data' });
  }
}
