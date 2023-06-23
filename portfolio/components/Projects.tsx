import React from 'react';
import SectionTitle from './SectionTitle';
import { evogym, netflixrec, wmatch } from '@/public/assets';
import Image from 'next/image';
import { RxOpenInNewWindow } from 'react-icons/rx';
const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col - items-center justify-between gap-28 mt-10 ">
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/barkinkoroglu/W-Match"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={wmatch}
                  alt="W-Match"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">W-MATCH</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                W-Match Employer and Employee Connection Platform is a project
                that allows people to get scores by doing test and creating CVs;
                matching people with company according to the needs of employer
                company; and applying recruitment procedures for the matching
                company.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React.js</li>
                <li>Firebase</li>
                <li>Tailwind Css</li>
                <li>React Redux</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://w-match.vercel.app"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/barkinkoroglu/Gym-React-TypeScript"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={evogym}
                  alt="EvoGym"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Evo Gym</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                The project showcases the interface design of a website for Evo
                Gym, demonstrating a visually appealing and user-friendly
                layout.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Tailwind Css</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://gym-react-typescript.vercel.app"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/barkinkoroglu/recommendationShow"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={netflixrec}
                  alt="Netflix Rec"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Netflix TV/Show Recommendation
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                This project showcases a Flask-based web application that
                provides personalized show recommendations to users based on
                their viewing history, utilizing clustering and association
                learning algorithms for improved accuracy.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Flask</li>
                <li>Pandas</li>
                <li>mlxtend</li>
                <li>Pickle</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="http://barkinkoroglu.pythonanywhere.com"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
