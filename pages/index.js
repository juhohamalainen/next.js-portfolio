import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import juho from "../public/Kuva 2.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio Juho</title>
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Developed by Juho</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1eqxsxavZ41FNj2sgPeqDWdulpIinY5sd/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Juho Hämäläinen
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Frontend developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Welcome to my web page!
            </p>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={juho} alt="memoji" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Hey! I'm 29 year old Business Information Technology student from Hämeenlinna and I'm just about to graduate in 30.11.2022. I am interested in application and web development and especially Frontend.
            I am 
              <span className="text-teal-500"> motivated</span>,
              <span className="text-teal-500"> team player</span>,
              <span className="text-teal-500"> self-initiated </span>and
              <span className="text-teal-500"> willing to develop </span>
              myself.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I've been working for 5 months as a frontend developer.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} alt="photo" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Personality
              </h3>
              <p className="py-5">
                This is who I am:
              </p>
              <p className="text-gray-800 py-1">Calm</p>
              <p className="text-gray-800 py-1">Friendly</p>
              <p className="text-gray-800 py-1">Motivated</p>
              <p className="text-gray-800 py-1">Self-Initiated</p>
              <p className="text-gray-800 py-1">Willing to learn</p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} alt="hashtag" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Skills
              </h3>
              <p className="py-5">
                Here's some technologies that I've been using:
              </p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">React Native</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">HTML and CSS</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">JQuery</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">Robot Framework</p>
              <p className="text-gray-800 py-1">RESTful</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} alt="thumb" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Hobbies</h3>
              <p className="py-5">
              Things I like to do in my spare time:
              </p>
              <p className="text-gray-800 py-1">Play guitar and make music</p>
              <p className="text-gray-800 py-1">Hit the gym</p>
              <p className="text-gray-800 py-1">Ride motorcycle</p>
              <p className="text-gray-800 py-1">Hang out with my spouse, friends and family</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div >
            <h3 className="text-3xl py-1 dark:text-white ">Contact me</h3>
            <p className="text-gray-800 py-1 dark:text-white">Juho Hämäläinen</p>
              <p className="text-gray-800 py-1 dark:text-white">Kaivokatu 1 A 3</p>
              <p className="text-gray-800 py-1 dark:text-white">13100</p>
              <p className="text-gray-800 py-1 dark:text-white">Hämeenlinna</p>
              <p className="text-gray-800 py-1 dark:text-white">044 283 3661</p>
              <p className="text-gray-800 py-1 dark:text-white">ji.hamalainen@gmail.com</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/juho-hamalainen-22b379192/">
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com/HaemaeOfficial">
            <AiFillTwitterCircle />
            </a>
            <a href="https://www.youtube.com/channel/UCDvaXKc6WQOTYx_vdYPCvEw">
            <AiFillYoutube />
            </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}