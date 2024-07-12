import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number = 500) {
  const [debounceV, setDebounceV] = useState<T>(value);

  useEffect(() => {
    const tout = setTimeout(() => {
        setDebounceV(value);
    }, delay);

    return () => clearTimeout(tout);
  }, [value]);

  return debounceV;
}

export default useDebounce;
