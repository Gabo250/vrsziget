import { createContext, ReactNode, useContext, useReducer } from "react";

type contextProps = {
  children: ReactNode;
};

export type BoardProviderReducerState = {
  dayOfWeek: number;
  clickedDate: number;
  timeClicked: boolean;
  emptyPlace: number;
  resFetched: boolean;
  exit: boolean;
  resFormSubmitted: boolean;
};

export const enum BoardReducerActionType {
  DAYOFWEEK,
  CLICKEDDATE,
  TIMECLICKED,
  EMPTY,
  FETCHED,
  EXIT,
  RESFORMSUBMITTED,
}

export type ReducerAction = {
  type: BoardReducerActionType;
  payload?: string | number | boolean;
};

function reducer(
  state: BoardProviderReducerState,
  action: ReducerAction
): BoardProviderReducerState {
  switch (action.type) {
    case BoardReducerActionType.DAYOFWEEK:
      return { ...state, dayOfWeek: action.payload as number };
    case BoardReducerActionType.CLICKEDDATE:
      return { ...state, clickedDate: action.payload as number };
    case BoardReducerActionType.TIMECLICKED:
      return { ...state, timeClicked: action.payload as boolean };
    case BoardReducerActionType.EMPTY:
      return { ...state, emptyPlace: action.payload as number };
    case BoardReducerActionType.FETCHED:
      return { ...state, resFetched: action.payload as boolean };
    case BoardReducerActionType.EXIT:
      return { ...state, exit: action.payload as boolean };
    case BoardReducerActionType.RESFORMSUBMITTED:
      return { ...state, resFormSubmitted: action.payload as boolean };
    default:
      return state;
  }
}

const ReservationBoardContext = createContext<{
  boardState: BoardProviderReducerState;
  boardDispatch: React.Dispatch<ReducerAction>;
}>({
  boardState: {
    dayOfWeek: 0,
    clickedDate: 0,
    timeClicked: false,
    emptyPlace: 0,
    exit: true,
    resFetched: false,
    resFormSubmitted: false,
  },

  boardDispatch: () => null
});

export const useReservationBoardInfo = () => {
  return useContext(ReservationBoardContext);
};

function ReservationBoardProvider({ children }: contextProps) {
  const [boardState, boardDispatch] = useReducer(reducer, {
    dayOfWeek: 0,
    clickedDate: 0,
    timeClicked: false,
    emptyPlace: 0,
    exit: true,
    resFetched: false,
    resFormSubmitted: false,
  });

  return (
    <ReservationBoardContext.Provider value={{ boardState, boardDispatch }}>
      {children}
    </ReservationBoardContext.Provider>
  );
}

export default ReservationBoardProvider;