"use client";
import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const value = window?.localStorage?.getItem(key);
    // Check if the local storage already has any values,
    // otherwise initialize it with the passed initialValue
    setState(value ? JSON.parse(value) : initialValue);
  }, [key, initialValue]);

  const [state, setState] = useState(initialValue);

  const setValue = (value: Function | string) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value;
      window?.localStorage?.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
