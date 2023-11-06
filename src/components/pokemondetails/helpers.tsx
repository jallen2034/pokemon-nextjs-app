import React, {Dispatch} from "react";
import { DisplayPokemonState, Pokemon } from "@/types/pokemonAPIDataTypes";

const updatePokemonDataFromApi = (
  setPokemonClientState: Dispatch<React.SetStateAction<DisplayPokemonState>>,
  newPokemonData: Pokemon
): void => {
  setPokemonClientState((prevState:  DisplayPokemonState) => ({
    ...prevState,
    data: [...prevState.data, newPokemonData],
    loading: false
  }));
};

const loadInitialPokemonData = (
  setPokemonClientState: Dispatch<React.SetStateAction<DisplayPokemonState>>,
  initialPokemonData: Pokemon
): void => {
  setPokemonClientState((prevState: DisplayPokemonState) => (
    { ...prevState, data: [initialPokemonData], loading: false }
  ))
}

const triggerLoadingSpinner = (
  setPokemonClientState: Dispatch<React.SetStateAction<DisplayPokemonState>>,
): void => {
  setPokemonClientState((prevState: DisplayPokemonState) => ({
    ...prevState,
    loading: true
  }))
}

export { updatePokemonDataFromApi, loadInitialPokemonData, triggerLoadingSpinner }
