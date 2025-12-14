import { useGSAP } from "@gsap/react";
import { locations } from "../constants";
import useLocationStore from "../store/location";
import useWindowStore from "../store/window";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

const Home = () => {
  useGSAP(() => {
    Draggable.create(".folder");
  });
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const handleOpenWindow = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };
  return (
    <section id="home">
      <ul>
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className={`${project.windowPosition} folder mx-4 cursor-pointer hover:bg-gray-200/10 hover:rounded-lg`}
              onClick={() => handleOpenWindow(project)}
            >
              <img src={project.icon} alt={project.name} />
              <p>{project.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
