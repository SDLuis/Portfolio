import { content } from "@content/index";
import { IconMenu } from "@icons/menu";
import { Link as ScrollLink } from "react-scroll";
import { trackWindowScroll } from "react-lazy-load-image-component";

function Navbar() {
  return (
    <header className="flex p-6 justify-between w-full lg:fixed lg:z-10 bg-darkblue">
      <a href="/" className="hidden md:block">
        <img
          className="max-h-8"
          width={"100%"}
          height={"100%"}
          src={content.nav.logo}
          alt=""
        />
      </a>
      <input type="checkbox" id="menu" hidden className="peer " />
      <label
        htmlFor="menu"
        className="relative z-50 lg:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block text-blue-800"
      >
        <IconMenu />
      </label>
      <nav className="absolute top-0 left-0 right-0 z-40 hidden min-h-screen py-24 bg-white peer-checked:block lg:block lg:static lg:bg-inherit lg:py-0 lg:min-h-0 bg-opacity-40 backdrop-blur-lg lg:backdrop-blur-0">
        <ul className="flex flex-col items-center lg:items-start lg:flex-row font-semibold tracking-tight text-xl gap-x-8 text-white [&>li>a]:border-b-2 [&>li>a]:border-b-transparent [&>li>a]:transition-all gap-y-4">
          <li className="flex-1">
            <a href="/" className="relative hover:border-b-black">
              Home
            </a>
          </li>
          <li className="relative flex lg:flex-col">
            <ScrollLink
              to="tecnologies"
              smooth={true}
              spy={true}
              href={"#"}
              className="relative hover:border-b-black hover:text-red cursor-pointer"
            >
              Tecnologies
            </ScrollLink>
          </li>
          <li className="relative flex lg:flex-col">
            <ScrollLink
              to="projects"
              smooth={true}
              spy={true}
              href={"#"}
              className="relative hover:border-b-black hover:text-red cursor-pointer"
            >
              Projects
            </ScrollLink>
          </li>
          <li className="relative flex lg:flex-col lg:mr-52">
            <ScrollLink
              to="contactMe"
              smooth={true}
              spy={true}
              href={"#"}
              className="relative hover:border-b-black hover:text-red cursor-pointer"
            >
              Contact me
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default trackWindowScroll(Navbar);
