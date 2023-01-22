import { useState } from "react"
import { content } from "@content/index"
import Typical from "react-typical"
import TrackRoll from "react-lazy-load-image-component"
import { Link as ScrollLink } from "react-scroll"
import LazyLoadImageComponent from "./LazyLoadImage"
const { trackWindowScroll } = TrackRoll

function Header() {
  const [animated, setAnimated] = useState(false);

  (function setAnimation () {
    setTimeout(() => {
      setAnimated(true)
    })
  })()

  return (
    <div className="min-h-screen grid place-items-center -mt-20 lg:-mt-0">
      <div className=" w-8/12 md:w-9/12 xl:w-[1100px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-white font-dosis text-center md:text-left lg:mr-10 mt-5 md:mt-0 lg:-mt-20">
          <h2
            className={`${
              animated ? "" : "translate-y-5 opacity-0"
            }  transform transition duration-[1850] ease-in-out text-2xl md:text-4xl font-bold text-blue-400`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-5 opacity-0"
            }  transform transition duration-[1850] ease-in-out font-bold text-xl sm:text-2xl`}
          >
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block mt-3"
            />
          </h1>
          <div className="lg:hidden block">
            <ScrollLink to="tecnologies" href="#" smooth={true} spy={true}>
              <button
                className={`${
                  animated ? "" : "translate-y-10 opacity-0"
                }  transform transition duration-[1850] ease-in-out animate-float mt-10 rounded-lg bg-blue-800 py-3 px-9 text-xl uppercase text-gray-200 hover:bg-blue-600`}
              >
                {content.header.btnText}
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className="w-11/12 md:w-2/4 sm:w-2/4 lg:w-2/4 xl:w-[24%]">
          <picture /*className="inline-block bg-blue-900"*/>
            <LazyLoadImageComponent
              /*className="mix-blend-multiply grayscale"*/
              width={"400"}
              height={"400"}
              classStyle="rounded-full"
              src={content.header.img}
              effect="blur"
              alt="Luis Rincon"
            />
          </picture>
        </div>

        <div
          className={`${
            animated ? "" : "translate-y-5 opacity-0"
          }  transform transition duration-[1850] ease-in-out ml-10 mt-5 lg:mt-0 text-left hidden lg:block`}
        >
          <p className="text-white uppercase font-bold">Introduction</p>
          <h1 className="text-2xl md:text-2xl text-blue-400 font-bold mb-2">
            FULL STACK WEB DEVELOPER
          </h1>
          <p className="max-w-[400px] text-gray-300 text-justify mb-4">{content.nav.desc[0]}</p>
          <p className="max-w-[400px] text-gray-300">{content.nav.desc[1]}</p>

          <ScrollLink to="tecnologies" href="#" smooth={true} spy={true}>
            <button
              className={`${
                animated ? "" : "translate-y-10 opacity-0"
              }  transform transition duration-[1850] ease-in-out animate-float bg-blue-800 py-3 px-9 text-xl uppercase mt-10 rounded-lg text-gray-200 hover:bg-blue-600`}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(Header);
