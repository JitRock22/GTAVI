import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('.vi-mask-group', {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to('.vi-mask-group', {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        },
      })

  }, [])
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale:1,
      rotate:0,
      delay:"-1",
      duration:2,
      ease:"Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale:1.1,
      rotate:0,
      delay:"-0.8",
      duration:2,
      ease:"Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale:1.1,
      rotate:0,
      delay:"-0.8",
      duration:2,
      ease:"Expo.easeInOut",
    });
     gsap.to(".character", {
      scale:0.5,
      x:"-50%",
      bottom:"-70%",
      rotate:0,
      delay:"-0.8",
      duration:2,
      ease:"Expo.easeInOut",
    });

   
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent &&
        <div className='main w-full bg-black rotate-[-10deg] scale-[1.5]'>
          <div className='landing overflow-none w-full h-screen bg-black-500'>
            <div className='navbar absolute top-0 left-0 z-10 w-full py-10 px-10'>
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className='imagesdiv overflow-hidden relative w-full h-screen'>
              <img className=' sky scale-[1.2] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
              <img className=' bg scale-[1.1] rotate-[-3deg] absolute top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
              <div className='text text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2'>
                <h1 className='text-[4rem] leading-none -ml-30'>grand</h1>
                <h1 className='text-[4rem] leading-none -ml-15'>theft</h1>
                <h1 className='text-[4rem] leading-none -ml-30'>auto</h1>
              </div>
              <img className='absolute character -bottom-[200%] left-1/2 transform -translate-x-1/2  scale-60 rotate-[-10deg]' src='./girlbg.png' alt="" />
            </div>
            <div className='btmbar text-white absolute bottom-0 left-0 w-full py-8 px-10 bg-gradient-to-t from-black to-transparent'>
              <div className="flex m-1.5 items-center">

                <i className=" scroll-btn text-2xl ri-arrow-down-line"></i>

              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
            <div className='w-full h-screen flex items-center justify-center bg-black'>
              <div className='cntnr flex w-full h-[80%] text-white'>
                <div className='limg relative w-1/2 h-full '>
                  <img src="./imag.png"
                    className='absolute top-1/2 left-1/2 scale-90 -translate-x-1/2 -translate-y-1/2'
                    alt="" />
                </div>
                <div className='rimg w-1/2 px-10'>
                  <h1 className='text-4xl'>Not Hunting</h1>
                  <h1 className='text-4xl'>Still Running</h1>
                  {/* <br /> */}
                  <p className='mt-10 text-xs font-[Helvetica_Now_Display]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt laborum doloremque adipisci reiciendis delectus autem rem tempore iure, debitis soluta nulla, sit eum in illo! Obcaecati sint voluptatibus delectus.
                    Perferendis, commodi eaque atque asperiores velit error harum ab et, non beatae sequi? Molestias, obcaecati rem atque, velit asperiores magni, commodi quam animi repellat molestiae officia enim possimus explicabo praesentium!
                    Commodi obcaecati, doloribus, quas magnam dolorem, ex minus in ipsa totam velit sint quam! Nesciunt, explicabo deserunt provident totam, possimus rem debitis tenetur pariatur distinctio libero, deleniti recusandae doloribus odit.

                  </p>
                  <p className='mt-10 text-xs font-[Helvetica_Now_Display]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed pariatur cupiditate doloribus corporis, tempora quaerat ullam ipsa? Esse, sunt eaque!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed pariatur cupiditate doloribus corporis, tempora quaerat ullam ipsa? Esse, sunt eaque!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed pariatur cupiditate doloribus corporis, tempora quaerat ullam ipsa? Esse, sunt eaque!
                  </p>
                  <button className="bg-yellow-500 px-4 py-4  text-black mt-10 text-2xl rounded-xl">
                    Download Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>}
    </>
  )
}

export default App
