import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react' 
import { useNavigate } from 'react-router-dom'
const Navbar = ({ closeNavbar }) => {
  const navigate = useNavigate();
    const Home = useRef(null)
    const About = useRef(null)
    const Projects = useRef(null) 
    const Contact = useRef(null);
    const text1 = useRef(null)
    const text2 = useRef(null)
    const [isOpen, setIsOpen] = useState(true)
    const navRef = useRef(null)

    useGSAP(() => {
        gsap.set(navRef.current, { scaleY: 0, transformOrigin: "top" })
        const tl = gsap.timeline()
        
            // Open panel
            tl.to(navRef.current, {
                scaleY: 1,
                duration: 0.7,
                ease: "power2.out",
            })
        tl.from(Home.current.querySelectorAll("span span"), {
            opacity: 0,
            duration:0.2,
            ease: "power4.in",
            stagger: 0.1     // one by one
          });
          tl.from(About.current.querySelectorAll("span span"), {
            opacity: 0,
            duration: 0.2,
            ease: "power4.in",
            stagger: 0.1     // one by one
          });
          tl.from(Projects.current.querySelectorAll("span span"), {
            opacity: 0,
            duration: 0.2,
            ease: "power4.in",
            stagger: 0.1     // one by one
          });
          tl.from(Contact.current.querySelectorAll("span span"), {
            opacity: 0,
            duration: 0.2,
            ease: "power4.in",
            stagger: 0.1     // one by one
          });
          tl.from([text1.current, text2.current], {
              y: "100%",
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
          })
    }) 
    const handleClose = () => {
        gsap.to(navRef.current, {
          scaleY: 0,
          duration: 0.6,
          ease: "power2.inOut",
          transformOrigin: "top",
          onComplete: closeNavbar,
        })
      } 
      
      const animatingMap = useRef(new Map());

const handleEnter = (wordRef) => {
  if (!wordRef) return;

  // if this specific word is already animating, block
  if (animatingMap.current.get(wordRef)) return;

  animatingMap.current.set(wordRef, true); // lock this word

  gsap.from(wordRef.querySelectorAll("span span"), {
    x: "-200%",
    ease: "power3.out",
    stagger: 0.1,
    onComplete: () => {
      animatingMap.current.set(wordRef, false); // unlock only this word
    },
  });
};
const handleNavClick = (path) => {
  navigate(path); // navigate after animation
  gsap.to(navRef.current, {
    scaleY: 0,
    duration: 0.6,
    ease: "power2.inOut",
    transformOrigin: "top",
    onComplete: () => {
      // Now the animation is done
      closeNavbar(); // optional if you want to remove it from DOM
      
    },
  });
};



    
  return (
    <div ref={navRef} className=' fixed bg-black w-screen h-screen p-4 pr-8 overflow-hidden text-[#e5e5dd] z-50'>
         <div className='h-[10%] w-screen overflow-hidden  flex flex-row justify-between items-center pr-10'>
        <div className='overflow-hidden'>
        <h1 style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.1rem]  p-1.5 pb-0 rounded-[20%] text-[#e5e5dd] bg-black '> PE <br/> TY </h1>
        </div>
        <div className='hidden lg:flex  overflow-hidden'>
        <h1  onClick={() => {handleNavClick('./contact')}}  className=''> <span>[</span> Contact <span>]</span></h1>
        </div>
        <h1 onClick={handleClose} style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.4rem]  p-2 pb-1  rounded-[20%] text-[#e5e5dd] bg-black  hover:p-3 transition-all duration-500'>   close </h1>
        
      </div>

      <div className='w-screen h-[75%] overflow-hidden pt-[8vh]'>
        <div onClick={() => handleNavClick('./')} className='overflow-hidden   p-2'>
            <h1 ref={Home} 
    onMouseEnter={() => handleEnter(Home.current)}  className='uppercase text-[16vw] lg:text-[8vw] leading-none tracking-[-0.05em]'>
            { "Home".split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                <span 
                  className=" cha inline-block overflow-hidden">{char}</span>
                </span>
            ))}
            </h1>
        </div>
        <div onClick={() => {handleNavClick('./about')}} className='overflow-hidden  p-2'>
            <h1 ref={About} onMouseEnter={() => handleEnter(About.current)} className='uppercase text-[16vw] lg:text-[8vw]  leading-none tracking-[-0.05em]'>
            { "About".split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                <span className="inline-block">{char}</span>
                </span>
            ))}
            </h1>
        </div>
        <div onClick={() => {handleNavClick('./projects')}} className='overflow-hidden p-2'>
            <h1 ref={Projects} onMouseEnter={() => handleEnter(Projects.current)} className='uppercase text-[16vw] lg:text-[8vw]  leading-none tracking-[-0.05em]'>
            { "Projects".split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                <span className="inline-block">{char}</span>
                </span>
            ))}
            </h1>
        </div>
        <div onClick={() => {handleNavClick('./contact')}} className='visible lg:hidden overflow-hidden p-2'>
            <h1 ref={Contact} onMouseEnter={() => handleEnter(Contact.current)} className='uppercase text-[16vw] lg:text-[8vw]  leading-none tracking-[-0.05em]'>
            { "Contact".split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                <span className="inline-block">{char}</span>
                </span>
            ))}
            </h1>
        </div>
      </div>
      <div className='w-full h-[15%]  flex  justify-between items-center p-7'>
          <div className='overflow-hidden'>
            <h1 ref={text1} style={{
            fontFamily:"Cinzel ",
            fontWeight: 100,
          }} className=' text-[1.5vw] lg:text-2xl'>Avilable for freelance <br /> <u>peeyushTyagi82@gamil.com</u></h1>
          </div> 
          <div className='overflow-hidden'>
            <h1 ref={text2} style={{
            fontFamily:"Cinzel ",
            fontWeight: 100,
          }} className=''>[©Qoreeb2025]</h1>
          </div>
        </div>
    </div>
  )
}

export default Navbar
