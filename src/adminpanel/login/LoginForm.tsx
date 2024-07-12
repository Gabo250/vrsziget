import { SubmitHandler, useForm } from "react-hook-form";
import LoadingSpinner from "../../component/LoadingSpinner";
import useFetch from "../../hooks/useFetch";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type FormFields = {
  email: string;
  password: string;
};

const schema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .max(40, "Too long email")
      .email("Invalid email"),
    password: z.string().min(1, "Password is required").max(20, "Too long password"),
  });

function LoginForm() {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(schema)
  });
  const [_, isLoading] = useFetch("", "POST", false, false, {});

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    data
  };

  return (
    <form
      className="relative mt-10 flex flex-col items-center gap-9"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`relative w-4/5 rounded-md border-b-2 ${
          errors.email ? "animate-error-animation" : "animate-color-change"
        }`}
      >
        <input
          id="email"
          aria-label="email text field"
          type="text"
          className="w-full !bg-opacity-40 pl-3 pr-10 opacity-80 py-2 rounded-md border-0 outline-none bg-slate-700 text-slate-200 peer"
          {...register("email", {
            required: "Email is required",
          })}
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
        <img
          src="../images/email.png"
          alt="email image"
          className="absolute right-2 top-1/2 -translate-y-1/2 scale-[65%]"
        />
        {errors.email && (
          <p className="absolute text-sm text-red-600 top-12 right-3 italic">
            {errors.email.message}
          </p>
        )}
      </div>

      <div
        className={`relative w-4/5 rounded-md border-b-2 ${
          errors.password ? "animate-error-animation" : "animate-color-change"
        }`}
      >
        <input
          id="password"
          aria-label="password text field"
          type="password"
          className="w-full !bg-opacity-40 pl-3 pr-10 py-2 rounded-md border-0 outline-none opacity-80 bg-slate-700 text-slate-200 peer"
          {...register("password", {
            required: "Password is required",
          })}
        />
        <label
          htmlFor="password"
          className={`absolute text-slate-500 left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:-translate-y-[1.8rem] ${
            dirtyFields.password
              ? "text-teal-400 -translate-y-[1.8rem] text-xs"
              : ""
          }`}
        >
          Password
        </label>
        <img
          src="../images/pass.png"
          alt="lock image"
          className="absolute right-2 top-1/2 -translate-y-1/2 scale-[65%]"
        />
        {errors.password && (
          <p className="absolute text-sm text-red-600 top-12 right-3 italic">
            {errors.password.message}
          </p>
        )}
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <input
          type="submit"
          aria-label="submit button"
          value="Belépés"
          className="w-40 transition-all py-2 rounded-md border-0 outline-none bg-slate-700 text-slate-200 duration-300 bg-opacity-40 cursor-pointer hover:scale-105 hover:shadow-[0px_0px_30px_1px_rgb(17_94_89)]"
        />
      )}
    </form>
  );
}

export default LoginForm;
