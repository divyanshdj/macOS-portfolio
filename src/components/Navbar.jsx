import dayjs from "dayjs";
import { navIcons, navLinks } from "../constants";
import useWindowStore from "../store/window";
import { Battery, Signal, Wifi } from "lucide-react";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav className="sm:relative">
      <time className="sm:hidden font-semibold text-sm">{dayjs().format("h:mm A")}</time>

      <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">
        <img src="/images/logo.svg" alt="apple logo" />
        <p className="font-bold text-sm sm:text-base">Divyansh's Portfolio</p>

        <ul className="hidden sm:flex">
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center sm:hidden gap-1">
        <Signal className="icon" strokeWidth={2.5} />
        <Wifi className="icon" strokeWidth={2.5} />
        <Battery className="icon" strokeWidth={2.5} fill="currentColor" />
      </div>

      <div className="hidden sm:flex items-center gap-5">
        <ul className="flex items-center gap-5">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`img-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd D MMM h:mm:ss A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
