import logo from "../assets/LinkedIn_Profile1.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" class="w-[100px] h-[100px] object-cover rounded-full" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin size={30} onClick={() => window.open("https://www.linkedin.com/in/megha-hubli-429b72157", "_blank")} />
        <FaGithub size={30} onClick={() => window.open("https://github.com/megha07-hub", "_blank")} />
    </div>
  </nav>
  );
};

export default Navbar;