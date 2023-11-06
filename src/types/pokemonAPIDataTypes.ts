export type Pokemon = {
  name: string;
  id: number;
  types: {
    type: {
      name: string;
    };
  }[];
};

export type DisplayPokemonState = {
  data: Pokemon[],
  inputValue: string,
  loading: boolean
}
