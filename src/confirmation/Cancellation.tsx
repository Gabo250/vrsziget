import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../component/LoadingSpinner";

function Cancellation() {
  const url = useLocation().pathname.split("/");
  const [data, isLoading] = useFetch(
    `confirmation/cancel`,
    "POST",
    true,
    url[2],
    {
      cancellationCode: url[2],
      status: "cancelled",
    }
  );

  if (!isLoading) {
    return (
      <section className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-d-purple via-black to-d-purple">
        {data.status === "OK" ? (
          <h1 className="text-white text-[1.5rem]">
            Sikeresen lemondtad a foglalásod!
          </h1>
        ) : (
          <h1 className="text-white text-[1.5rem]">{data.message}</h1>
        )}
      </section>
    );
  } else {
    return (
      <section className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-d-purple via-black to-d-purple">
        <LoadingSpinner />
      </section>
    );
  }
}

export default Cancellation;
