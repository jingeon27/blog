import React from "react";

export const initialState: {
  colorMode: "dark" | "light" | "os";
  sideBar: boolean;
} = {
  colorMode: "os",
  sideBar: false,
};

export type Action =
  | {
      type: "COLOR_MODE";
      colorMode: typeof initialState.colorMode;
    }
  | { type: "SIDE_BAR"; sideBar: boolean };

export const reducer = (state: typeof initialState, action: Action) => {
  const { type, ...change } = action;
  switch (type) {
    case "COLOR_MODE":
      return { ...state, ...change };
    case "SIDE_BAR":
      return { ...state, sideBar: !state.sideBar };
  }
};

export const ValueContext = React.createContext(initialState);
export const ActionContext = React.createContext<React.Dispatch<Action>>(
  () => null
);
export const useMainAction = () => {
  const action = React.useContext(ActionContext);
  if (action === undefined) {
    throw new Error("mainAction error");
  }
  return action;
};

export const useMainValue = () => {
  const value = React.useContext(ValueContext);
  if (value === undefined) {
    throw new Error("mainAction error");
  }
  return value;
};
