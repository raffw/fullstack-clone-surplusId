import React, { useState, useEffect } from 'react';

const Co2 = () => {
    const [count, setCount] = useState(() => {
      const savedCount = localStorage.getItem('count');
      return savedCount !== null ? Number(savedCount) : 0;
    });
    const [prevCount, setPrevCount] = useState(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPrevCount(count);
        setCount(prevCount => {
          const newCount = prevCount + 101;
          localStorage.setItem('count Co2', newCount);
          return newCount;
        });
      }, 1000);
  
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, [count]);
    return (
        <div className="flex items-center justify-center ">
          <a href="">
            <img src="../assets/Trash.png" alt="" className="w-full h-24 " />
            <div className="font-roboto font-bold text-lg">
              <h1 className="flex justify-center">{count.toLocaleString()}</h1>
              <h1 className="text-base text-abu font-semibold">
                CO2 yang berhasil dicegah
              </h1>
            </div>
          </a>
        </div>
    )
}

export default Co2;