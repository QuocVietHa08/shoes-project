import React, { createContext, useContext, useReducer } from 'react';
// prepare the data layout
export const StateContext = createContext();

//this is the state provider that render the children with the reducer and inititalState,
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// export the useStateValue
export const useStateValue = () => useContext(StateContext);
