type propType = {
  burgNavClicked: boolean;
  setBurgNavClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * It creates a burger nav 'X' icon
 *
 * @param burgNavClicked A boolean state from the parent
 * @param setBurgClicked A state from the parent to set the state
 *
 * @returns burger 'X' element
 */
function BurgerNav({ burgNavClicked, setBurgNavClicked }: propType) {
  const handleClick = () => {
    setBurgNavClicked((prev) => !prev);
  };

  return (
    <>
      <label className="fixed right-[5%] top-[2%] -translate-y-[2%] z-[60] hidden h-10 w-10 cursor-pointer select-none md:block">
        <button
          aria-label="Burger menu"
          onClick={handleClick}
          className="absolute h-0 w-0 cursor-pointer opacity-0"
        />

        <div className="relative top-1/2 z-[60] flex -translate-y-[50%] flex-col items-center justify-center gap-y-2">
          <span
            className={`relative h-[2.5px] w-8 bg-gradient-to-r from-hd-purple from-[45%] to-teal-500  shadow-[0px_0px_5px_0px_rgba(0,0,0,.7)] transition-transform duration-500
              ${
                burgNavClicked
                  ? "translate-y-[calc(.5rem+2.5px)] rotate-[405deg]"
                  : ""
              }`}
          />
          <span
            className={`relative ml-2 h-[2.5px] w-6  bg-gradient-to-r from-hd-purple from-[45%] to-teal-500 shadow-[0px_0px_5px_0px_rgba(0,0,0,.7)] transition-transform duration-500
              ${burgNavClicked ? "-translate-x-[.22rem] rotate-[405deg]" : ""}`}
          />
          <span
            className={`relative h-[2.5px] w-8 bg-gradient-to-r from-hd-purple from-[45%] to-teal-500 shadow-[0px_0px_5px_0px_rgba(0,0,0,.7)] transition-transform duration-500
              ${
                burgNavClicked
                  ? "-translate-y-[calc(.5rem+2.5px)] -rotate-[405deg]"
                  : ""
              }`}
          />
        </div>
      </label>
    </>
  );
}

export default BurgerNav;