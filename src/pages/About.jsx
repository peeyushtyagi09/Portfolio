import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const About = ({ openNavbar }) => { 
  const rectRef = useRef(null);
  const navRef1 = useRef(null); 
  const item_container = useRef(null);
 


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

  useGSAP(() => {
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        duration: 10,
        ease: "none",
        repeat: -1, // optional, makes it loop
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      });
    }
  });

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: item_container.current,
        start: "top top",
        end: "+=3000", // long scroll distance
        scrub: true,
        pin: true,
      },
    }).from(".item", { 
      translateY:"100%", 
      stagger: 10,  // items reveal one by one
      duration: 10,
      ease: "power3.inOut",
    }).from(".img_item", { 
      translateY:"100%", 
      stagger: 10,  // items reveal one by one
      duration: 10,
      ease: "power3.inOut",
      pin: true,
    }, 1).from(".text_item", { 
      translateY:"100%", 
      stagger: 10,  // items reveal one by one
      duration: 10,
      ease: "power3.inOut",
      pin: true,
    }, 1).from(".text", { 
      translateY:"100%", 
      opacity: 0,
      stagger: 10,  // items reveal one by one
      duration: 10,
      ease: "power3.inOut", 
    }, 1).to(".text", {
      opacity: 0,  
      translateY:"-100%",
    }).from(".text1", { 
      translateY:"100%", 
      opacity: 0,
      stagger: 10,  // items reveal one by one
      duration: 10,
      ease: "power3.inOut", 
    }, 1).to(".text1", {
      opacity: 0,  
      translateY:"-100%",
    })
  }, []);
  
  
 
  

  return (
    <div className="w-screen h-screen bg-[#e5e5dd] text-black overflow-x-hidden p-0 m-0">
      <div ref={navRef1} className='  sticky h-[10%] w-screen  overflow-hidden bg-transprant flex flex-row justify-between items-center pl-10 pr-10 '>
      <div className='overflow-hidden p-2'>
        <h1 style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.1rem]  p-1.5 pb-0 rounded-[20%] text-[#e5e5dd] bg-black '> PE <br/> TY </h1>
        </div>
        <h1 onClick={handleOpen} style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.4rem]  p-2 pb-1  rounded-[20%] text-[#e5e5dd] bg-black  hover:p-3 transition-all duration-500'> menu</h1>
        
      </div>
      <div className=" realtive w-full h-[90%] flex items-end pl-8 overflow-hidden">
        <div
          style={{ fontFamily: "Fancy Candy" }}
          className="w-screen h-[65%] text-[16vw] md:text-[12vw] leading-none"
        >
          <div className="h-[30%]">
            <h1 className="uppercase p-1">About me</h1>
          </div>
          <div className="flex justify-end h-[70%] p-2">
            <div className="w-[65%] md:w-[45%] h-full text-[3vh] flex items-center p-2 tracking-wide">
              <p className="">
                Hi, I’m Peeyush Tyagi,  <img src="https://assets.lummi.ai/assets/QmR17r3UMUQAUbCewSepbigLKNVfh7y7bBP9HvazgeX5VY?auto=format&w=1500" alt="inline" className="w-20 h-6 rounded-full object-cover inline-block m-1"/>  a B.Tech CSE student passionate about
                creating modern, <img src="https://assets.lummi.ai/assets/QmS7KkcDfDgMmEwerge18CLsaj72YDgW8VrxMQhpoc1PVC?auto=format&w=1500" alt="inline" className="w-20 h-6 rounded-full object-cover inline-block m-1"/> interactive web applications. I specialize in
                React, GSAP animations, <img src="https://assets.lummi.ai/assets/Qmf21zXj9LBU4heQaEvYGfycjnZT7XEU8quW3dMfMFGYpF?auto=format&w=1500" alt="inline" className="w-20 h-6 rounded-full object-cover inline-block m-1"/> and full-stack development, always eager
                <img src="https://assets.lummi.ai/assets/QmfNwAxcX5sHza2xgqXGwMDs78RzyNmUThAXr8rgvQgb3K?auto=format&w=1500" alt="inline" className="w-20 h-6 rounded-full object-cover inline-block m-1"/>to craft engaging user experiences.
              </p>
            </div>
          </div>
        </div>
      </div> 
      <div className=" hidden lg:flex absolute inset-0 w-full h-[90%] z-20 lg:items-end lg:justify-end mt-[5%] pt-[10%] pr-[20%] overflow-hidden">
      <svg className="overflow-hidden" width="1479" height="500" viewBox="0 0 1479 1002" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="path" d="M1 22.6273C86.8921 14.6436 134.739 5.48462 220.94 2.18382C367.64 -3.43355 449.871 12.1999 596.306 22.6273C739.646 32.8343 820.997 31.9835 962.873 54.7527C1051.79 69.023 1102.42 75.6703 1188.68 101.481C1253.06 120.744 1297.21 119.866 1349.97 161.351C1383.12 187.415 1404.56 204.114 1420.35 243.124C1441.14 294.497 1427.77 331.362 1413.02 384.768C1402.89 421.448 1397.85 444.596 1373.43 473.843C1319.96 537.86 1247.54 508.914 1165.22 523.492C1051.96 543.549 986.998 550.245 871.964 551.236C778.456 552.042 726.43 539.484 632.962 536.634C539.67 533.789 481.761 522.927 393.96 536.634C306.16 550.341 246.527 539.611 187.216 599.424C154.428 632.491 133.664 656.908 128.565 703.102C120.027 780.468 183.037 816.655 242.935 866.649C357.438 962.222 471.193 947.997 619.766 932.36C678.628 926.165 708.976 906.228 767.859 900.235C925.495 884.191 1007.96 962.628 1165.22 982.009C1287.05 997.024 1356.23 1001.21 1479 1000.99" stroke=""/>
</svg>
<img  ref={rectRef} className="w-30 h-20 hidden lg:flex" src="./main.gif" alt="" />

      </div>
      <div ref={item_container} className="w-screen h-screen bg-[#e5e5dd] absolute  justify-center items-center flex overflow-hidden">
        <div className=" w-[95%] h-[95%]  absolute items-center justify-center flex">
        <img className="w-full h-full object-cover  top-0 left-0 blur-sm" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728599/QmdWJmGCuyy1NKc23iRHZj1NR6pAsA4ynVL6KpNf98bpkw_of7xhd.avif" />
          <div className="z-50 w-[55%] h-[60%] lg:w-[35%] lg:h-[75%] absolute overflow-hidden flex lg:left-10 top-5 lg:top-auto"> 
          <div className="w-full h-full object-cover absolute top-0 left-0 bg-[#fff5e8] flex flex-col justify-center items-center border-2 rounded-sm">
            <p style={{ fontFamily: "Fancy Candy" }} className=" p-3 ">Do you want to connect with me?</p>
            <div className="w-[90%] h-[75%] border-2 border-black rounded-sm overflow-hidden">
            <img className="w-full h-full object-cover  top-0 left-0" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728599/QmdWJmGCuyy1NKc23iRHZj1NR6pAsA4ynVL6KpNf98bpkw_of7xhd.avif" />
            </div>
            <p style={{ fontFamily: "Fancy Candy" }} className=" pb-3  pt-5">Linkden</p>
          </div>
          <div className="img_item w-full h-full object-cover absolute top-0 left-0 bg-[#fff5e8] flex flex-col justify-center items-center border-2 rounded-sm">
            <p style={{ fontFamily: "Fancy Candy" }} className=" p-3 ">Do you want to connect with me?</p>
            <div className="w-[90%] h-[75%] border-2 border-black rounded-sm overflow-hidden">
            <img className=" w-full h-full object-cover  top-0 left-0 " src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728109/QmXtghv7fNUv9e5nSejRiLAnJLfa1FQgL6RswXqFwRGPE3_j3rv7v.avif" />
            </div>
            <p style={{ fontFamily: "Fancy Candy" }} className=" pb-3  pt-5">Leetcode</p>
          </div>
          <div className="img_item w-full h-full object-cover absolute top-0 left-0 bg-[#fff5e8] flex flex-col justify-center items-center border-2 rounded-sm">
            <p style={{ fontFamily: "Fancy Candy" }} className="z-50 p-3 ">Do you want to connect with me?</p>
            <div className="w-[90%] h-[75%] border-2 border-black rounded-sm overflow-hidden">
            <img className=" w-full h-full object-cover  top-0 left-0" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728049/QmZpt1HAxEJvRs11eyDohysZcLfCa9w6wdkDGRZeoNBsqp_irzljt.avif" />
            </div>
            <p style={{ fontFamily: "Fancy Candy" }} className=" pb-3  pt-5">Github</p>
          </div>
          <div className="img_item w-full h-full object-cover absolute top-0 left-0 bg-[#fff5e8] flex flex-col justify-center items-center border-2 rounded-sm">
            <p style={{ fontFamily: "Fancy Candy" }} className=" p-3 ">Do you want to connect with me?</p>
            <div className="w-[90%] h-[75%] border-2 border-black rounded-sm overflow-hidden">
            <img className=" w-full h-full object-cover  top-0 left-0" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1757227769/QmaMr4C1di9jPe3assvNAwbM1uYujg9cmoo6wcsuDSLV3V_b2p5ig.avif" />
            </div>
            <p style={{ fontFamily: "Fancy Candy" }} className=" pb-3  pt-5">GreekforGreek</p>
          </div>
          <div className="img_item w-full h-full object-cover absolute top-0 left-0 bg-[#fff5e8] flex flex-col justify-center items-center border-2 rounded-sm">
            <p style={{ fontFamily: "Fancy Candy" }} className=" p-3 ">Do you want to connect with me?</p>
            <div className="w-[90%] h-[75%] border-2 border-black rounded-sm overflow-hidden">
            <img className=" w-full h-full object-cover  top-0 left-0" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1757227646/QmXgLyR6n63UMp8H8zL9JgvGw4SWuZrYSWyVEk6aL3XHKN_fzvex9.avif" />
            </div>
            <p style={{ fontFamily: "Fancy Candy" }} className=" pb-3  pt-5">Quara</p>
          </div> 
          </div>
          <div className="absolute z-50 w-[75%] h-[30%] lg:w-[50%] lg:h-[75%]  text-white text-3xl flex bottom-5 lg:left-[45%] lg:bottom-auto flex-col">  
            <div className="w-full h-[25%] lg:h-[15%]  p-1">
              <img className="w-12 lg:w-17 border-2 border-white rounded-[50%] object-cover h-full" src="https://assets.lummi.ai/assets/Qmf39FM3RBBmPKRooWWRfPAq7sSrVvcuau7PVsKKLoReTb?auto=format&w=1500" alt="" />
            </div>
            <div style={{ fontFamily: "cinzel" }} className="h-full w-full   m-1 ">
              <p className="text-[2.5vw] lg:text-[1.5vw] pl-20 lg:pl-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste natus neque impedit ipsam eum, ratione, repellat dignissimos cum unde numquam ea at praesentium obcaecati, sed illo similique? Facilis, cupiditate!</p>
              <p className="text-[2.5vw] lg:text-[1vw] pr-30 pl-3 pt-52 bottom-0 hidden lg:flex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste natus neque impedit ipsam eum, ratione, </p>

            </div>
            <div>

            </div>


          </div>
        </div>
        <div className="item w-[95%] h-[95%]  absolute items-center justify-center flex">
        <img className=" w-full h-full object-cover  top-0 left-0 blur-sm" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728109/QmXtghv7fNUv9e5nSejRiLAnJLfa1FQgL6RswXqFwRGPE3_j3rv7v.avif" /> 
        </div>
        <div className=" item w-[95%] h-[95%]  absolute items-center justify-center flex"> 
        <img className=" w-full h-full object-cover  top-0 left-0 blur-sm" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728109/QmXtghv7fNUv9e5nSejRiLAnJLfa1FQgL6RswXqFwRGPE3_j3rv7v.avif" />
        </div>
        <div className="item w-[95%] h-[95%]  absolute items-center justify-center flex">
        <img className=" w-full h-full object-cover  top-0 left-0 blur-sm" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1757227769/QmaMr4C1di9jPe3assvNAwbM1uYujg9cmoo6wcsuDSLV3V_b2p5ig.avif" /> 
        </div>
        <div className="item w-[95%] h-[95%]  absolute items-center justify-center flex"> 
        <img className=" w-full h-full object-cover  top-0 left-0 blur-sm" src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1757227646/QmXgLyR6n63UMp8H8zL9JgvGw4SWuZrYSWyVEk6aL3XHKN_fzvex9.avif" />
        </div>
      </div>
    </div>
  );
};

export default About;
