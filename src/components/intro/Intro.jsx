import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiFlutter, SiGo, SiJavascript, SiLaravel } from 'react-icons/si'
import {bannerImg} from "../../assets/index"

const WORDS = ["Full Stack Developer", "Backend Developer", "Front End Developer", "Penetration Tester"];
const LONGEST = WORDS.reduce((a, b) => (b.length > a.length ? b : a));

const Banner = () => {
  const [text] = useTypewriter({
    words: WORDS,
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="intro"
      className="w-full pt-10 pb-20 px-10 flex flex-col gap-10 xl:gap-0 lg:flex-row items-center border-b font-titleFont border-b-blue-700"
    >
      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY PROFILE</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm <span className="text-designColor capitalize">Musyaddad</span>
          </h1>
          <h2 className="grid text-2xl sm:text-4xl font-bold text-white">
            <span className="invisible col-start-1 row-start-1" aria-hidden="true">
              a {LONGEST}|
            </span>

            <span className="col-start-1 row-start-1">
              a <span>{text}</span>
              <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="#4ECCA3"
              />
            </span>
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I don't just write code to make things work.
            I engineer secure, scalable web and mobile applications that deliver real value. 
            With hands-on internship experience in internal systems and a strong adaptability to modern tech stacks, 
            I build solutions that are as safe as they are seamless.
            {/* Saya tidak sekadar menulis kode agar program berjalan. saya merancang aplikasi web dan mobile yang aman serta dapat dikembangkan (scalable). Memiliki bekal pengalaman magang dalam pengembangan sistem internal dan kemampuan adaptasi yang kuat terhadap teknologi modern, untuk menciptakan aplikasi yang tidak hanya berjalan dengan mulus dan nyaman dipakai, tetapi juga aman. */}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/naufalmusyaddad" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn/>  
              </a>
              <a href="https://instagram.com/naufal_musyaddad" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaInstagram/> 
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              <a href="https://laravel.com/framework/docs/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <SiLaravel />
              </a>
              <a href="https://go.dev/doc/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <SiGo size="35px"/>
              </a>
              <a href="https://docs.flutter.dev/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <SiFlutter />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <SiJavascript />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex w-full lg:w-1/2 justify-center items-center relative">
        <img src={bannerImg} alt="bannerImg" />
      </div>

    </section>
  );
}

export default Banner
