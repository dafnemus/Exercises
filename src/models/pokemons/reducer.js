import produce from 'immer';

import * as pokemonActions from './actionTypes';

const initialState = {
  pokemons: [],
};

export default produce((draft, action) => {
  switch (action.type) {}
}, initialState);
