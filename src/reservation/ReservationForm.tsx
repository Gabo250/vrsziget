import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  ReservationReducerActionType,
  useReservationInfo,
} from "../context/ReservationProvider";
import {
  BoardReducerActionType,
  useReservationBoardInfo,
} from "../context/ReservationBoardProvider";

type FormFields = {
  email: string;
  name: string;
};

const schema = z.object({
  email: z
    .string()
    .min(1, "Email cím szükséges")
    .max(40, "Túl hosszú email cím")
    .email("Érvényes email címet adjál meg"),
  name: z.string().min(1, "Adj meg egy nevet").max(20, "Túl hosszú név"),
});

function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      name: "",
    },

    resolver: zodResolver(schema),
  });
  const { dispatch } = useReservationInfo();
  const { boardDispatch } = useReservationBoardInfo();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const currentDate = new Date();
    dispatch({
      type: ReservationReducerActionType.EMAIL,
      payload: data.email,
    });

    dispatch({
      type: ReservationReducerActionType.NAME,
      payload: data.name,
    });

    dispatch({
      type: ReservationReducerActionType.BOOKINGDATE,
      payload: `${currentDate.getFullYear()}.${
        currentDate.getMonth() + 1
      }.${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}`,
    });

    boardDispatch({
      type: BoardReducerActionType.RESFORMSUBMITTED,
      payload: true,
    });
  };

  return (
    <form
      className="flex flex-col items-center gap-12 text-white p-16 w-[32rem] text-[1rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <input
          id="email"
          type="text"
          {...register("email", { required: "Email cím szükséges!" })}
          className="w-full bg-slate-700 text-slate-200 rounded-lg !bg-opacity-20 pl-3 pr-10 py-2 outline-none border-0 peer"
        />
        <label
          htmlFor="email"
          className={`absolute text-slate-500 left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:-translate-y-[1.8rem] ${
            dirtyFields.email
              ? "text-teal-400 -translate-y-[1.8rem] text-xs"
              : ""
          }`}
        >
          Email
        </label>
        {errors.email && (
          <p className="absolute text-sm text-red-600 top-12 right-3 italic">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="relative">
        <input
          id="name"
          type="text"
          {...register("name", { required: "Adj meg egy nevet!" })}
          className="w-full bg-slate-700 text-slate-200 !bg-opacity-20 rounded-lg pl-3 pr-10 py-2 peer outline-none border-0"
        />
        <label
          htmlFor="name"
          className={`login-label absolute text-slate-500 left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:-translate-y-[1.8rem] ${
            dirtyFields.name
              ? "text-teal-400 -translate-y-[1.8rem] text-xs"
              : ""
          }`}
        >
          Név
        </label>
        {errors.name && (
          <p className="absolute text-sm text-red-600 top-12 right-3 italic">
            {errors.name.message}
          </p>
        )}
      </div>

      <input
        type="submit"
        value="Foglalás"
        className="w-24 p-3 transition-all rounded-lg duration-300 bg-slate-700 text-slate-200 bg-opacity-40 cursor-pointer hover:scale-105 hover:shadow-[0px_0px_30px_1px_rgb(17_94_89)]"
      />
    </form>
  );
}

export default ReservationForm;
