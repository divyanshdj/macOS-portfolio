import { ImagePlus } from "lucide-react";
import { WindowControls } from "../components";
import { gallery, photosLinks } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Gallery = () => {
  const { openWindow } = useWindowStore();

  const openImageWindow = (item) => {
    openWindow("imgfile", item);
  }
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2 className="font-bold">Gallery</h2>
        <ImagePlus className="icon" />
      </div>

      <div className="flex bg-white h-full">
        <div className="sidebar">
          <ul>
            {photosLinks.map(({ id, icon, title }) => {
              return (
                <li key={id} className="truncate hover:bg-gray-200 my-2">
                  <img src={icon} alt={title} />
                  <h3 className="text-black">{title}</h3>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="content grid grid-cols-2 p-2 gap-2">
          {gallery.map((item) => (
            <li
              key={item.id}
              className="group aspect-auto overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
              onClick={()=>openImageWindow(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full max-h-[30vh] object-cover transition-transform duration-200 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
