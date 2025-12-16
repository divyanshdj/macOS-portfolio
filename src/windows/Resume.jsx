import { Download } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = ({ isMobile }) => {
  const [pageWidth, setPageWidth] = useState(600);

  useEffect(() => {
    if (isMobile) {
      setPageWidth(window.innerWidth - 24);
    } else {
      setPageWidth(700);
    }
  }, [isMobile]);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="/files/resume.pdf"
          download
          title="Download resume"
          className="cursor-pointer"
        >
          <Download className="icon cursor-pointer" />
        </a>
      </div>

      <div className="flex justify-center overflow-y-auto h-fit sm:max-h-[70vh] bg-gray-100">
        <Document file="/files/resume.pdf">
          <Page
            pageNumber={1}
            width={pageWidth}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
