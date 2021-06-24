import { composeWithDevTools } from 'redux-devtools-extension';

export default function reduxDevTools(...args) {
  if (args.length === 0) return undefined;
  
  return composeWithDevTools(args[0]);
}
