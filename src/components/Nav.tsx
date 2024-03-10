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
  children?: { name: string; icon?: string }[];
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
    <nav className="h-16 flex items-center justify-between gap-8 px-8 relative">
      {/* Logo */}
      <img src={logo} alt="logo" />

      {/* Links & Btns */}
      <section
        className={`flex-grow h-screen md:h-full w-screen md:w-auto absolute md:static top-0 right-0 ${
          !isOpen ? "" : "bg-black bg-opacity-50"
        }`}
      >
        <div
          className={`flex items-center md:justify-between h-full flex-col md:flex-row w-2/3 md:w-auto ml-auto absolute md:static top-0 ${
            !isOpen ? "-right-2/3" : "right-0"
          } pt-16 md:pt-0 bg-almostWhite px-6 md:px-0 transition-all`}
        >
          {/* Nav Links */}
          <div className="flex gap-4 md:gap-6 md:h-full flex-col md:flex-row w-full md:w-auto transition-all">
            {navData.map((nav, i) => (
              <div
                key={i}
                className="flex flex-col justify-center md:items-center gap-1 cursor-pointer h-full relative group"
              >
                <div className="flex items-center gap-1">
                  <a href="#" className="group-hover:text-almostBlack">
                    {nav.label}
                  </a>
                  {nav.children && (
                    <img
                      src={downArrow}
                      alt="arrow icon"
                      className="group-hover:rotate-180 transition-all rotate-0"
                    />
                  )}
                </div>

                {nav.children && (
                  <div className="md:absolute md:top-full md:right-0 bg-almostWhite md:shadow-navMobile md:shadow-almostBlack px-2 py-2 md:py-4 text-base md:w-32 hide group-hover:visible group-hover:flex flex-col gap-2 rounded-xl transition-all">
                    {nav.children?.map((item, i) => (
                      <div key={i} className="">
                        <div className="flex items-center hover:text-almostBlack ">
                          <img src={item.icon} className="mr-2" />
                          <span>{item.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Btn */}
          <div className="flex gap-4 flex-col md:flex-row w-full md:w-auto">
            <button className="py-2 px-4 hover:text-almostBlack transition-all">
              Login
            </button>
            <button className="py-2 px-4 border-2 border-mediumGray rounded-xl hover:border-almostBlack hover:text-almostBlack transition-all">
              Register
            </button>
          </div>
        </div>
      </section>

      {/* Menu icon */}
      <img
        src={isOpen ? closeMenu : menu}
        alt="menu icon"
        className="block md:hidden cursor-pointer z-10"
        onClick={() => setIsOpen(!isOpen)}
      />
    </nav>
  );
};

export default Nav;
