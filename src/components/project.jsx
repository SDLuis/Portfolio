import Minigithub from '../components/icons/github'
import See from './icons/see'
import LazyLoadImageComponent from './LazyLoadImage'
import Placeholder from '../img/placeholderimg.webp'

export default function Projects({ project }) {
  return (
    <div className="w-[270px] flex-col m-8 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in hover:shadow-xl shadow-[#00000033] text-black bg-gray-100 flex justify-center items-center">
      <div className="app__work-img w-full h-[230px] relative justify-center items-center">
        <LazyLoadImageComponent
          width={"270"}
          height={"270"}
          effect="blur"
          classStyle="w-full h-full rounded-lg object-cover"
          src={project.img}
          alt={project.title}
          placeholderSrc={Placeholder}
        />

        <div className="app__work-hover flex hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000080] rounded-lg opacity-0 transition-all duration-300 ease-in justify-center items-center">
          <a target="_blank" href={project.url} rel="noreferrer">
            <div className="w-[50px] h-[50px] flex rounded-full bg-[#00000080] text-white m-4 font-extrabold cursor-pointer transition-all duration-300 ease-in justify-center items-center">
              <See />
              <p className='text-transparent fixed'>.</p>
            </div>
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            <div className="w-[50px] h-[50px] flex rounded-full bg-[#00000080] text-white m-4 font-extrabold cursor-pointer transition-all duration-300 ease-in justify-center items-center">
              <Minigithub />
              <p className='text-transparent fixed'>.</p>
            </div>
          </a>
        </div>
      </div>

      <div className=" p-2 w-full relative flex-col justify-center items-center">
        <p className="bold-text font-semibold text-lg mt-4"> {project.title} </p>
        <p
          className="p-text text-sm text-left leading-[1.5]"
          style={{ marginTop: 10 }}
        >
          {project.description}
        </p>
      </div>
    </div>
  );
}
