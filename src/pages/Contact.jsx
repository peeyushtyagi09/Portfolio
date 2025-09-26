import React, {useState, useRef} from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = ({openNavbar}) => {
  const navRef1 = useRef(null);
    const [step, setStep] = useState(0);
    const [message, setMessage] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [inputType, setInputType] = useState(""); 

    useGSAP(function() {
        const tl = gsap.timeline();
        tl.from('.mes', {
            scale: 0.9,
            opacity: -5,
            y: 10,
            duration: 1.2,
            stagger: 2.1,
        })
        tl.from('.but', { 
            y: "110%",
            duration: 1.2,
        })
        tl.from('.but1', {
            y: "-100%",
            duration: 1.2,
        }, "<")
        
    })

    const handleContact = () => {
        const tl = gsap.timeline({
          onComplete: () => setStep(step + 1)  // mount WhatsApp/Email only after exit
        });
      
        tl.to(".but", { y: "-110%", duration: 1.2 }, 0);
        tl.to(".but1", { y: "100%", duration: 1.2 }, 0);
      };
      
      useGSAP(() => {
        if (step === 1) {
          gsap.from([".but2", ".but3"], {
            y: (i) => (i === 0 ? "100%" : "-100%"),
            duration: 1.2,
            stagger: 0.2,
            delay: 0.5,
          });
        }
      }, [step]);

    const handleWhatsapp = () => {
        setInputType("phone");
        const tl = gsap.timeline({
            onComplete: () => setStep(step + 1)  // mount WhatsApp/Email only after exit
          });
        
          tl.to(".but2", { y: "-100%", duration: 1.2 }, 0);
          tl.to(".but3", { y: "100%", duration: 1.2 }, 0);
        
    }
    const handleEmail = () => {
        setInputType("email");
        const tl = gsap.timeline({
            onComplete: () => setStep(step + 1)  // mount WhatsApp/Email only after exit
          });
        
          tl.to(".but2", { y: "-100%", duration: 1.2 }, 0);
          tl.to(".but3", { y: "100%", duration: 1.2 }, 0);
    }
    const handleSubmit = () => {
        if (!inputValue) return;
        setMessage( "We will reach you soon.");
        setStep(3);
      };
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
    <div style={{
        fontFamily:"Comic Sans MS"
    }} className="   bg-black h-screen w-screen flex justify-center items-center p-4 flex-col ">
      <div ref={navRef1} className=' text-white sticky h-[10%] w-screen  overflow-hidden bg-transprant flex flex-row justify-between items-center pl-10 pr-10'>
        <div className='overflow-hidden'>
        <h1 style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.1rem]  p-1.5 pb-0 rounded-[20%] text-[#e5e5dd] bg-black '> PE <br/> TY </h1>
        </div>
        <h1 onClick={handleOpen} style={{fontFamily: "Fancy Candy"}}  className='uppercase leading-3.5 text-[1.4rem]  p-2 pb-1  rounded-[20%] text-[#e5e5dd] bg-black  hover:p-3 transition-all duration-500'> menu</h1>
        
      </div>
      <div className=" w-[80%] lg:w-1/2 h-[90%] rounded-2xl shadow-lg flex flex-col ">
        {/* Chat window */}
        <div className="flex-1 p-4 space-y-7 overflow-y-auto ">
          
          {/* Your message */}
          <div className=" mes flex justify-start items-start space-x-2 ">
            <div className="max-w-[70%] bg-green-800 text-white p-2 rounded-4xl rounded-br-sm shadow">
            &nbsp;&nbsp;&nbsp;Hey 👋, glad you’re here.&nbsp;&nbsp;
            </div>
            <img
              src="https://www.lummi.ai/api/pro/image/91b02ca1-5d67-4c70-a828-5f6785e08071?asset=original&cb=o7syvW&auto=format&w=1500"
              alt="me"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          {/* Your message */}
          <div className=" mes flex justify-start items-start space-x-2">
            <div className="max-w-[70%] bg-green-800 text-white p-2 rounded-4xl rounded-br-sm shadow">
            &nbsp;&nbsp;&nbsp;Looking to connect with me?&nbsp;&nbsp;
            </div>
            <img
              src="https://www.lummi.ai/api/pro/image/91b02ca1-5d67-4c70-a828-5f6785e08071?asset=original&cb=o7syvW&auto=format&w=1500"
              alt="me"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          {/* Your message */}
          <div className=" mes flex justify-start items-start space-x-2">
            <div className="max-w-[70%] bg-green-800 text-white p-2 rounded-4xl rounded-br-sm shadow">
            &nbsp;&nbsp;&nbsp;I usually reply quickly—like we’re texting.&nbsp;&nbsp;
            </div>
            <img
              src="https://www.lummi.ai/api/pro/image/91b02ca1-5d67-4c70-a828-5f6785e08071?asset=original&cb=o7syvW&auto=format&w=1500"
              alt="me"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          <div className=" mes flex justify-start items-start space-x-2">
            <div className="max-w-[70%] bg-green-800 text-white p-2 rounded-4xl rounded-br-sm shadow">
            &nbsp;&nbsp;&nbsp;So, tell me—what’s on your mind?&nbsp;&nbsp;
            </div>
            <img
              src="https://www.lummi.ai/api/pro/image/91b02ca1-5d67-4c70-a828-5f6785e08071?asset=original&cb=o7syvW&auto=format&w=1500"
              alt="me"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        {step >= 1 && (
            <div className=" mes flex justify-start items-start space-x-2">
            <div className="max-w-[70%] bg-green-800 text-white p-2 rounded-4xl rounded-br-sm shadow">
            &nbsp;&nbsp;&nbsp;Enter you email or Outlook&nbsp;&nbsp;
            </div>
            <img
              src="https://www.lummi.ai/api/pro/image/91b02ca1-5d67-4c70-a828-5f6785e08071?asset=original&cb=o7syvW&auto=format&w=1500"
              alt="me"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        )}
        {step === 2 && (
            <div className="mes flex justify-end items-start space-x-2">
              <div className="max-w-[70%] bg-green-400 text-white p-3 rounded-4xl rounded-br-sm shadow">
                &nbsp;&nbsp;&nbsp;Enter your email&nbsp;&nbsp;
                <input
                  type={inputType ===  "email"}
                  className="ml-2 p-1 rounded-xl text-black"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  className="ml-2 bg-green-800 text-white rounded-xl px-2 py-1 "
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
              <img
                src="https://www.lummi.ai/api/pro/image/91b02ca1-5d67-4c70-a828-5f6785e08071?asset=original&cb=o7syvW&auto=format&w=1500"
                alt="me"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          )}

          {step === 3 && (
            <div className="mes flex justify-start items-start space-x-2">
              <div className="max-w-[70%] bg-green-800 text-white p-2 rounded-4xl rounded-br-sm shadow">
                &nbsp;&nbsp;&nbsp;{message}&nbsp;&nbsp;
              </div>
              <img
                src="https://www.lummi.ai/api/pro/image/91b02ca1-5d67-4c70-a828-5f6785e08071?asset=original&cb=o7syvW&auto=format&w=1500"
                alt="me"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          )}
          
          
        </div>
        <div className="  flex justify-center items-start space-x-4 mt-6 overflow-hidden  h-40">
           <div className="overflow-hidden h-fit flex  justify-center  rounded-2xl">
           {step === 0 && (
            <>
            <button onClick={handleContact} className="but bg-green-600  text-white px-6 py-3  rounded-2xl shadow hover:bg-green-700 overflow-hidden mr-2 ">
              Hire Me 🚀
            </button>
            <button onClick={handleContact} className="but1 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 ml-2">
              Work With Me 💼
            </button>
            </>
           )}
           {step === 1&& (
            <>
            <button onClick={handleWhatsapp} className="but2 bg-green-600  text-white px-6 py-3  rounded-2xl shadow hover:bg-green-700 overflow-hidden mr-2 ">
            Outlook
            </button>
            <button onClick={handleEmail} className="but3 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 ml-2">
            Email
            </button>
            </>
           )}
           </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
