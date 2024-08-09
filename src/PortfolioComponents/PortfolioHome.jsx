import React, { useEffect, useMemo, useState } from 'react';

import suraj from '../PortfolioComponents/suraj.png';
import html from '../PortfolioComponents/html.png';
import css from '../PortfolioComponents/css.png';
import javas from '../PortfolioComponents/java.png';
//import JAVASCRIPT from '../PortfolioComponents/.png';
import NODE from '../PortfolioComponents/node.png';
import TAILWIND from '../PortfolioComponents/tailwind.png';
import react from '../PortfolioComponents/react.png';
import EXPRESS from '../PortfolioComponents/ex.png';
import GIT from '../PortfolioComponents/git.png';
import vercel from '../PortfolioComponents/vercel.png';
import Cpp from '../PortfolioComponents/c++.png';
import db from '../PortfolioComponents/mongo.png';
import './Anim.css';
import { useNavigate } from 'react-router-dom';


function Portfolio() {
  const navigate =useNavigate();

  const array = useMemo(() => ['BackEnd Developer', 'Frontend Developer', 'Api Developer', 'Full-Stack Developer', 'Mern-Stack Developer'], []);
  const [renderData, setRenderData] = useState(array[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [array]);

  useEffect(() => {
    setRenderData(array[index]);
  }, [index, array]);


  const handleTheorySection=()=>{
    navigate('/theory');
  }

  return (
    <>
    <div className='w-full h-auto bg-gradient-to-tl from-slate-200 via-gray-300 to-slate-200 pt-4 pr-4 pb-16'>
      <div className=' w-full md:w-1/2 h-10 md:h-8 rounded-xl shadow-xl shadow-cyan-700 transform md:translate-x-full font-mono text-lg md:text-xl  font-normal md:font-bold flex justify-between p-2 md:p-1 md:ml-0 ml-1 '>
        <h2 className='text-red-600 md:ml-8 hover:underline'> <a href="#Projects">Projects<span className='text-green-500'>(4)</span></a></h2>
        <h2 className='text-yellow-800 hover:underline'><a href="#Skills">Skills</a></h2>
        <h2 className='text-orange-800 md:mr-8 hover:underline'> <a href="#contact">Contact Me</a></h2>
        <h2 className='text-green-800 md:mr-8 hover:underline cursor-pointer' onClick={handleTheorySection} > Theory</h2>
      </div>

      <div className='w-full h-auto md:mt-12    md:flex md:justify-center gap-2 md:gap-4   md:space-x-44'>
        <div className='w-full md:w-1/3 h-full relative top-8 md:top-44 space-y-3 md:space-y-5 p-1 '>
          <div>
            <h1 className='font-bold text-2xl md:text-3xl text-sky-600 '>Hi! Suraj Singh Deo</h1>
            <h2 className=' font-semibold md:font-mono md:text-2xl text-gray-700'>I'm a <span className='md:text-3xl md:font-extrabold font-serif text-orange-600'>{renderData}</span></h2>
          </div>


          <p className='md:pt-10 text-sm text-gray-800'>I'm a passionate software developer, showcasing my journey through diverse projects, innovative solutions, and a commitment to crafting high-quality applications. Explore my work and experiences here <span className='text-lg font-bold font-mono text-orange-600'>.</span>
          </p>
          <div className='flex gap-4'>
            <div className='w-28 h-8   rounded shadow-xl transform duration-1000 hover:bg-white hover:text-orange-600 shadow-cyan-700 bg-orange-600 text-white pl-7 p-1 cursor-pointer font-medium '>
              <span> <a href="#contact">Hire Me</a></span>

            </div>
            <a href="/Resume/finalr.pdf" download="finalr.pdf" target="_blank" rel="noopener noreferrer" > <div className='w-28 h-8   rounded shadow-xl transform duration-1000 hover:bg-white hover:text-green-600 shadow-cyan-700 bg-green-600 text-white pl-7 p-1 cursor-pointer font-medium '>
                <span>Resume</span>

              </div>
            </a>
          </div>
        </div>
        <div className=' w-full md:w-1/3 h-auto p-2  md:p-4 relative top-8 md:top-12 overflow-hidden rounded-xl md:rounded-lg grow-shrink shadow-xl shadow-cyan-700 bg-slate-400 md:border-4 border-2 transform duration-700 hover:p-0 hover:rounded-xl cursor-pointer'>

          <img src={suraj} alt='developer' className=' relative mt-2 md:top-0 w-full h-full border-1 md:border-2 object-cover rounded-se-full  md:rounded-xl shadow-inner shadow-slate-700 bg-slate-700' />

        </div>


      </div>


      <div className='project-section ml-2 md:ml-3 w-full md:border-4 h-auto pt-28 mt-16 pb-16 md:pl-16  bg-gradient-to-tl from-gray-200 via-slate-600 to-gray-200  space-y-6 md:space-y-20 text-center' id='Projects'>
        <h1 className='font-extrabold text-6xl text-orange-600 relative -top-16'>PROJECTS</h1>
        <div className='w-full   '>
          <h1 className='  text-xl md:text-4xl text-white font-bold'>Cam<span className='text-yellow-500'>Sharp</span></h1>
        </div>
        <div className='relative w-full  md:w-2/3 md:border-2 h-[500px] rounded-lg shadow-xl shadow-cyan-700 overflow-hidden cursor-pointer'>
          <iframe src="https://camsharp.vercel.app/" frameborder="0" className='w-full h-full object-cover' title='CamSharp'></iframe>

        </div>
        <div className='w-full text-center '>
          <h1 className='text-xl md:text-4xl text-white font-bold'>Gomu<span className='text-blue-400'>Ku</span></h1>
        </div>

        <div className=' relative md:left-96 w-full md:w-2/3 md:border-2 h-[500px] rounded-lg shadow-xl shadow-cyan-700 overflow-hidden cursor-pointer'>
          <iframe src="https://gomoku-gray.vercel.app/" frameborder="0" className='w-full h-full object-cover' title='Gomuku'></iframe>

        </div>
        <div className='w-full text-center '>
          <h1 className='text-xl md:text-4xl text-black font-bold'>Path<span className='text-yellow-500'>Shala</span></h1>
        </div>
        <div className=' relative w-full md:w-2/3 md:border-2 h-[500px] rounded-lg shadow-xl shadow-cyan-700 overflow-hidden cursor-pointer'>
          <iframe src=" https://pathshala-ruby.vercel.app/" frameborder="0" className='w-full h-full object-cover' title='Pathshala'></iframe>

        </div>

        <div className='w-full text-center '>
          <h1 className='text-xl md:text-4xl text-white font-bold'>Code<span className='text-fuchsia-700'>Saarthi</span></h1>
        </div>


        <div className=' relative max-w-full md:left-96 md:w-2/3 md:border-2 h-[500px] rounded-lg shadow-xl shadow-cyan-700 overflow-hidden cursor-pointer'>
          <iframe src="https://codesaarthi.com/" frameborder="0" className='w-full h-full object-cover' title='Codesaarthi'></iframe>

        </div>


      </div>


      <div className=' w-full h-auto bg-transparent  md:flex justify-center md:space-x-32 pt-12 md:pt-28 pb-12' id='Skills'>


        <div className=' w-full md:w-1/3 h-auto  text-center -space-y-2'>
          <h1 className=' text-3xl md:text-6xl text-gray-700 font-extrabold'>Me and</h1>
          <h1 className='text-xl md:text-3xl text-orange-700 font-extrabold font-sans ml-28 md:ml-44'> My Tech Stack</h1>

          <p className='pt-10 text-md font-mono text-gray-800'>
            I am Suraj Singh Deo, a Computer Science Engineering graduate from Trident Academy of Technology, Bhubaneswar, Odisha, with a B.Tech degree completed between 2020 and 2024. I have a deep passion for development and specialize in creating exceptional websites and applications. My dedication to crafting innovative and high-quality solutions drives my work, and I continually strive to enhance user experiences through my development skills.
          </p>
        </div>
        <div className='w-full md:w-1/3 h-auto shadow-xl shadow-cyan-700 ml-2 md:ml-0  rounded-2xl bg-gray-800 grow-shrink pt-3 pb-3 mt-6 md:pt-6 flex flex-wrap gap-7 md:gap-2 md:pb-6'>
          <img src={html} alt="HTML" className='w-28 h-28 ml-2  rounded-xl shadow-xl shadow-cyan-700 bg-gray-600 md:ml-1' />
          <img src={css} alt="CSS" className='w-28 h-28  rounded-xl shadow-xl shadow-cyan-700 bg-gray-600' />
          <img src={javas} alt="JAVASCRIPT" className='w-28 h-28  rounded-xl shadow-xl shadow-cyan-700 bg-gray-600' />
          <img src={react} alt="TAILWIND" className='w-28 h-28  ml-2 md:ml-0 rounded-xl shadow-xl shadow-cyan-700 bg-gray-600' />

          <img src={TAILWIND} alt="REACT" className='w-28 h-28  rounded-xl shadow-xl shadow-cyan-700 bg-gray-600 ml-1' />
          <img src={NODE} alt="NODE" className='w-28 h-28  rounded-xl shadow-xl shadow-cyan-700 bg-gray-600' />
          <img src={EXPRESS} alt="EXPRESS" className='w-28 h-28 ml-2 md:ml-0 rounded-xl shadow-xl shadow-cyan-700 bg-gray-600' />
          <img src={db} alt="MONGO" className='w-28 h-28  rounded-xl shadow-xl shadow-cyan-700 bg-gray-600' />
          <img src={GIT} alt="GIT" className='w-28 h-28  rounded-xl shadow-xl shadow-cyan-700 bg-gray-600 md:ml-16' />
          <img src={vercel} alt="VERCEL" className='w-28 h-28 ml-20 md:ml-0 rounded-xl shadow-xl shadow-cyan-700 bg-gray-600' />
          <img src={Cpp} alt="C++" className='w-28 h-28  rounded-xl shadow-xl shadow-cyan-700 bg-gray-600' />

        </div>

      </div>

      <div className='contact-section w-full h-auto pt-28 mt-12 ml-2 pb-16 bg-gradient-to-tl from-gray-200 via-slate-600 to-gray-200  md:space-y-20 text-center' id='contact'>
        <h1 className='font-extrabold text-xl md:text-6xl text-orange-600 relative -top-12'>CONTACT WITH ME</h1>



        <div className='flex justify-center space-x-8'>
          {/* LinkedIn */}
          <a href='www.linkedin.com/in/suraj-singh-deo' target='_blank' className='text-4xl text-blue-950'>
            <i className='fab fa-linkedin'></i>
          </a>

          {/* GitHub */}
          <a href='https://github.com/Surajsdeo1' target='_blank' rel='noopener noreferrer' className='text-4xl text-black'>
            <i className='fab fa-github'></i>
          </a>

          {/* Instagram */}
          <a href='https://www.instagram.com/dsurajsingh15' target='_blank' rel='noopener noreferrer' className='text-4xl  text-pink-900'>
            <i className='fab fa-instagram'></i>
          </a>

          {/* Email */}
          <a href='mailto:surajsinghdeo9@gmail.com' className='text-4xl text-orange-700'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </div>
      <div className='w-64 h-8 rounded-xl shadow-xl shadow-cyan-700  font-mono text-xl font-bold flex justify-start gap-12 p-1 '>
        <h2 className='text-red-600 hover:underline'> <a href="#Projects">Projects<span className='text-green-500'>(4)</span></a></h2>
        <h2 className='text-yellow-800 hover:underline'><a href="#Skills">Skills</a></h2>


      </div>


    </div>
    </>
   
  );
}

export default Portfolio;
