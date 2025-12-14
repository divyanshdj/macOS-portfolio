import {
  ArrowUpRightSquareIcon,
  Contact2,
  Mail,
  Phone,
} from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { socials } from "../constants";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2 className="font-bold">Contact Me</h2>
        <div className="flex items-center justify-center">
          <Contact2 className="icon" />
        </div>
      </div>
      <div className="p-5 space-y-5">
        <div className="flex-center flex-col gap-3">
          <img
            src="/images/divyansh.jpeg"
            alt="avatar"
            className="w-20 rounded-full"
          />
          <h3>Let's Connect!</h3>
          <div className="space-y-1 text-gray-600">
            <p className="flex items-center gap-2 justify-center">
              <Mail size={16} />
              <a
                className="hover:underline cursor-pointer"
                href="mailto:divyanshjain749@gmail.com"
              >
                divyanshjain749@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 justify-center">
              <Phone size={16} />
              <span>+91 7987330574</span>
            </p>
          </div>
        </div>
        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li key={id} style={{ backgroundColor: bg }} className="group ">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <div className="flex items-center justify-between">
                  <img src={icon} alt={text} className="size-6" />
                  <ArrowUpRightSquareIcon className="text-white opacity-0 group-hover:opacity-100" />
                </div>
                <p className="group-hover:underline">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
