import {useMemo} from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;

function initStore(initialState?: AppState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}

export const initializeStore = preloadedState => {
  let store = initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState) {
    store = initStore({
      ...preloadedState,
    });
  }

  return store;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
