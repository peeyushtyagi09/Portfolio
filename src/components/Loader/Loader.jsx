import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ onFinish }) => {
  const imagediv = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const images = [
<<<<<<< HEAD
    "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728049/QmZpt1HAxEJvRs11eyDohysZcLfCa9w6wdkDGRZeoNBsqp_irzljt.avif",
    "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728109/QmXtghv7fNUv9e5nSejRiLAnJLfa1FQgL6RswXqFwRGPE3_j3rv7v.avif",
    "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758728599/QmdWJmGCuyy1NKc23iRHZj1NR6pAsA4ynVL6KpNf98bpkw_of7xhd.avif"
=======
    "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758726756/QmNap6twUge7A9NCYeZZ3kKYyzjXgm9prmhhWmBX5ArQLn_pbxpde.avif",
    "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758726808/ab008cda-1b39-4ccf-a2fb-7a0fad08faa2_nfhyts.avif",
    "https://res.cloudinary.com/djlcf4ix9/image/upload/v1758726965/QmUWFwoYRUnF3XnCAs7eviJP6HW8Z6JADkmiBTpEJPDrDx_r6uwvx.avif"
>>>>>>> e07735181995d6510fd51757e0116d76244f1f2a
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinish) onFinish();
      }
    });

    // Animate text (now inside its own ref)
    tl.from(textRef1.current.querySelectorAll("span"), {
        y: "100%",
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.1, // one by one
      });
    // second word letters (starts after first finishes)
    tl.from(textRef2.current.querySelectorAll("span"), {
        y: "100%",
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.06
      }, "+=0.08");
      const isDesktop = window.innerWidth >= 1024; 

      tl.from(imagediv.current, {
        height: isDesktop ? "auto" : 0,   // height animation for mobile
        width: isDesktop ? 0 : "auto",    // width animation for desktop
        opacity: 0,
        duration: 1,
      });

    // animate each image one after another
    images.forEach((_, i) => {
      tl.to(`.image-${i}`, {
        height: "0%",
        delay: 0.5,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }); 
    tl.to(textRef1.current.querySelectorAll("span"), {
        y: "-100%",
        opacity: 0,
        duration: 0.2,
        ease: "power3.out",
        stagger: 0.1, // one by one
      });

    
      tl.to(imagediv.current, {
        height: isDesktop ? "auto" : 0,   // height animation for mobile
        width: isDesktop ? 0 : "auto",    // width animation for desktop
        opacity: 0,
        duration: 0.5,
      });
  tl.from(textRef2.current.querySelectorAll("span"), {
    x: "-100%",
    opacity: 0,
    duration: 0.2,
    ease: "power3.out",
    stagger: 0.06
  }, "-=0.08");
  }, { scope: imagediv });
  


   // Utility to wrap each letter in <span>
   const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block overflow-hidden">
        {char}
      </span>
    ));


  return (
    <div
      style={{ fontFamily: "Fancy Candy" }}
      className="w-screen h-screen bg-[#e5e5dd] overflow-hidden flex items-center justify-center"
    >
      <div className="main h-1/2 w-1/2 flex flex-col lg:flex-row items-center gap-4 justify-center">
        <div className=" flex h-fit overflow-hidden">
        <h1 ref={textRef1} className="uppercase text-3xl flex gap-1">
            {splitText("peeyush")}
          </h1>
        </div>

        <div
          ref={imagediv}
          className="img h-60 w-60 relative overflow-hidden"
        >
          {images.map((src, i) => (
            <img
              key={i}
              className={`image-${i} absolute top-0 left-0 h-full w-full object-cover`}
              src={src}
              alt=""
              style={{ zIndex: images.length - i }} // top image first
            />
          ))}
        </div>

        <div className="text2 flex h-fit">
        <h1 ref={textRef2} className="uppercase text-3xl flex gap-1">
            {splitText("Tyagi")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
