import { CircleArrowOutUpRight } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;
  if (!data) return null;

  const { name, image, subtitle, description, link } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2 className="font-bold">{name}</h2>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <CircleArrowOutUpRight className="icon" />
          </a>
        )}
      </div>

      <div className="p-5 space-y-3 bg-white max-h-[50vh] overflow-y-auto">
        {image ? (
          <div className="w-full flex justify-center">
            <img
              src={image}
              alt={name}
              className="max-w-full max-h-60 object-contain rounded"
            />
          </div>
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        {description && description.length > 0 ? (
          <div className="space-y-2 text-base text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
