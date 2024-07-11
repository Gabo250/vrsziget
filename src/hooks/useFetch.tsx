import { useEffect, useState } from "react";

const user = import.meta.env.VITE_REACT_APP_API_USER;
const pass = import.meta.env.VITE_REACT_APP_API_PASS;
const baseUrl = import.meta.env.VITE_API_URL;
const bas = btoa(`${user}:${pass}`);

function useFetch(
  url: string,
  method: string,
  fetchAble: boolean,
  refetch: any,
  body?: object,
) {
  const [data, setData] = useState<object>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (fetchAble) {
      const fetching = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(`${baseUrl}${url}`, {
            method: method,
            headers: new Headers({
              Authorization: `basic ${bas}`,
              "Content-Type": "application/json",
            }),
            body: JSON.stringify(body),
          });

          const res = await response.json();          
          setData(res);
          setIsLoading(false);
        } catch (err: any) {
          setIsLoading(false);
          setError(err);
        }
      };

      fetching();
    }
  }, [refetch]);

  return [data, isLoading, error];
}

export default useFetch;