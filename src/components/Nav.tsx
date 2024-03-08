import logo from "../assets/images/logo.svg";
import downArrow from "../assets/images/icon-arrow-down.svg";
import todo from "../assets/images/icon-todo.svg";
import calendar from "../assets/images/icon-calendar.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";
import menu from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-close-menu.svg";
import { useState } from "react";

type navDataType = {
  label: string;
  children?: { name?: string; icon?: string }[];
}[];

const navData: navDataType = [
  {
    label: "Features",
    children: [
      {
        name: "Todo List",
        icon: todo,
      },
      {
        name: "Calendar",
        icon: calendar,
      },
      {
        name: "Reminders",
        icon: reminders,
      },
      {
        name: "Planning",
        icon: planning,
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        name: "History",
      },
      {
        name: "Our Team",
      },
      {
        name: "Blog",
      },
    ],
  },
  {
    label: "Careers",
  },
  {
    label: "About",
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-default text-default font-medium flex items-center text-mediumGray justify-between">
      <div className="px-8 py-4 cursor-pointer">
        <img src={logo} alt="logo" />
      </div>

      <div
        className={`flex flex-col lg:flex-row flex-grow items-start lg:items-center lg:justify-between ${
          isOpen ? "top-0 right-0" : "top-0 -right-full"
        } lg:visible absolute lg:static bg-almostWhite h-full lg:h-auto w-2/3 md:w-auto lg:w-auto pt-12 lg:pt-0 px-6 lg:px-0 transition-all`}
      >
        <ul className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto">
          {navData.map((nav, i) => (
            <li
              key={i}
              className="cursor-pointer lg:px-6 py-1 lg:py-5 relative group w-full lg:w-auto"
            >
              <p className="flex items-center gap-2 w-full lg:w-auto">
                <span className="hover:text-almostBlack transition-all">
                  {nav.label}
                </span>
                {nav.children && <img src={downArrow} />}
              </p>

              {nav.children && (
                <div className="invisible group-hover:visible static lg:absolute top-16 right-0 bg-almostWhite p-4 flex flex-col gap-4 lg:rounded-xl lg:shadow-sm shadow-almostBlack transition-all w-full lg:w-auto">
                  {nav.children.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center hover:text-almostBlack"
                    >
                      <img src={item.icon} className="pr-3" />
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:mr-4 w-full lg:w-auto">
          <button className="px-6 py-2 hover:text-almostBlack transition-all w-full lg:w-auto">
            Login
          </button>
          <button className="px-6 py-2 border-2 border-mediumGray rounded-2xl hover:border-almostBlack hover:text-almostBlack transition-all w-full lg:w-auto ">
            Register
          </button>
        </div>
      </div>

      <img
        src={isOpen ? closeMenu : menu}
        className="block mr-4 lg:hidden z-10"
        onClick={() => setIsOpen(!isOpen)}
      />
    </nav>
  );
};

export default Nav;
