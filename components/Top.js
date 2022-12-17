import React from "react";
import Laptop from "../public/svg/Laptop";
import styles from "../styles/Top.module.css";

export default function Top() {
  return (
    <div
      className="
    text-white sm:text-6xl text-3xl
     leading-normal sm:leading-relaxed sm:font-bold font-medium 
     py-10 mt-20 
     flex flex-col gap-y-28 lg:flex-row lg:justify-center 
     gap-x-32 lg:w-full overflow-hidden"
    >
      <div
        className={` mx-auto lg:mx-px pl-8 flex flex-col justify-center ${styles.topContainer}`}
      >
        <div>Hello,</div>
        <div>I am BOUDRIOU Allaoua,</div>
        <div>
          A<span> MERN stack </span>
          developer
        </div>
      </div>
      <div className="relative px-8 lg:w-1/3 flex flex-col justify-center items-center">
        <Laptop />

        <div className="w-fit absolute ">
          <div className={"text-black text-lg md:text-2xl xl:text-3xl"}>
            <h1 className={styles.typewriter}>hello world!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
