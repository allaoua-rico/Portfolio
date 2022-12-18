import Link from "next/link";
import React from "react";
import styles from "../styles/Projects.module.css";
import { projectsInfos } from "../data";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ImagesMuiDialog from "./shared/ImagesMuiDialog";

export default function Projects() {
  return (
    <section
      className="lg:px-0 px-5 
     flex flex-col justify-center gap-y-5 items-center
     pt-6 text-white
     w-screen lg:w-full max-w-[1000px] 
     rounded-xl"
    >
      <h2 className={styles.title}>Projects</h2>
      <div className="flex flex-col items-center">
        {projectsInfos.map((project, i) => (
          <div
            key={project.links.deployed + i}
            className="flex flex-row gap-y-5 my-24 relative"
          >
            <ImagesMuiDialog
              imgs={project.imgs}
              link={project.links.deployed}
            />

            <ProjectInfos>
              <ProjectTitles project={project} />

              <ProjectInfosCard>
                <div className="text-white font-semibold">
                  {project.description}
                </div>
                <ProjectInfosFctsList list={project.fctList} />
              </ProjectInfosCard>

              <ProjectBottom>
                <ProjectInfosTechsList list={project.techs} />
                <ProjectInfosLink links={project.links} />
              </ProjectBottom>
            </ProjectInfos>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectBottom({ children }) {
  return (
    <div
      className="w-full flex flex-col gap-y-5 
    opacity-95 md:opacity-100 
    md:bg-transparent py-1"
    >
      {children}
    </div>
  );
}

function ProjectTitles({ project }) {
  return (
    <div className="flex flex-col md:items-end">
      <ProjectSubTitle>{project.subTitle}</ProjectSubTitle>
      <ProjectTitle>{project.title}</ProjectTitle>
    </div>
  );
}

function ProjectInfosFctsList({ list }) {
  return (
    <ul className="list-disc">
      {list?.map((el, i) => (
        <li key={el + i} className="text-white">
          <div className="text-[#d4d9e8]">{el}</div>
        </li>
      ))}
    </ul>
  );
}

function ProjectInfosLink({ links }) {
  const className =
    "w-5 h-5 stroke-[#8B93AD] hover:stroke-[#85E9D9] transition-all duration-300";

  return (
    <div className="flex w-full md:justify-end gap-x-6">
      {links.github && (
        <Link passHref href={links.github} >
          <a target="_blank">
            <FiGithub className={className} />
          </a>
        </Link>
      )}

      {links.deployed && (
        <Link passHref href={links.deployed} >
          <a target="_blank">
            <FiExternalLink className={className} />
          </a>
        </Link>
      )}
    </div>
  );
}

function ProjectInfosTechsList({ list }) {
  return (
    <div
      className="text-[#99A2BE] 
      flex space-x-3 md:justify-end flex-wrap
      md:max-w-xs"
    >
      {list?.map((el, i) => (
        <span key={el + i} className="whitespace-nowrap">
          {el}
        </span>
      ))}
    </div>
  );
}

function ProjectInfosCard({ children }) {
  return (
    <div
      className="bg-[#2f4a68] 
    opacity-95 p-6 right-0 
    md:w-[145%] 
    rounded-md 
    pl-9 z-30 w-full"
    >
      {children}
    </div>
  );
}

function ProjectInfos({ children }) {
  return (
    <div
      className="
    md:basis-1/3 basis-3/3 
    flex flex-col md:items-end justify-between 
    p-8 z-30 bg-[#2f4a68] 
    opacity-95 md:opacity-100 
    md:bg-transparent h-full md:h-auto"
    >
      {children}
    </div>
  );
}

function ProjectSubTitle({ children }) {
  return <h3 className="text-[#85E9D9]">{children}</h3>;
}

function ProjectTitle({ children }) {
  return <h3 className="text-2xl pb-2">{children}</h3>;
}
