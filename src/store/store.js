import { createStore, combineReducers } from 'redux';
import identityReducer from '../reducers/IdentityReducer';
import taskReducer from '../reducers/TaskReducer';

const rootReducer = combineReducers({
  identityReducer,
  taskReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
