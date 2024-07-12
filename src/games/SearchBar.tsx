import Input from "../component/Input";
import TagButton from "../component/TagButton";

type barProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const tags = ["szabaduló szoba", "multiplayer", "singleplayer", "katvr"];

function SearchBar({ handleChange, handleClick }: barProps) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="relative w-[20rem]">
        <Input
          name="search"
          type="text"
          onChange={handleChange}
          variant="dark"
          className="w-full !bg-opacity-40 pl-3 pr-10 opacity-80 py-2 rounded-md border-0 outline-none bg-slate-700 text-slate-200 peer"
        />
        <label
          htmlFor="search"
          className="absolute text-slate-500 left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:-translate-y-[1.8rem]"
        >
          Keresés
        </label>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {tags.map((tag, id) => {
          return <TagButton key={tag + id} clickHandle={handleClick} text={tag} />;
        })}
      </div>
    </div>
  );
}

export default SearchBar;
