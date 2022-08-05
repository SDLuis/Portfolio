import { content } from "@content/index";
import Typical from "react-typical";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Header() {
  return (
    <div className=" min-h-screen grid place-items-center">
      <div className=" w-7/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/4 sm:w-2/4 lg:w-2/5">
          <picture className="inline-block bg-red-800">
            <LazyLoadImage
              className="mix-blend-multiply grayscale"
              src={content.header.img}
              effect="blur"
              alt="Luis Rincon"
            />
          </picture>
        </div>
        <div className="grid place-items-center">
          <h2
            className={
              "transform transition duration-2000 mt-4 sm:mt-0 ease-in-out text-2xl md:text-5xl font-bold text-white"
            }
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={
              "transform transition duration-2000 ease-in-out mt-2 font-bold text-xl sm:text-2xl md:text-3xl text-gray-400"
            }
          >
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <button className="bg-red-800 py-3 px-10 text-xl uppercase mt-10 rounded-lg text-gray-200 hover:bg-red-600">
            {content.header.btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
