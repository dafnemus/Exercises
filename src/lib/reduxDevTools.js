import { compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function reduxDevTools(...args) {
  if (args.length === 0) return undefined;
  if (process.env.MODE === 'development')
    return composeWithDevTools(args[0]);
  if (typeof args[0] === 'object') return compose;
  return compose(...args);
}
