import React, { useState, useEffect } from 'react';

const Save = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? Number(savedCount) : 0;
  });
  const [prevCount, setPrevCount] = useState(null);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevCount(count);
      setSecondsElapsed(prevSeconds => {
        const newSeconds = prevSeconds + 1;
        if (newSeconds % 5 === 0) {
          setCount(prevCount => {
            const newCount = prevCount + 1;
            localStorage.setItem('count', newCount);
            return newCount;
          });
        } else {
          setCount(prevCount => {
            const newCount = prevCount + 100;
            localStorage.setItem('count Save', newCount);
            return newCount;
          });
        }
        return newSeconds;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [count]);  

    return (
      <div className="flex items center justify-center relative ">
        <a href="">
          <img src="../assets/Croissant.png" alt="" className=" w-full " />
          <div className="font-poppins font-bold text-lg">
            <h1 className="flex justify-center">{count.toLocaleString()}</h1>
            <h1 className="text-base text-abu font-semibold">
              Makanan terselamatkan
            </h1>
          </div>
        </a>
      </div>
    );
  };
  
  export default Save;
  