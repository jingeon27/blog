import { BaseSyntheticEvent, useEffect, useRef } from "react";

export const useOutsideClick = <T extends Element>(callback: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: BaseSyntheticEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback, ref]);

  return ref;
};
