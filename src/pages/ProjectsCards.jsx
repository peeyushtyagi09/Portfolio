import React, { useEffect, useRef } from 'react' 
const ProjectCard = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 2.0; // 2x speed
      }
    }, []);
    return (
        <>
            <div style={{
                fontFamily: "Fancy Candy"
            }} className=' h-screen w-screen flex flex-col lg:flex-row justify-center items-center  gap-5'>
            <div className='rounded-2xl h-[45%] lg:h-[85%] w-[90%] lg:w-[40%] bg-gray-600 m-1 flex justify-center items-center'>
                <div className='rounded-2xl bg-black h-[95%] w-[97%] m-1 flex flex-col justify-center items-center'>
                <div className="relative w-[98%] h-[82%] bg-blue-200 m-1 rounded-2xl overflow-hidden group flex justify-center items-center">
                    {/* Image that blurs when parent is hovered */}
                    <img
                        className="w-full h-full object-cover overflow-hidden blur-0 group-hover:blur-xl group-hover:scale-110 transition-all duration-500"
                        src="https://www.lummi.ai/api/pro/image/83a17a35-5ac0-4158-800f-39145efa092b?asset=original&cb=igNcdP&auto=format&w=1500"
                        alt=""
                    />

                    {/* Red box with video appears on hover */}
                    <div className=" absolute bg-red-500 w-[70%] h-[70%] rounded-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        <video
                        ref={videoRef}
                        src=""
                        autoPlay
                        loop
                        muted
                        className=" w-full h-full object-cover rounded-2xl"
                        ></video>
                    </div>
                </div>
                    <div className=' w-[98%] h-[15%]  m-1 rounded-2xl flex flex-col justify-between items-center p-1 '>
                            <div className='flex items-center  justify-between w-[98%] lg:h-[45%] text-white h-[97%] rounded-2xl pl-5 pr-5 text-2xl'>
                                <h1>Peeyush</h1>
                                <h1>tyagi</h1>
                            </div>
                            <hr className='bg-white' />
                            <div className='hidden lg:flex items-center justify-center w-[98%] lg:h-[45%] h-[97%] text-white rounded-2xl'>
                                <p>bwdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
                            </div>
                        </div>
                </div>
            </div>

                <div className=' rounded-2xl h-[45%] lg:h-[85%]  w-[90%] lg:w-[40%] bg-gray-600 m-1 flex justify-center items-center'>
                <div className='bg-black h-[95%] w-[97%] m-2 rounded-2xl'>
                <div className="relative w-[98%] h-[82%] bg-blue-200 m-1 rounded-2xl overflow-hidden group flex justify-center items-center">
                <img className='w-full h-full object-cover overflow-hidden blur-0 group-hover:blur-xl group-hover:scale-110 transition-all duration-500' src="https://assets.lummi.ai/assets/QmXfGd1zZr95fK713NDi7fiP4bUtL9QMaqPSSThHdbYEFz?auto=format&w=1500" alt="" />
                    <div className="absolute bg-red-500 w-[70%] h-[70%] rounded-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500">
                        <video
                        ref={videoRef}
                        src=""
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover rounded-2xl"
                        ></video>
                        </div>
                    </div>
                        <div className=' w-[98%] h-[15%] text-white m-1 rounded-2xl flex flex-col justify-between items-center p-1 '>
                            <div className='flex items-center  justify-between w-[98%] lg:h-[45%]  h-[97%] rounded-2xl pl-5 pr-5 text-2xl'>
                                <h1>Peeyush</h1>
                                <h1>tyagi</h1>
                            </div>
                            <div className='hidden lg:flex items-center justify-center w-[98%] lg:h-[45%] h-[97%]  rounded-2xl'>
                                <p>bwdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard