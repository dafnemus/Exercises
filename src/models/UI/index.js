import * as UIActions from './actionTypes';

export function setLoading(isLoading) {
  return { type: UIActions.SET_LOADING, isLoading };
}
