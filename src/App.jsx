import gsap from "gsap";
import { Navbar, Welcome, Dock } from "./components";
import { Resume, Safari, Terminal } from "./windows";
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
    </main>
  );
}

export default App;
