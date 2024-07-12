import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Játékok Management",
    href: "/admin/gamemanagement",
  },

  {
    name: "Ár Management",
    href: "/admin/pricemanagement",
  },
];

function DashBoardNav() {
  return (
    <div className="w-[20rem] bg-d-purple bg-opacity-20 backdrop-blur-sm py-24 h-screen flex flex-col gap-16">
      {navItems.map((item) => {
        return (
          <Link
            to={item.href}
            className="relative px-10 py-3 uppercase font-semibold transition-all duration-300 text-white hover:transition-all hover:duration-300 hover:font-extrabold hover:text-h-teal hover:-skew-x-12 before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100 before:bg-c-teal before:bg-opacity-10 before:blur-[10px] before:z-[-1]"
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default DashBoardNav;
