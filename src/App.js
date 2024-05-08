import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './pages/Navbar';
import Sections from './pages/Sections';

function App() {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [mx,setMX] = useState();
  // const [my, setMY] = useState();
  // const handleMouseMove = (event) => {
  //   setMX(event.clientX - 25);
  //   setMY(event.clientY - 25);
  //   console.log("moving" + mx + " - " + my);
  // };
  return (
    <div>
      {/* <div style={{ position: 'fixed', top: my, left: mx, }} className='filter blur-2xl rounded-[100%] w-[50px] h-[50px] bg-jt-white'>
      </div> */}
      <Navbar/>
      {/* <HomePage mx={mx} my={my}/> */}
      <Sections/>
    </div>
  );
}

export default App;
