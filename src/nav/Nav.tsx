import { Link } from "react-router-dom";
import BurgerNav from "./BurgerNav";
import { useState } from "react";
import useScroll from "../hooks/useScroll";

const menu_list = [
  {
    name: "kezdőlap",
    href: "/",
  },

  {
    name: "játékok",
    href: "/jatekok",
  },

  {
    name: "árak",
    href: "/arak",
  },

  {
    name: "foglalás",
    href: "/foglalas",
  },
];

function Nav() {
  const [burgClicked, setBurgClicked] = useState<boolean>(false);
  const scrollY = useScroll(10);

  const linkClickHandle = () => {
    if(burgClicked) {
      setBurgClicked(false);
    }
  }

  return (
    <div className={`absolute top-0 left-0 w-full h-28 z-20 flex justify-around items-center bg-gradient-to-r from-[27%] from-black to-[rgba(20,4,40,0)]  rounded-bl-[9.4rem] transition-[height] duration-300 backdrop-blur-[5px] ${ scrollY > 0 ? "!h-20 !fixed shadow-[0px_5px_4px_0px] shadow-purple-800" : "" } md:h-32 md:from-[40%] xsm:h-20`}>
      <div className={`bg-logo bg-cover bg-center w-40 h-40 ml-10 transition-all duration-300 rounded-full ${ scrollY > 0 ? "!h-20 !w-20" : "" } lg:w-20 lg:h-20 md:mr-40 xsm:w-14 xsm:h-14 xsm:mr-20`} />
      <nav
        className={`flex justify-around items-center md:transition-transform z-[50] md:duration-300 md:absolute md:gap-16 md:bg-gradient-to-r md:from-[5%] md:overflow-hidden md:from-[rgba(20,4,40,0)] md:to-black md:h-screen md:backdrop-blur-md md:right-0 md:w-[70%] md:top-0 md:flex-col md:justify-center md:items-end ${
          burgClicked ? "md:translate-x-0" : "md:translate-x-[100%]"
        }`}
      >
        {menu_list.map((menu_item) => {
          return (
            <Link
              key={menu_item.href}
              to={menu_item.href}
              onClick={linkClickHandle}
              className={`${
                burgClicked ? "mr-10" : ""
              } relative px-10 py-3 uppercase font-semibold transition-all duration-300 text-white hover:transition-all hover:duration-300 hover:font-extrabold hover:text-h-teal hover:-skew-x-12 before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100 before:bg-c-teal before:bg-opacity-10 before:blur-[10px] before:z-[-1]`}
            >
              {menu_item.name}
            </Link>
          );
        })}
      </nav>
      <BurgerNav
        burgNavClicked={burgClicked}
        setBurgNavClicked={setBurgClicked}
      />
    </div>
  );
}

export default Nav;
