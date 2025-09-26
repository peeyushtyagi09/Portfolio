import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Home = ({ openNavbar }) => {
  const textRef1 = useRef(null)
  const Skills1 = useRef(null)
  const Skills2 = useRef(null)
  const Skills3 = useRef(null)
  const Skills4 = useRef(null)
  const mainText = useRef(null)
  const ima = useRef(null)
  const imaText1 = useRef(null);
  const imaText2 = useRef(null);
  const fotterText1 = useRef(null);
  const fotterText2 = useRef(null);
const navRef1 = useRef(null)
const bigText = useRef(null)

  const tl = gsap.timeline()
  useGSAP(() => {
    tl.from(mainText.current.querySelectorAll("span"), {
      opacity: 0,
      scale: 1.5, 
      y:"30",
      filter: "blur(30px)", 
      duration: 1,
      stagger: {
        each: 0.1,
        from: "random"
      },
      ease: "power3.out",
      
    })
    tl.from(ima.current, {
      height: "0%",  
      duration: 0.8,
      ease: "power3.out", 
    });

    tl.from([imaText1.current, imaText2.current, fotterText1.current, fotterText2.current], {
      y: "100%",   
      duration: 1,
      ease: "power3.out", 
    }); 
    tl.from(bigText.current, {
      x: '-100%',
      duration: 2,
      ease: "power3.out",
    })

    tl.from(Skills1.current, {
      y: "100%",
      rotate: '10',
      opacity: 0,
      duration: 0.5,
      ease: "power3.out", 
    });
    tl.from(Skills2.current, {
      y: "100%",
      rotate: '10',
      opacity: 0,
      duration: 0.5,
      ease: "power3.out", 
    }, "+=0.02");
    tl.from(Skills3.current, {
      y: "100%",
      rotate: '10',
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1, // one by one
    }, "+=0.04");
    tl.from(Skills4.current, {
      y: "100%",
      rotate: '10',
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1, // one by one
    }, "+=0.06");

    // Animate text (now inside its own ref)
    tl.from(textRef1.current, {
      y: "100%", 
      duration: 0.5,
      ease: "power3.out", 
    });
  })


  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block overflow-hidden">
        {char}
      </span>
    ));

    const handleOpen = () => { 
      gsap.to(navRef1.current, {
        scaleY:1,          // small bounce up
        duration: 0.1,
        ease: "power3.out",  
        onComplete: openNavbar // then open the navbar overlay
      });
  }
  
  return (
    <div  ref = {navRef1} className='h-screen w-screen overflow-hidden origin-top bg-[#e5e5dd]'>
      <div className='z-50  sticky h-[10%] w-screen  overflow-hidden bg-transprant flex flex-row justify-between items-center pl-10 pr-10'>
        <div className='overflow-hidden p-2'>
        <h1 style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.1rem]  p-1.5 pb-0 rounded-[20%] text-[#e5e5dd] bg-black '> PE <br/> TY </h1>
        </div>
        <h1 onClick={handleOpen} style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.4rem]  p-2 pb-1  rounded-[20%] text-[#e5e5dd] bg-black  hover:p-3 transition-all duration-500'> menu</h1>
        
      </div>
      <div className='h-[90%] w-screen'>
        <div className=' lg:h-[30%] h-[25%]    w-screen bg-[#e5e5dd] items-center justify-center flex  lg:pt-25 '>
          <h1 ref={mainText} style={{
            fontFamily: "Fancy Candy"
          }} className='text-[14vw] text-center  uppercase'>
            {splitText("web developer")}
          </h1>
        </div>
        <div className='lg:h-[70%] h-[75%] w-screen flex flex-col  '>
        <div className='w-screen h-[80%] flex lg:flex-row flex-col'>
        <div className='lg:w-[30%] w-full lg:h-full h-[25%] bg-[#e5e5dd] pb-10 lg:pb-0 '>
          <div className='flex flex-col items-center lg:items-start justify-center lg:pl-44   w-full h-full ' style={{
            fontFamily:"Cinzel ",
            fontWeight: 100,
          }}>
            <h1 ref={Skills1} className='uppercase '>MERN Development</h1>
            <h1 ref={Skills2} className='uppercase' >GSAP & Framer Motion</h1>
            <h1 ref={Skills3} className='uppercase' >Desktop Applications</h1> 
            <h1 ref={Skills4} className='uppercase'>Backend Engineering</h1>
          </div>
        </div>
        <div className='lg:w-[70%] w-full lg:h-full h-[75%] bg-[#e5e5dd] pr-4'>
          <div className='flex items-center justify-center lg:flex-row flex-col xl:pr-64  '>
            <div className=' lg:h-80 lg:w-72 h-60 w-60'>
              <img ref={ima} className='w-full h-full overflow-hidden object-cover' src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728049/QmZpt1HAxEJvRs11eyDohysZcLfCa9w6wdkDGRZeoNBsqp_irzljt.avif" alt="" />
            </div>
            <div className='flex lg:flex-col flex-row justify-between lg:justify-end items-center w-80 lg:w-72 h-10 lg:h-80 gap-2 overflow-hidden'>
            <div className='overflow-hidden'>
            <h1 ref={imaText1} style={{
            fontFamily:"Cinzel ",
            fontWeight: 100,
          }} className='uppercase text-nowrap text-2xl  lg:text-2xl'>latest Work</h1>
            </div>
              <h1 ref={imaText2} style={{
                fontFamily: "Fancy Candy"
              }} className='uppercase lg:text-6xl text-2xl pl-10 p-1'>Sophie’s</h1>
               
            </div>
          </div>
        </div>
        </div>
        <div className='w-full h-[20%] bg-[#e5e5dd] flex  justify-between items-center p-7'>
          <div className='overflow-hidden'>
            <h1 ref={fotterText1} style={{
            fontFamily:"Cinzel ",
            fontWeight: 100,
          }} className=' text-[1.5vw] lg:text-2xl'>Avilable for freelance <br /> <u>peeyushtyagi82@gamil.com</u></h1>
          </div>
          <div className=' pb-20 overflow-hidden'>
            <h1 ref={bigText} style={{
            fontFamily:"Cinzel ",
            fontWeight: 100,
            wordSpacing: '2px',
          }} className='hidden xl:block w-[40vw] uppercase text-center '> I design memorable web experiences for brands OF ALL SIZES.
          I believe authentic storytelling is the key to engaging
          audiences,evoking emotions, and driving conversions. </h1>
          </div>
          <div className='overflow-hidden'>
            <h1 ref={fotterText2} style={{
            fontFamily:"Cinzel ",
            fontWeight: 100,
          }} className='uppercase'>[©Qoreeb2025]</h1>
          </div>
        </div>

        </div>
      </div>
      
    </div>
  )
}

export default Home
