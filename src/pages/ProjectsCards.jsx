// ProjectCard.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"

const ProjectCard = ({ left, right }) => {

  const navigate = useNavigate();
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);

  useEffect(() => {
    if (leftVideoRef.current) leftVideoRef.current.playbackRate = 2.0;
    if (rightVideoRef.current) rightVideoRef.current.playbackRate = 2.0;
  }, []);

  return (
    <div
      style={{ fontFamily: "Fancy Candy" }}
      className="h-screen w-screen flex flex-col lg:flex-row justify-center items-center gap-5"
    >
      {/* Left card */}
      <div className="rounded-2xl h-[45%] lg:h-[85%] w-[90%] lg:w-[40%] bg-gray-600 m-1 flex justify-center items-center">
        <div className="rounded-2xl bg-black h-[95%] w-[97%] m-1 flex flex-col justify-center items-center">
          <div className="relative w-[98%] h-[82%] m-1 rounded-2xl overflow-hidden group flex justify-center items-center">
            <img
              className="w-full h-full object-cover blur-0 group-hover:blur-xl group-hover:scale-110 transition-all duration-500"
              src={left.image}
              alt={left.title}
            />
            <div className="absolute bg-red-500 w-[70%] h-[70%] rounded-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <video
              onClick={() => {
                if (left.linkType === "internal") {
                  navigate(left.link); // React Router internal navigation
                } else {
                  window.open(left.link, "_blank"); // open external in new tab
                }
              }}
                ref={leftVideoRef}
                src={left.video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="w-[98%] h-[15%] m-1 rounded-2xl flex flex-col justify-between items-center p-1 text-white">
            <div className="flex items-center justify-between w-[98%] h-[45%] pl-5 pr-5 text-2xl">
              <h1>{left.title}</h1>
              <h1>{left.subtitle}</h1>
            </div>
            <hr className="bg-white w-full" />
            <div className="hidden lg:flex items-center justify-center w-[98%] h-[45%]">
              <p>{left.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right card */}
      <div className="rounded-2xl h-[45%] lg:h-[85%] w-[90%] lg:w-[40%] bg-gray-600 m-1 flex justify-center items-center">
        <div className="bg-black h-[95%] w-[97%] m-2 rounded-2xl flex flex-col">
          <div className="relative w-[98%] h-[82%] m-1 rounded-2xl overflow-hidden group flex justify-center items-center">
            <img
              className="w-full h-full object-cover blur-0 group-hover:blur-xl group-hover:scale-110 transition-all duration-500"
              src={right.image}
              alt={right.title}
            />
            <div className="absolute bg-red-500 w-[70%] h-[70%] rounded-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <video
              onClick={() => {
                if (right.linkType === "internal") {
                  navigate(right.link);
                } else {
                  window.open(right.link, "_blank");
                }
              }}
                ref={rightVideoRef}
                src={right.video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="w-[98%] h-[15%] m-1 rounded-2xl flex flex-col justify-between items-center p-1 text-white">
            <div className="flex items-center justify-between w-[98%] h-[45%] pl-5 pr-5 text-2xl">
              <h1>{right.title}</h1>
              <h1>{right.subtitle}</h1>
            </div>
            <hr className="bg-white w-full" />
            <div className="hidden lg:flex items-center justify-center w-[98%] h-[45%]">
              <p>{right.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
