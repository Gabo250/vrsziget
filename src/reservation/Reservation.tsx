import ReservationBoardProvider from "../context/ReservationBoardProvider";
import ReservationProvider from "../context/ReservationProvider";
import Connection from "../home/Connection";
import BookTable from "./BookBoard";

function Reservation() {
  return (
    <ReservationProvider>
      <section className="h-[25rem] w-full bg-island bg-cover bg-center"></section>
      <ReservationBoardProvider>
        <BookTable />
      </ReservationBoardProvider>
      <Connection className="!top-0" />
    </ReservationProvider>
  );
}

export default Reservation;
