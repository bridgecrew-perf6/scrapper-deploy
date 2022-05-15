import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
  Reducer,
  Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { createWrapper, MakeStore, HYDRATE } from "next-redux-wrapper";

import { auth } from "store/auth/reducers";
import { show } from "store/show/reducers";
import { tasks } from "store/tasks/reducers";
import { teams } from "store/teams/reducers";

export interface AppState {
  counter: CounterState;
}

const combinedReducers = combineReducers({
  auth,
  show,
  tasks,
  teams,
});

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    /* client state will be overwritten
     * by server or static state hydation.
     * Implement state preservation as needed.
     * see: https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
     */
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducers(state, action);
};

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<Store<AppState>> = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export const storeWrapper = createWrapper<Store<AppState>>(initStore);
