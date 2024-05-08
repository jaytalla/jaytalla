import React from 'react'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const HomeSection = React.memo(() => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
  return (
      <div className='flex justify-center items-center w-full h-screen bg-jt-primary-dark'>
        <div className='absolute -z-1'>
              {init && <Particles
                  id="tsparticles" style={{position: 'relative'}} className='w-full h-screen'
                  particlesLoaded={particlesLoaded}
                  options={{
                    fullScreen: false,
                      fpsLimit: 120,
                      interactivity: {
                        
                          events: {
                              resize: true,
                          },
                          modes: {
                              
                              push: {
                                  quantity: 4,
                              },
                              repulse: {
                                  distance: 200,
                                  duration: 0.4,
                              },
                          },
                      },
                      particles: {
                          color: {
                              value: "#ffffff",
                          },
                          links: {
                              color: "#ffffff",
                              distance: 150,
                              enable: true,
                              opacity: 0.5,
                              width: 1,
                          },
                          move: {
                              direction: "none",
                              enable: true,
                              outModes: {
                                  default: "bounce",
                              },
                              random: true,
                              speed: 2,
                              straight: false,
                          },
                          number: {
                              density: {
                                  enable: true,
                                  area: 800,
                              },
                              value: 80,
                          },
                          opacity: {
                              value: 0.5,
                          },
                          shape: {
                              type: "circle",
                          },
                          size: {
                              value: { min: 1, max: 2 },
                          },
                      },
                      detectRetina: true,
                  }}
              />
              }
        </div>
        
        <div className='grid grid-cols-2 w-full h-screen'>
            <div className=''></div>
            {/* CONTENTS CONTAINER  */}
            <div className='flex justify-center flex-col items-start space-y-5 p-20'>
                  <h1>Hi! I'm Jay Talla</h1>
                  <h1>WEBDEV / ANIMATOR</h1>
                  <p className='text-jt-white'>A Web Developer specializing in crafting captivating online experiences. <br></br>Let's build something awesome for the web together!</p>
                  <button className='btn-primary'>Contact Me</button>
            </div>
        </div>
    </div>
  )
});

export default HomeSection