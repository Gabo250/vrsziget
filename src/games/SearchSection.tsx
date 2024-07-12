import { useState } from "react";
import SearchBar from "./SearchBar";

type searchProps = {
  setText: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>
};

function SearchSection({ setText, tags, setTags }: searchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget;
    const tag = element.dataset.value;

    if (!tags.includes(tag as string)) {
      setTags(prev => [
        ...prev,
        tag as string
      ]);
    }
    else {
        setTags(prev => prev.filter(item => item !== tag as string ));
    }
  }

  return (
    <section className="w-full py-20 flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-[rgba(31,2,68,.4)] from-65% to-[rgba(0,240,255,.3)]">
      <p className="relative text-[2rem] text-h-teal font-extrabold">Játékok</p>
      <SearchBar handleChange={handleChange} handleClick={handleClick} />
    </section>
  );
}

export default SearchSection;
