import React, { useEffect, useState } from 'react';

function Counter() {
  // Set initial timer state for 12 hours
  const initialTime = 12 * 60 * 60; // 12 hours in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : initialTime)); // Reset after 12 hours
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, []);

  // Helper function to format time
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <>
      <div className='flex bg-white gap-4 w-[260px] h-[90px] md:w-[400px] md:h-[90px] m-9'>
        <h1 className='flex text-sm text-[#059669] font-bold pt-2'>
          Grand Opening
        </h1>
        {/* <p className='text-sm text-[#047857] mt-2'>
          All items are 25% Discount for New Member!
        </p> */}
      </div>

      {/* Counter */}
      <div className='flex bg-green-500 px-3 py-2   md:w-[350px] md:h-[90px] justify-center items-center m-9 absolute top-8'>
        <div className='grid text-white'>
          <div className='flex gap-7'>
            <h1 className='text-3xl font-bold'>{String(hours).padStart(2, '0')}</h1>
            <p className='font-bold text-3xl'>:</p>
            <h1 className='text-3xl font-bold'>{String(minutes).padStart(2, '0')}</h1>
            <p className='font-bold text-3xl'>:</p>
            <h1 className='text-3xl font-bold'>{String(seconds).padStart(2, '0')}</h1>
          </div>

          <div className='flex gap-7'>
            <p className='text-md font-semibold'>Hours</p>
            <p className='text-md font-semibold ml-4'>Minutes</p>
            <p className='text-md font-semibold ml-2'>Seconds</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
