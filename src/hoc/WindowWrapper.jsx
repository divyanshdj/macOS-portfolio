import { useLayoutEffect, useRef } from "react";
import useWindowStore from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useIsMobile from "../helpers/useIsMobile";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows, focusWindow } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);
    const isMobile = useIsMobile();

    useGSAP(() => {
      if (!isOpen) return;
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        {
          scale: isMobile ? 1 : 0.8,
          opacity: 0,
          y: isMobile ? 30 : 40,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        }
      );
    }, [isOpen, isMobile]);

    useGSAP(() => {
      if (isMobile) return;

      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, [isMobile]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={isMobile ? "fixed inset-0 z-50 overflow-y-auto" : "absolute"}
      >
        <Component {...props} isMobile={isMobile} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;
  return Wrapped;
};

export default WindowWrapper;
