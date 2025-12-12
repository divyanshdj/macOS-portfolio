import { useRef } from "react";
import { dockApps } from "../constants";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "../store/window";

const Dock = () => {
  const { windows, openWindow, closeWindow } = useWindowStore();
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-item");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.35 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleOpenApp = (id, canOpen) => {
    if (!canOpen) return;

    const window = windows[id];

    if (window.isOpen) {
      closeWindow(id);
    } else {
      openWindow(id);
    }

    console.log(windows);
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div
            key={id}
            className="dock-item flex justify-center relative"
            data-tooltip-id="dock-tooltip"
            data-tooltip-content={name}
            data-tooltip-delay-show={150}
            aria-label={name}
          >
            <button
              type="button"
              className="dock-icon"
              disabled={!canOpen}
              onClick={() => handleOpenApp(id, canOpen)}
            >
              <img
                src={`/images/${icon}`}
                alt={`logo-${name}`}
                className={!canOpen ? "opacity-60" : ""}
              />
            </button>

            {windows[id]?.isOpen && (
              <div className="absolute -bottom-1 w-1 h-1 bg-white/50 rounded-full shadow-md"></div>
            )}
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
