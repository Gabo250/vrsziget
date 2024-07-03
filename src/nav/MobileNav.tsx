import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

export type menuList = {
    name: string,
    href: string
}

type menuProp = {
    burgClicked: boolean,
    linkClickHandle: MouseEventHandler<HTMLAnchorElement>
    menu: menuList[]
}

function MobileNav({ burgClicked, linkClickHandle, menu }: menuProp) {
    return (
        <nav
        className={`hidden rounded-tl-3xl rounded-bl-3xl md:flex md:transition-transform z-[50] md:duration-300 fixed md:gap-16 md:bg-gradient-to-r md:from-[5%] md:overflow-hidden md:from-[rgba(20,4,40,0)] md:to-black md:h-screen md:backdrop-blur-sm md:right-0 md:w-[70%] md:top-0 md:flex-col md:justify-center md:items-end ${
          burgClicked ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        {menu.map((menu_item) => {
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
    );
}

export default MobileNav;