import ReservationBoardProvider from "../context/ReservationBoardProvider";
import ReservationProvider from "../context/ReservationProvider";
import Connection from "../home/Connection";
import BookTable from "./BookBoard";

function Reservation() {
  return (
    <ReservationProvider>
      <section className="flex justify-center items-end h-[15rem] w-full bg-gradient-to-b from-c-teal to-black">
        <div className="flex gap-6 items-center text-white">
          <span className="w-10 h-10 flex text-[1.25rem] justify-center items-center rounded-full border-[1px] border-h-teal">
            1
          </span>
          <p>Válaszd ki mikorra szeretnél foglalni, és milyen platformon szeretnél játszani.</p>
        </div>
      </section>
      <ReservationBoardProvider>
        <BookTable />
      </ReservationBoardProvider>
      <Connection className="!top-0" />
    </ReservationProvider>
  );
}

export default Reservation;
