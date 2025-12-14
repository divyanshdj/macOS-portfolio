import gsap from "gsap";
import { Navbar, Welcome, Dock, Home } from "./components";
import { Contact, Finder, Gallery, Image, Resume, Safari, Terminal, Text } from "./windows";
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
      <Contact/>
      <Gallery/>
      <Home/>
    </main>
  );
}

export default App;
