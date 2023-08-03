import { Dispatch, createContext, useContext, useReducer } from "react";

const initialState: {
  colorMode: "dark" | "light" | "os";
} = {
  colorMode: "os",
};

type Action = { type: "COLOR_MODE"; colorMode: typeof initialState.colorMode };

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "COLOR_MODE":
      return { ...state, colorMode: action.colorMode };
  }
};

const ValueContext = createContext(initialState);
const ActionContext = createContext<Dispatch<Action>>(() => null);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <ActionContext.Provider value={dispatch}>
        <ValueContext.Provider value={state}>{children}</ValueContext.Provider>
      </ActionContext.Provider>
    </>
  );
};

export const useMainAction = () => {
  const action = useContext(ActionContext);
  if (action === undefined) {
    throw new Error("mainAction error");
  }
  return action;
};

export const useMainValue = () => {
  const value = useContext(ValueContext);
  if (value === undefined) {
    throw new Error("mainAction error");
  }
  return value;
};
