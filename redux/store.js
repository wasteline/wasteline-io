import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers.js';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(logger)
)(createStore);

const configure = (initialState = {data: []}) => {
  return finalCreateStore(reducer, initialState); 
};
export default configure;