import React, { useEffect, useState } from 'react'


const HomePage = ((mx, my) => {

  useEffect(() => {
    console.log("move to x: " + mx.mx + " and y: " + my.my);
  }, [mx, my]);

  return (
    <>
      <div style={{ top: mx, left: my }} className='z-20 rounded-[100%] absolute w-[50px] h-[50px] bg-jt-white'>

      </div>
    </>
  )
});

export default HomePage