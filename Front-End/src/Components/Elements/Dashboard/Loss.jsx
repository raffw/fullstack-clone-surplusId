import React, { useState, useEffect } from 'react';

const Loss = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? Number(savedCount) : 0;
  });
  const [prevCount, setPrevCount] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevCount(count);
      setCount(prevCount => {
        const newCount = prevCount + 10;
        localStorage.setItem('count Loss', newCount);
        return newCount;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [count]);
    return (
        <div className="flex items center justify-center">
          <a href="">
            <img src="../assets/Money.png" alt="" className="w-54 h-52" />
            <div className="font-poppins font-bold text-lg">
              <h1 className="flex justify-center">Rp.{count.toLocaleString()}</h1>
              <h1 className="text-base text-abu font-semibold">
                Kerugian yang berhasil dicegah
              </h1>
            </div>
          </a>
        </div>
    )
}

export default Loss;