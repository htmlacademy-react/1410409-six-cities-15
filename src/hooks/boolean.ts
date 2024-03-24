import {useState} from 'react';

export function useBoolean(initialState = false) {
  const [isOn, setIsOn] = useState(initialState);

  return {
    isOn,
    off: () => setIsOn(false),
    on: () => setIsOn(true),
    toggle: () => setIsOn((prev) => !prev),
  };
}
