import { Check, Flag } from "lucide-react";
import { techStack } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { WindowControls } from "../components";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal"/>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@Divyansh-MacOS % </span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ items, category }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item}
                    {index < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check className="check" size={20} /> 6 of 6 Skills loaded
            successfully (100%)
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" /> Render Time: 10ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
