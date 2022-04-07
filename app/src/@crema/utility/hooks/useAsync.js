import React from 'react';

export const useAsync = function_ => {
  const initialState = {loading: false, error: null, value: null};
  const stateReducer = (_, action) => {
    switch (action.type) {
      case 'start':
        return {loading: true, error: null, value: null};
      case 'finish':
        return {loading: false, error: null, value: action.value};
      case 'error':
        return {loading: false, error: action.error, value: null};
    }
  };

  const [state, dispatch] = React.useReducer(stateReducer, initialState);

  const run = async (arguments_ = null) => {
    try {
      dispatch({type: 'start'});
      const value = await function_(arguments_);
      dispatch({type: 'finish', value});
    } catch (error) {
      dispatch({type: 'error', error});
    }
  };

  return {...state, run};
};
