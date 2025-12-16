import { Edit, Plus } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;
  if (!data) return null;
  const { name, imageUrl } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2 className="font-bold">{name}</h2>
        <div className="flex items-center justify-center">
          <Edit className="icon" />
          <Plus className="icon" />
        </div>
      </div>

      <div className="p-5 bg-white sm:max-h-[60vh] overflow-y-auto">
        {imageUrl ? (
          <div className="w-full flex justify-center">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-w-[50vh] object-contain rounded"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
