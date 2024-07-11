import DateBar from "./DateBar";
import TimeTable from "./TimeTable";
import BookInformations from "./BookInformations";
import LoadingSpinner from "../component/LoadingSpinner";
import { BoardReducerActionType, useReservationBoardInfo } from "../context/ReservationBoardProvider";

function BookTable() {  
  const { boardState, boardDispatch } = useReservationBoardInfo();

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    const clickedElement = e.currentTarget;
    const weekDay = Number(clickedElement.dataset.weekday);
    const id = Number(clickedElement.dataset.id);

    boardDispatch({
      type: BoardReducerActionType.DAYOFWEEK,
      payload: weekDay,
    });
    boardDispatch({
      type: BoardReducerActionType.CLICKEDDATE,
      payload: id,
    });
  };

  const handleTimeClick = (e: React.MouseEvent<HTMLElement>) => {
    const clickedElement = e.currentTarget;
    const emptyPlace = Number(clickedElement.dataset.emptyplace);

    if (emptyPlace > 0) {
      boardDispatch({
        type: BoardReducerActionType.TIMECLICKED,
        payload: true,
      });
    }

    boardDispatch({
      type: BoardReducerActionType.EMPTY,
      payload: emptyPlace,
    });
  };

  return (
    <div className="py-20 bg-gradient-to-b from-black from-50% to-[#0F0417]">
      <DateBar
        handleParentClick={handleCardClick}
      />
      {boardState.resFetched ? (
        <TimeTable handleParClick={handleTimeClick} />
      ) : <div className=" flex justify-center items-center py-52"><LoadingSpinner className="w-10 h-10" /> </div>}
      {boardState.timeClicked ? (
        <BookInformations />
      ) : null}
    </div>
  );
}

export default BookTable;