import { useEffect, useState } from "react";
import useDateBar from "../hooks/useDateBar";
import useFetch from "../hooks/useFetch";
import Card from "../component/Card";
import { LeftArrow, RightArrow } from "../utility/Icon";
import {
  ReservationReducerActionType,
  reservationType,
  useReservationInfo,
} from "../context/ReservationProvider";
import { BoardReducerActionType, useReservationBoardInfo } from "../context/ReservationBoardProvider";

type propsType = {
  handleParentClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const daysOfWeek: { [key: number]: string } = {
  0: "vas",
  1: "hét",
  2: "kedd",
  3: "sze",
  4: "Csü",
  5: "pén",
  6: "szo",
};

const dayInMs = 1000 * 60 * 60 * 24;
const currentDate = new Date();

function DateBar({ handleParentClick }: propsType) {
  const { dispatch } = useReservationInfo();
  const { boardState, boardDispatch } = useReservationBoardInfo(); 
  const [date, setDate] = useState<Date>(new Date());
  const dates = useDateBar(7, date);
  const [data, isLoading] = useFetch(
    "reservation/getbetweendate",
    "POST",
    dates[0]?.day != undefined,
    dates,
    {
      start: `${dates[0]?.year}.${dates[0]?.month}.${dates[0]?.dayOfMonth} 00:00`,
      end: `${dates[6]?.year}.${dates[6]?.month}.${dates[6]?.dayOfMonth} 23:59`,
    }
  );

  useEffect(() => {
    if (data.status === "OK") {
      dispatch({
        type: ReservationReducerActionType.RESERVATIONS,
        payload: data.message as reservationType[],
      });
    }

    if (!isLoading && data.status === "OK") {
      boardDispatch({
        type: BoardReducerActionType.FETCHED,
        payload: true,
      });
    } else {
      boardDispatch({
        type: BoardReducerActionType.FETCHED,
        payload: false,
      });
    }
  }, [isLoading]);

  useEffect(() => {
    if (dates.length !== 0) {
      dispatch({
        type: ReservationReducerActionType.DATE,
        payload: `${dates[boardState.clickedDate].year}.${dates[boardState.clickedDate].month}.${dates[boardState.clickedDate].dayOfMonth}`,
      });
    }
  }, [dates]);

  useEffect(() => {
    boardDispatch({
      type: BoardReducerActionType.DAYOFWEEK,
      payload: currentDate.getDay()
    })
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const clickedElement = e.currentTarget;
    const dir = clickedElement.dataset.direction;

    if (dir === "right") {
      setDate((prev) => new Date(prev.getTime() + dayInMs * 7));
    } else if (
      currentDate.getMonth() + 1 !== Number(dates[0].month) ||
      currentDate.getDate() !== Number(dates[0].dayOfMonth)
    ) {
      setDate((prev) => new Date(prev.getTime() - dayInMs * 7));
    }
  };

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    handleParentClick(e);
    const clickedElement = e.currentTarget;
    const date = clickedElement.dataset.date;

    dispatch({
      type: ReservationReducerActionType.DATE,
      payload: date,
    });
  };

  return (
    <section className="relative flex justify-center">
      <div className="relative flex justify-center d:w-[80%]">
        {dates.map((date, id) => {
          return (
            <Card
              variant="light"
              effect="glass"
              onClick={handleCardClick}
              key={date.day + id}
              data-date={`${date.year}.${date.month}.${date.dayOfMonth}`}
              data-weekday={date.day}
              data-id={id}
              className={`flex flex-col gap-2 cursor-pointer py-5 px-10 rounded-lg items-center uppercase bg-opacity-100 ${
                id === boardState.clickedDate ? " bg-purple-600 bg-opacity-30" : "bg-black"
              } border-y-[1px] shadow-inner shadow-white xl:px-5 xlmd:px-3 lmd:!px-1 xlsm:!py-1 d:!w-[70%]`}
            >
              <p className="text-white w-full flex justify-center text-wrap d:text-[.7rem] xsm:text-[.6rem] xxlsm:!text-[.4rem] [text-shadow:0px_1px_2px_#ffffff]">{`${date.year}.${date.month}.${date.dayOfMonth}`}</p>
              <p className="px-3 py-7 bg-gradient-to-b from-purple-700 shadow-inner shadow-purple-400 flex to-hd-purple justify-center rounded-lg text-teal-400 md:w-full [text-shadow:0px_1px_2px_#2dd4bf] md:px-0 xlsm:py-4">
                {daysOfWeek[date.day]}
              </p>
            </Card>
          );
        })}

        <div
          className="absolute cursor-pointer rounded-full backdrop-blur-md -left-10 top-1/2 -translate-y-1/2 xlsm:-left-8"
          onClick={handleClick}
          data-direction="left"
        >
          <LeftArrow />
        </div>
        <div
          className="absolute cursor-pointer rounded-full backdrop-blur-md -right-10 top-1/2 -translate-y-1/2 xlsm:-right-8"
          onClick={handleClick}
          data-direction="right"
        >
          <RightArrow />
        </div>
      </div>
    </section>
  );
}

export default DateBar;