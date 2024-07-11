import { useReservationBoardInfo } from "../context/ReservationBoardProvider";
import { ReservationReducerActionType, useReservationInfo } from "../context/ReservationProvider";
import GameType from "./GameType";

type propsType = {    
    handleParClick: (e: React.MouseEvent<HTMLElement>) => void
}

const time = (day: number) => {
    const times: string[] = [];
    if (day > 0 && day < 6) {
        for (let i = 0; i < 5; i++) {
            times.push(`${15 + i}:00 - ${16 + i}:00`);
        }
    }
    else {
        if (day === 6){
            for (let i = 0; i < 12; i++) {
                times.push(`${10 + i}:00 - ${11 + i}:00`);
            }
        }
        else {
            for (let i = 0; i < 10; i++) {
                times.push(`${10 + i}:00 - ${11 + i}:00`);
            }
        }
    }

    return times;
}

function TimeTable({ handleParClick }: propsType) {
    const { state, dispatch } = useReservationInfo();
    const { boardState } = useReservationBoardInfo();
    const times = time(boardState.dayOfWeek);    
    
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        handleParClick(e);
        const clickedElement = e.currentTarget;
        const time = clickedElement.dataset.time?.slice(0, 5);
        const gtype = clickedElement.dataset.type;

        dispatch({
            type: ReservationReducerActionType.TIME,
            payload: time
        });

        dispatch({
            type: ReservationReducerActionType.GTYPE,
            payload: gtype
        })
    }

    return (
        <section className="relative flex flex-col justify-center items-center gap-0 py-5">
            {
                times.map((time) => {
                    return (
                        <div key={time} className="relative overflow-hidden flex justify-center text-white px-5 lg:w-full">
                            
                            <div className="flex justify-center items-center border-[1px] p-2 bg-black border-white shadow-inner shadow-white">
                                <span className="text-h-teal font-semibold text-center">{time}</span>
                            </div>
                            <div className="flex items-center justify-center">
                               <GameType time={time} handleClick={handleClick} date={state.date} />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}

export default TimeTable;