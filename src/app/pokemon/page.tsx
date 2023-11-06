import { PokemonDetails } from "@/components/pokemondetails/component";
import { fetchPokemonData } from "@/apiRequests/pageLoadRequests";
import { Pokemon } from "@/types/pokemonAPIDataTypes";

export default async function Pokemon(): Promise<JSX.Element> {
  // Initiate getting the Pokémon data from the API to render in our component
  const pokemonDataInComponent: Pokemon | null = await fetchPokemonData('pikachu');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <main>
        {pokemonDataInComponent &&
          <PokemonDetails initialPokemonData={pokemonDataInComponent}/>
        }
      </main>
    </div>
  );
}
