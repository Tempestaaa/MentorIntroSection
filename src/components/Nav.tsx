import logo from "../assets/images/logo.svg";
import downArrow from "../assets/images/icon-arrow-down.svg";
import todo from "../assets/images/icon-todo.svg";
import calendar from "../assets/images/icon-calendar.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";

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
  return (
    <nav className="font-default text-default font-medium flex items-center justify-between text-mediumGray">
      <div className="flex items-center">
        <div className="px-8 py-4 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex items-center">
          {navData.map((nav, i) => (
            <li key={i} className="cursor-pointer px-6 py-5 relative group">
              <p className="flex items-center gap-2">
                <span className="hover:text-almostBlack transition-all ">
                  {nav.label}
                </span>
                {nav.children && <img src={downArrow} />}
              </p>

              {nav.children && (
                <div className="opacity-0 group-hover:opacity-100 absolute top-16 right-0 bg-almostWhite p-4 flex flex-col gap-4 rounded-xl shadow-sm shadow-almostBlack transition-all">
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
      </div>
      <div className="flex items-center gap-2 mr-4">
        <button className="px-6 py-2 hover:text-almostBlack transition-all">
          Login
        </button>
        <button className="px-6 py-2 border-2 border-mediumGray rounded-2xl hover:border-almostBlack hover:text-almostBlack transition-all">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Nav;
