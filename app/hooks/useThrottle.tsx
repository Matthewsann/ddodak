import _ from "lodash";
import { useCallback, useEffect, useRef } from "react";

export function useDebounce(cb: Function, delay: number) {
  const options = {
    leading: false,
    trailing: true,
  };
  const inputsRef = useRef({ cb, delay }); // mutable ref like with useThrottle
  useEffect(() => {
    inputsRef.current = { cb, delay };
  }); //also track cur. delay
  return useCallback(
    _.debounce(
      (...args) => {
        if (inputsRef.current.delay === delay) inputsRef.current.cb(...args);
      },
      delay,
      options
    ),
    [delay, _.debounce]
  );
}
