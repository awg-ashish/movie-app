import React, { createContext, useContext, useReducer } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ initialState, reducer, children }) => {
  return (
    <GlobalStateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStateValue = () => useContext(GlobalStateContext);
