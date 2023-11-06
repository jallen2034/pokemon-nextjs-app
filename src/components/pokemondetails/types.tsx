import { Pokemon } from "@/types/pokemonAPIDataTypes";

export type PokemonDetailsProps = { initialPokemonData: Pokemon }

export type UpdatePokemonFunction = (inputValue: string) => Promise<void>;

