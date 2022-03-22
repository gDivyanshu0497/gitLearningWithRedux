import {createStore,applyMiddleware} from 'redux';
import root_reducer_1 from '../reducer/root_reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// import ice_reducer from '../reducer/iceCreamReducer';


const store = createStore(root_reducer_1,composeWithDevTools(applyMiddleware(logger)))

export default store;