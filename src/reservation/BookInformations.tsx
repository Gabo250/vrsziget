import { useState } from "react";
import { prices } from "../utility/Data";
import MemberChooseCard from "./MemberChooseCard";
import ReservationForm from "./ReservationForm";
import { Xmark } from "../utility/Icon";
import {
  ReservationReducerActionType,
  useReservationInfo,
} from "../context/ReservationProvider";
import {
  BoardReducerActionType,
  useReservationBoardInfo,
} from "../context/ReservationBoardProvider";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../component/LoadingSpinner";

function BookInformations() {
  const [cardClicked, setCardClicked] = useState<number>(0);
  const { state, dispatch } = useReservationInfo();
  const { boardState, boardDispatch } = useReservationBoardInfo();
  const [ _, isLoading ] = useFetch("reservation/save", "POST", boardState.resFormSubmitted, boardState.resFormSubmitted, {
    name: state.name,
    email: state.email,
    gType: state.gtype,
    member: state.member,
    date: `${state.date} ${state.time}`,
    bookDate: state.bookingDate
  });

  console.log(isLoading);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const clickedElement = e.currentTarget;
    const elementId = Number(clickedElement.dataset.id);
    const player = Number(clickedElement.dataset.player);

    if (state.member !== player) {
      dispatch({
        type: ReservationReducerActionType.MEMBER,
        payload: player,
      });
    }

    setCardClicked(elementId);
  };

  const handleXclick = () => {
    boardDispatch({
      type: BoardReducerActionType.RESFORMSUBMITTED,
      payload: false
    })

    boardDispatch({
      type: BoardReducerActionType.TIMECLICKED,
      payload: false,
    });
  };

  return (
    <section
      className={`fixed top-1/2 left-1/2 p-20 -translate-x-1/2 overflow-y-scroll -translate-y-1/2 z-[100] bg-black bg-opacity-90 backdrop-blur-sm w-full h-full xsm:p-10 xlsm:!px-0`}
    >
      {!boardState.resFormSubmitted && (
        <div>
          <div className="text-white flex flex-col py-10 gap-6">
            <div className="flex gap-6 items-center">
              <span className="w-10 h-10 flex text-[1.25rem] justify-center items-center rounded-full border-[1px] border-h-teal">
                1
              </span>
              <p>Játékosszám Kiválasztása</p>
            </div>
            <div className="flex gap-6 py-14 justify-center lg:flex-col lg:items-center lg:gap-32">
              {prices
                .filter((type) => {
                  return type.title === state.gtype;
                })[0]
                .price.map((price, id) => {
                  if (price.player <= boardState.emptyPlace) {
                    return (
                      <MemberChooseCard
                        key={id + Math.random()}
                        price={price.uPrice}
                        oPrice={price.oPrice}
                        time={price.time}
                        player={id + 1}
                        id={id}
                        clicked={cardClicked === id}
                        handleCLick={handleClick}
                      />
                    );
                  }

                  return null;
                })}
            </div>
          </div>
          <div className="text-white flex flex-col py-10 gap-6">
            <div className="flex items-center gap-6">
              <span className="w-10 h-10 flex text-[1.25rem] justify-center items-center rounded-full border-[1px] border-h-teal">
                2
              </span>
              <p>Szükséges Adatok megadása</p>
            </div>
            <div className="flex justify-center">
              <ReservationForm />
            </div>
          </div>
        </div>
      )}

      {boardState.resFormSubmitted && !isLoading && (
        <div className="flex flex-col gap-6 text-white">
          <div className="flex gap-6 items-center">
            <span className="w-10 h-10 flex text-[1.25rem] justify-center items-center rounded-full border-[1px] border-h-teal">
              3
            </span>
            <p>Foglalás megerősítése</p>
          </div>
          <p>Emailben küldtük a foglalás megerősítéséhez szükséges információt.</p>
        </div>
      )}

      {
        boardState.resFormSubmitted && isLoading && (
          <LoadingSpinner className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        )
      }

      <div onClick={handleXclick} className="cursor-pointer">
        <Xmark className="fixed right-5 top-5 size-8 z-[100]" />
      </div>
    </section>
  );
}

export default BookInformations;
