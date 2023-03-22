import {createStore,compose} from 'redux'
import reducer from './reducer';
// 为了使用 redux-devtools。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers());

export default store;