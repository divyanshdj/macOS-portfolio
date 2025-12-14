import { Search } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { locations } from "../constants";
import useLocationStore from "../store/location";
import { clsx } from "clsx";
import useWindowStore from "../store/window";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  const { openWindow } = useWindowStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") {
      return openWindow("resume");
    }
    if (item.kind === "folder") {
      return setActiveLocation(item);
    }
    if (["url", "fig"].includes(item.fileType) && item.href) {
      const newWindow = window.open(item.href, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
      return;
    }

    if (!item.fileType || !item.kind) {
      console.warn("Invalid item:", item);
      return;
    }

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (items) => {
    return items.map((item) => (
      <li
        key={item.id}
        role="button"
        onClick={() => setActiveLocation(item)}
        className={clsx(
          item.id === activeLocation.id ? "active" : "not-active", "hover:text-blue-500"
        )}
      >
        <img src={item.icon} className="w-4" alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <h2 className="font-bold">Portfolio</h2>
        <Search className="icon" />
      </div>

      <div className="flex bg-white h-full">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>
          <div>
            <h3>My Projects</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={`${item.position} group hover:bg-gray-200 rounded-xl p-1 cursor-pointer`}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p className="group-hover:text-blue-500">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
