import gsap from "gsap";
import { Navbar, Welcome, Dock, Home } from "./components";
import {
  Contact,
  Finder,
  Gallery,
  Image,
  Resume,
  Safari,
  Terminal,
  Text,
} from "./windows";
import Draggable from "gsap/Draggable";
import { useEffect, useState } from "react";
gsap.registerPlugin(Draggable);

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    const fallback = setTimeout(() => setReady(true), 3000);
    img.src = "/images/wallpaper2.png";
    img.onload = async () => {
      try {
        await img.decode?.();
      } catch {}
      clearTimeout(fallback);
      setReady(true);
    };
  }, []);

  if (!ready) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-6 select-none">
        <img src="/images/logo.svg" className="w-12 invert brightness-200" alt="apple logo" />

        <div className="w-40 sm:w-52 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-white rounded-full animate-macos-loader" />
        </div>

        <p className="text-[11px] sm:text-xs text-white/60 tracking-wide">
          Booting Divyansh's macOS Portfolio…
        </p>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Gallery />
      <Home />
    </main>
  );
}

export default App;
