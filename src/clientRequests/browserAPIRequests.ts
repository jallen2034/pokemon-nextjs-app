// This function makes an API call from our client/browser to our NextJS API route to fetch another pokemon
import { Pokemon } from "@/types/pokemonAPIDataTypes";
import { enqueueSnackbar } from "notistack";

const handleAddPokemon = async (newPokemonToAdd: string): Promise<Pokemon> => {
  try {
    // Add your logic here
    const response: Response = await fetch(`/api/hello?newPokemon=${newPokemonToAdd}`);

    if (!response.ok) throw new Error('Network response was not ok');

    return await response.json();
  } catch (e: any) {
    enqueueSnackbar('Something went wrong adding that pokemon!')
    throw(e);
  }
};

export { handleAddPokemon }
