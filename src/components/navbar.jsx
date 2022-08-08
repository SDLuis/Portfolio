import { content } from "@content/index";
import { IconMenu } from "@icons/menu";

export default function Navbar() {
  return (
    <header className="flex p-6 justify-between fixed z-10 w-full lg:w-10/12">
      <a href="/" className="hidden md:block">
        <img className="max-h-10" src={content.nav.logo} alt="" />
      </a>
      <input type="checkbox" id="menu" hidden className="peer" />
      <label
        htmlFor="menu"
        className="relative z-50 lg:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block text-blue-800"
      >
        <IconMenu />
      </label>
      <nav className="absolute top-0 left-0 right-0 z-40 hidden min-h-screen py-24 bg-white peer-checked:block lg:block lg:static lg:bg-inherit lg:py-0 lg:min-h-0 bg-opacity-40 backdrop-blur-lg lg:backdrop-blur-0">
        <ul className="flex flex-col items-center lg:items-start lg:flex-row font-semibold tracking-tight text-xl gap-x-8 text-white [&>li>a]:border-b-2 [&>li>a]:border-b-transparent [&>li>a]:transition-all gap-y-4">
          <li className="flex-1">
            <a href="/" className="hover:border-b-white hover:text-blue-600">
              Inicio
            </a>
          </li>
          <li className="relative flex lg:flex-col">
            <a
              className="hover:border-b-red hover:text-red opacity-50 pointer-events-none"
              href="/"
            >
              Projects
            </a>
            <div className="pl-2">
              <span className="bg-blue-600 text-white text-base font-semibold px-2.5 py-0.5 rounded">
                ¡Working!
              </span>
            </div>
          </li>
          <li className="relative flex lg:flex-col">
            <a
              className="relative opacity-50 pointer-events-none hover:border-b-black hover:text-red"
              href="/"
            >
              About me
            </a>
            <div className="pl-2">
              <span className="bg-blue-600 text-white text-base font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                ¡Working!
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}