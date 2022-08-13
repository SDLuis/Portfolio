import { useState, useEffect } from "react";
import { content } from "@content/index";
import Typical from "react-typical";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link as ScrollLink } from "react-scroll";
//const { LazyLoadImage } = lazyload
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className=" min-h-screen grid place-items-center -mb-px -mt-20 lg:-mt-0">
      <div className=" w-7/12 md:w-9/12 xl:w-8/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-white font-dosis text-center md:text-left lg:mr-10 mt-5 md:mt-0 lg:-mt-12">
          <h2
            className={`${
              animated ? "" : "translate-y-5 opacity-0"
            }  transform transition duration-2000 ease-in-out text-2xl md:text-5xl font-bold text-blue-300`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-5 opacity-0"
            }  transform transition duration-2000 ease-in-out font-bold text-xl sm:text-2xl`}
          >
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block mt-3"
            />
          </h1>
          <div className="lg:hidden block">
            <ScrollLink to="tecnologies" smooth={true} spy={true}>
              <button
                className={`${
                  animated ? "" : "translate-y-10 opacity-0"
                }  transform transition duration-2000 ease-in-out animate-float mt-10 rounded-lg text-white`}
              >
                {content.header.btnText}
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className="w-full md:w-2/4 sm:w-2/4 lg:w-2/5 lg:-mt-4">
          <picture className="inline-block bg-blue-900">
            <LazyLoadImage
              className="mix-blend-multiply grayscale"
              placeholderSrc={content.header.placeholder}
              src={content.header.img}
              effect="blur"
              alt="Luis Rincon"
            />
          </picture>
        </div>

        <div
          className={`${
            animated ? "" : "translate-y-5 opacity-0"
          }  transform transition duration-2000 ease-in-out ml-10 mt-5 lg:mt-30 text-left hidden lg:block`}
        >
          <p className="text-white uppercase font-bold">Introduction</p>
          <h1 className="text-2xl md:text-3xl text-blue-300 font-bold">
            FULL STACK WEB DEVELOPER
          </h1>
          <p className="max-w-lg text-gray-400">{content.stack.desc}</p>
          <ScrollLink to="tecnologies" smooth={true} spy={true}>
            <button
              className={`${
                animated ? "" : "translate-y-10 opacity-0"
              }  transform transition duration-2000 ease-in-out animate-float mt-10 rounded-lg text-white uppercase`}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
