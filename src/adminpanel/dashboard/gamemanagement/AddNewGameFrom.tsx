import { useForm } from "react-hook-form";
import Input from "../../../component/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormFields = {
  name: string;
  title: string;
  desc: string;
};

const schema = z.object({
  name: z.string().min(1, "Name is required").max(40, "Too long name"),
  title: z.string().min(1, "Title is required").max(100, "Too long title"),
  desc: z.string().min(1, "Description is required"),
});

function AddNewGameForm() {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      title: "",
      desc: "",
    },

    resolver: zodResolver(schema),
  });

  return (
    <section className="relative p-3 bg-opacity-20 backdrop-blur-[7px] bg-slate-700 rounded-xl shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[21rem] z-10 xsm:w-full">
      <form className="flex flex-col gap-5">
        <div className="relative w-4/5 rounded-md border-b-2">
          <Input
            id="name"
            type="text"
            variant="dark"
            {...register("name")}
            className="w-full !bg-opacity-40 pl-3 pr-10 opacity-80 py-2 rounded-md border-0 outline-none bg-slate-700 text-slate-200 peer"
          />
          <label
            htmlFor="name"
            className={`absolute text-slate-500 left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:-translate-y-[1.8rem] ${
              dirtyFields.name
                ? "text-teal-400 -translate-y-[1.8rem] text-xs"
                : ""
            }`}
          >
            Name
          </label>
        </div>

        <div className="relative w-4/5 rounded-md border-b-2">
          <Input
            id="title"
            type="text"
            variant="dark"
            {...register("title")}
            className="w-full !bg-opacity-40 pl-3 pr-10 opacity-80 py-2 rounded-md border-0 outline-none bg-slate-700 text-slate-200 peer"
          />
          <label
            htmlFor="title"
            className={`absolute text-slate-500 left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:-translate-y-[1.8rem] ${
              dirtyFields.title
                ? "text-teal-400 -translate-y-[1.8rem] text-xs"
                : ""
            }`}
          >
            Title
          </label>
        </div>

        <div>
          <textarea id="desc" cols={40} rows={10} {...register("desc")} />
          <label
            htmlFor="desc"
            className={`absolute text-slate-500 left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:-translate-y-[1.8rem] ${
              dirtyFields.desc
                ? "text-teal-400 -translate-y-[1.8rem] text-xs"
                : ""
            }`}
          >
            Description
          </label>
        </div>
      </form>
    </section>
  );
}

export default AddNewGameForm;
