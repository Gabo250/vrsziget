import { createContext, ReactNode, useContext, useReducer } from "react";

export type reservationType = {
  id: number,
  conf: {
    id: string,
    status: string,
    confirmationCode: string,
    cancellationCode: string
  },
  name: string,
  gType: string,
  member: number,
  date: string,
  bookDate: string,
  email: string
} | undefined

export type ProviderReducerState = {
  name: string;
  date: string;
  bookingDate: string;
  time: string;
  email: string;
  gtype: string;
  member: number;
  reservations: reservationType[];
};

const reservationContext = createContext<{
  state: ProviderReducerState,
  dispatch: React.Dispatch<ReducerAction>
}>({
  state: { name: "", date: "", bookingDate: "", time: "", email: "", gtype: "", member: 0, reservations: [] },
  dispatch: () => null,
});

export const useReservationInfo = () => {
    return useContext(reservationContext);
};

export const enum ReservationReducerActionType {
  NAME,
  DATE,
  BOOKINGDATE,
  TIME,
  EMAIL,
  GTYPE,
  MEMBER,
  RESERVATIONS
}

export type ReducerAction = {
  type: ReservationReducerActionType;
  payload?: string | number | reservationType[];
};

function reducer(
  state: ProviderReducerState,
  action: ReducerAction
): ProviderReducerState {
  switch (action.type) {
    case ReservationReducerActionType.DATE:
      return { ...state, date: action.payload as string };
    case ReservationReducerActionType.EMAIL:
      return { ...state, email: action.payload as string };
    case ReservationReducerActionType.TIME:
      return { ...state, time: action.payload as string };
    case ReservationReducerActionType.MEMBER:
      return { ...state, member: action.payload as number };
    case ReservationReducerActionType.GTYPE:
      return { ...state, gtype: action.payload as string };
    case ReservationReducerActionType.RESERVATIONS:
      return { ...state, reservations: action.payload as reservationType[] };
    case ReservationReducerActionType.NAME:
      return { ...state, name: action.payload as string };
    case ReservationReducerActionType.BOOKINGDATE:
      return { ...state, bookingDate: action.payload as string };
    default:
      return state;
  }
}

type contextValue = {
  children?: ReactNode;
};

function ReservationProvider({ children }: contextValue) {
  const datee = new Date();
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    date: `${datee.getFullYear()}.${datee.getMonth() + 1}.${datee.getDate()}`,
    bookingDate: "",
    time: "",
    email: "",
    gtype: "",
    member: 1,
    reservations: []
  });

  return (
    <reservationContext.Provider value={{ state, dispatch }}>
      {children}
    </reservationContext.Provider>
  );
}

export default ReservationProvider;