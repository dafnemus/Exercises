import { combineReducers } from 'redux';

import UI from './UI/reducer';
import pokemons from './pokemons/reducer';

export default combineReducers({ 
  UI,
  pokemons,
});
