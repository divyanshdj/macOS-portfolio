import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
  SquareArrowOutUpRight,
} from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { expList } from "../constants";

const Safari = ({isMobile}) => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        {!isMobile && (<>
        <div className="ml-10 px-1 py-0.5 bg-white border border-gray-300 rounded-full">
          <PanelLeft className="icon" />
        </div>

        <div className="flex items-center gap-1 ml-5 p-0.5 bg-white border border-gray-300 rounded-full">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div></>)}

        <div className="flex-1 flex-center gap-3">
          {!isMobile && (<div className="px-1 py-0.5 bg-white border border-gray-300 rounded-full">
            <ShieldHalf className="icon" />
          </div>)}
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Divyansh's experience in tech so far"
              className="flex-1"
              disabled
            />
          </div>
        </div>

        {!isMobile && (<div className="flex items-center gap-1 px-1 py-0.5 bg-white border border-gray-300 rounded-full">
          <Download className="icon" />
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>)}
      </div>

      <div className="blog">
        <h2>My Experience</h2>
        <div className="space-y-4">
          {expList.map(({ id, date, title, image, link }) => (
            <div
              key={id}
              className="blog-post max-sm:pb-4 border-b-[0.1px] border-b-gray-200"
            >
              <div className="col-span-2">
                <img src={image} alt="logo" />
              </div>

              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Check it Out
                  <SquareArrowOutUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
