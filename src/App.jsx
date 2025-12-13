import gsap from "gsap";
import { Navbar, Welcome, Dock } from "./components";
import { Finder, Image, Resume, Safari, Terminal, Text } from "./windows";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
    </main>
  );
}

export default App;
