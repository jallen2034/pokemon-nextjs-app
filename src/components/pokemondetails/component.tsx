'use client'
import { useState, useEffect, ChangeEvent, useCallback } from "react";
import { DisplayPokemonState, Pokemon } from "@/types/pokemonAPIDataTypes";
import { PokemonDetailsProps, UpdatePokemonFunction } from "@/components/pokemondetails/types";
import { SnackbarProvider } from "notistack";
import { handleAddPokemon } from "@/clientRequests/browserAPIRequests";
import {
  loadInitialPokemonData,
  triggerLoadingSpinner,
  updatePokemonDataFromApi
} from "@/components/pokemondetails/helpers";
import "./pokemon-details.css";

// This is a client component
export const PokemonDetails = ({ initialPokemonData }: PokemonDetailsProps): JSX.Element => {

  // Component state
  const [pokemonClientState, setPokemonClientState] = useState<DisplayPokemonState>({
    data: [],
    inputValue: "",
    loading: true
  });

  // Destructure relevant data from our component state
  const { data, inputValue, loading } = pokemonClientState;

  // Handle loading the users initial Pokémon fetched from the server to put in our client state
  useEffect(() => {
    loadInitialPokemonData(setPokemonClientState, initialPokemonData);
  }, [initialPokemonData]);

  const handleUpdatePokemon: UpdatePokemonFunction = useCallback(async (inputValue: string): Promise<void> => {
    triggerLoadingSpinner(setPokemonClientState);
    const newPokemonData: Pokemon = await handleAddPokemon(inputValue);
    if (!newPokemonData) return;
    updatePokemonDataFromApi(setPokemonClientState, newPokemonData);
  }, []);

  return (
    <SnackbarProvider>
      <div>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div>
            {data.map(({ name, id, types }: Pokemon, index: number) => (
              <div key={index} className="pokemon-card">
                <p>Name: {name}</p>
                <p>ID: {id}</p>
                <p>Types:</p>
                <ul className="pokemon-types">
                  {types.map(({ type: { name } }, index: number) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <div className="input-button-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPokemonClientState(
              (prevState: DisplayPokemonState) => ({ ...prevState, inputValue: e.target.value })
            )}
            placeholder="Enter Pokemon Name"
          />
          <button onClick={() => handleUpdatePokemon(inputValue)}>
            Add Pokemon
          </button>
        </div>
      </div>
    </SnackbarProvider>
  );
};
