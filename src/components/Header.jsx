import { useState, useEffect } from "react";
import { content } from "@content/index";
import Typical from "react-typical";
import { Link as ScrollLink } from 'react-scroll';
import { LazyLoadImage } from "react-lazy-load-image-component";
//const { LazyLoadImage } = lazyload
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className=" min-h-screen grid place-items-center -mt-24">
      <div className=" w-7/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/4 sm:w-2/4 lg:w-2/5">
          <LazyLoadImage
            src={content.header.img}
            placeholderSrc={content.header.placeholder}
            effect="blur"
            alt="Luis Rincon"
          />
        </div>
        <div className="text-white font-dosis text-center md:text-left">
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
              className="inline-block"
            />
          </h1>
          <ScrollLink to="tecnologies">
          <button
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            }  transform transition duration-2000 ease-in-out bg-blue-800 py-3 px-9 text-xl uppercase mt-10 rounded-lg text-gray-200 hover:bg-blue-600`}
          >
            {content.header.btnText}
          </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
