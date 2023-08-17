"use client";

import {
  reducer,
  ActionContext,
  ValueContext,
  initialState,
} from "@/hooks/useMainContext";
import { useReducer } from "react";

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
