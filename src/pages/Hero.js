import React from 'react';
import { useNavigate } from 'react-router-dom'


function Hero() {

  const navigate=useNavigate();

  const handleClick = () => {
    // Navigate to the /login route
    navigate('/login');
  };

  return (
    <main className='h-screen w-screen' >

    <div className='h-full w-full flex flex-col justify-center px-[4rem] text-left' >
          <h1 className='text-[#98EC65] font-bold text-[5rem]' >House of Athletes</h1>
          <h3 className='text-grey text-[2rem] font-bold' >House of Athletes: Where Passion Meets Performance.</h3>

          <button className='w-[10rem] py-[6px] rounded-3xl bg-[#98EC65] hover:bg-[#81E047] mt-[1rem]' onClick={handleClick} >Explore Now</button>
      </div>
      </main>
  );
}

export default Hero;