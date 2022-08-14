import { useState, useEffect } from "react";
import { content } from "@content/index";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Info() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <div
      className="min-h-screen grid place-items-center bg-darkblue"
      id="aboutMe"
    >
      <div className="w-7/12 md:w-9/12 xl:w-9/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <figure className="md:flex bg-blue-100 rounded-xl dark:bg-slate-800">
          <LazyLoadImage
            className="w-2/4 md:w-full h-auto md:rounded-xl rounded-full mx-auto"
            effect="blur"
            placeholderSrc={content.header.img2}
            src={content.header.img2}
            alt="Luis Tejeda"
          />
          <div
            className={`${
              animated ? "" : "translate-y-5 opacity-0"
            }  transform transition duration-2000 ease-in-outpt-8 md:-ml-5 md:p-3 lg:p-8 xl:p-5 p-8 text-center self-center md:text-left space-y-4`}
          >
            <blockquote>
              <p className="lg:text-lg font-medium dark:text-white ">
                Soy observador, analista, activo, respetuoso, mantengo buena
                comunicación con los demás, comprometido con los logros de los
                objetivos que se establezcan.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className=" text-sky-500 dark:text-sky-400">
                - Luis Manuel Rincon Tejeda
              </div>
              <h4 className="text-slate-700 dark:text-slate-500">
                - 22 años
                <br />
                - TDS
                <br />- FullStack Developer (ITLA)
              </h4>
              <div className="xl:block hidden">
                <p className="mt-3 mb-4 font-medium text-lg text-sky-500">
                  - Habilidades
                </p>
                <div className="grid grid-cols-4">
                  <h4>
                    JavaScript
                    <br />
                    TypeScript
                    <br />
                    C#
                  </h4>
                  <h4>
                    Node js
                    <br />
                    Express
                    <br />
                    React js
                    <br />
                    Sequelize
                  </h4>
                  <h4>
                    SQL
                    <br />
                    MySQL
                    <br />
                    Oracle
                  </h4>
                  <h4>
                    Git -Github
                    <br />
                    Metodología scrum
                    <br />
                    Confluence
                    <br />
                    ClickUp
                  </h4>
                </div>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default trackWindowScroll(Info);
