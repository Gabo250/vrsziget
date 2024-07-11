import {
  reservationType,
  useReservationInfo,
} from "../context/ReservationProvider";

type gameTypeProps = {
  time: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  date: string;
};

const dbgTypeName: { [key: string]: string } = {
  "VR Játékok": "basic",
  "Katvr": "katvr",
  "Szimulátor": "simulator"
}

function memberNum(type: string, time: string, actDate: string, arr: reservationType[]) {
  let sum = 0;
  const reducedRes = arr.filter((res) => res?.conf.status === "confirmed");
  const cTime = time.split(' - ')[0]
  
  for (let i = 0; i < reducedRes.length; i++) {
    const datesplit = reducedRes[i]?.date.split(' ');
    const date = (datesplit as string[])[0];
    const resTime = (datesplit as string[])[1]
    
    if (reducedRes[i]?.gType === type && resTime === cTime && date === actDate) {
      sum += reducedRes[i]?.member as number;
    }
  }

  return sum;
}

const bgImage = (name: string, place: number) => {
  switch (name) {
    case "VR Játékok":
      if (place > 0) {
        return "bg-vr-res bg-cover bg-center";
      } else {
        return "bg-gradient-to-t from-purple-500 via-purple-900 to-d-purple";
      }
    case "Katvr":
      if (place > 0) {
        return "bg-katvr bg-cover bg-center";
      } else {
        return "bg-gradient-to-t from-purple-500 via-purple-900 to-d-purple";
      }
    case "Szimulátor":
      if (place > 0) {
        return "bg-simulator bg-cover bg-center";
      } else {
        return "bg-gradient-to-t from-purple-500 via-purple-900 to-d-purple";
      }
  }
};

function GameType({ time, handleClick, date }: gameTypeProps) {
  const { state } = useReservationInfo();

  const gtypes = [
    {
      name: "VR Játékok",
      actEmptyPlace:
        4 -
        memberNum("escape", time, date, state.reservations) -
        memberNum("basic", time, date, state.reservations),
    },

    {
      name: "Katvr",
      actEmptyPlace: 2 - memberNum("katvr", time, date, state.reservations),
    },

    {
      name: "Szimulátor",
      actEmptyPlace: 2 - memberNum("simulator", time, date, state.reservations),
    },
  ];

  return gtypes.map((type) => {
    return (
      <div
        key={type.name}
        data-time={time}
        data-emptyplace={type.actEmptyPlace}
        data-type={dbgTypeName[type.name]}
        onClick={handleClick}
        className={`relative flex flex-col items-center h-20 justify-center px-14 py-14 gap-3 border-[1px]  border-white ${bgImage(
          type.name,
          type.actEmptyPlace
        )} ${
          type.actEmptyPlace > 0
            ? "cursor-pointer before:content-['foglalás'] before:flex before:justify-center before:items-center before:absolute before:transition-all before:duration-500 before:w-full before:h-full before:bg-teal-600 before:bg-opacity-40 before:backdrop-blur-sm before:font-semibold before:uppercase before:text-[.75rem] before:text-center before:scale-y-0 before:origin-bottom hover:before:scale-y-100"
            : ""
        } sm:px-3 xlsm:h-26`}
      >
        <p className="[text-shadow:0px_1px_2px_#ffffff] uppercase font-semibold text-center text-[.8rem] xlsm:text-wrap">
          {type.name}
        </p>
        <p className="[text-shadow:0px_1px_2px_#ffffff] font-semibold text-[.7rem]">
          {type.actEmptyPlace > 0 ? type.actEmptyPlace + " hely" : "BETELT"}
        </p>
      </div>
    );
  });
}

export default GameType;