import { createContext, useContext, useReducer } from 'react';
import { parseCookies } from 'nookies';

//! DEFINE CTX

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const cookies = parseCookies();

//! INITIAL STATE

const initialState = {
  currentTheme: cookies.theme == null ? 'light' : cookies.theme,
  cursorType: false,
  cursorStyles: ['pointer', 'hovered']
};

//! REDUCER

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme
      };
    }
    case 'CURSOR_TYPE': {
      return {
        ...state,
        cursorType: action.cursorType
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//! PROVIDER

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//!  CUSTOM HOOKS FOR GLOBAL STATE USE

export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
