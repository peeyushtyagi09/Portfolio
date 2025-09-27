import React, {useRef, useEffect, useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei" 
import * as THREE from 'three'
import Pro from '../components/projects/Project'
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";  
import ProjectCard from './ProjectsCards'


gsap.registerPlugin(ScrollTrigger);
const Projects = ( {openNavbar}) => {
  const projectData = [
    {
      image: "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758733372/Screenshot_2025-09-08_180200_qk3to7.png",
      video: "https://res.cloudinary.com/djlcf4ix9/video/upload/v1758733240/SkillSwap_-_24_September_2025_g18h5j.mp4",
      title: "SkillSwap",
      subtitle: "09-10-2025",
      description: "in this project user came and swap their skills.",
      link: "https://skillswap-hxun.vercel.app/"
    },
    {
      image: "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758733343/Screenshot_2025-09-24_212011_jpgb2t.png",
      video: "https://res.cloudinary.com/djlcf4ix9/video/upload/v1758729547/Vite_React_-_24_September_2025_qgdk0m.mp4",
      title: "K72",
      subtitle: "09-11-2025",
      description: "This project is a complete Clone of a Award winning website. that is my best frontend work.",
      link: "https://k72-delta.vercel.app/"
    },
    {
      image: "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758733288/Screenshot_2025-09-24_212127_i2pig9.png",
      video: "https://res.cloudinary.com/djlcf4ix9/video/upload/v1758733174/Vite_React_-_24_September_2025_1_c5dgkb.mp4",
      title: "Chat app",
      subtitle: "09-12-2025",
      description: "This is just a Simple Chat app not anything especially cool.",
      link: "https://efgb.netlify.app/"
    }, 
    {
      image: "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758733343/Screenshot_2025-09-24_212011_jpgb2t.png",
      video: "https://res.cloudinary.com/djlcf4ix9/video/upload/v1758729547/Vite_React_-_24_September_2025_qgdk0m.mp4",
      title: "Project 1",
      subtitle: "Subtitle 1",
      description: "Description of project 1",
      link: "https://efgb.netlify.app/"
    },
  ];
  const navRef1 = useRef(null);
 
  const containerRef = useRef(null); 
  const [fov, setFov] = useState(35);

  // Handle window size for FOV
  useEffect(() => {
    const updateFov = () => {
      setFov(window.innerWidth < 768 ? 45 : 35);
    };
    updateFov();
    window.addEventListener("resize", updateFov);
    return () => window.removeEventListener("resize", updateFov);
  }, []);

  // Marquee animation
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(".Teact1", {
        xPercent: -100,
        repeat: -1,
        ease: "linear",
        duration: 5,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);  
  const handleOpen = () => { 
    if (navRef1.current) {
      gsap.to(navRef1.current, {
        scaleY: 1,          // small bounce up
        duration: 0.1,
        ease: "power3.out",  
        onComplete: openNavbar // then open the navbar overlay
      });
    }
  };

  return (
    <div className='w-screen min-h-screen  bg-black overflow-x-hidden'>
       <div ref={navRef1} className=' text-white sticky h-[10%] w-screen  overflow-hidden bg-transprant flex flex-row justify-between items-center pl-10 pr-10'>
        <div className='overflow-hidden'>
        <h1 style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.1rem]  p-1.5 pb-0 rounded-[20%] text-[#e5e5dd] bg-black '> PE <br/> TY </h1>
        </div>
        <h1 onClick={handleOpen} style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.4rem]  p-2 pb-1  rounded-[20%] text-[#e5e5dd] bg-black  hover:p-3 transition-all duration-500'> menu</h1>
        
      </div>
        <div className='  w-screen h-screen flex justify-center items-center'>
        <Canvas  flat
        dpr={[1, 1.5]} // render scale for performance
        camera={{ fov, position: [0, 0, 4] }}
      >
        <OrbitControls enableRotate={false} enablePan={false} enableZoom={false}/>
        <ambientLight intensity={6} />
        <pointLight position={[10, 10, 10]} intensity={50} /> 
        <Pro/>
            <EffectComposer>
                <Bloom    
                intensity={0.6}
                luminanceThreshold={1.4}
                luminanceSmoothing={0.05}
                resolutionScale={5}
                kernelSize={3}
                mipmapBlur
                />
                <ToneMapping/>
            </EffectComposer>
        </Canvas>
        </div> 

        <div  ref={containerRef} className=" h-[20vh] text-[6rem] w-screen  overflow-x-hidden  bg-[#030303] flex items-center pt-5 pb-5 ">
      <div className="Teact1 flex uppercase text-white whitespace-nowrap animate-scroll">
        <span className="flex" style={{
          fontFamily: "Fancy Candy"
        }}>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
        </span>
        <span className="flex" style={{
          fontFamily: "Fancy Candy"
        }}>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
          <p className="pr-10">bonjour@k72.ca</p>
        </span>
      </div>
    </div> 
    <div className="bg-black">
      {/* First screen with 2 cards */}
      <ProjectCard left={projectData[0]} right={projectData[1]} />

      {/* Second screen with 2 cards */}
      <ProjectCard left={projectData[2]} right={projectData[3]} />
    </div>

    </div>
    
  )
}

export default Projects
