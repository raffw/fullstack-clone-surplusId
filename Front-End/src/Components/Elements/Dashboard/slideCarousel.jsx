import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function SlideCaraousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="hidden sm:block">
        <div className="flex absolute text-[30px] h-auto w-full px-4 mt-[96px] md:mt-[150px] xl:mt-[160px] justify-between items-center">
          <button onClick={previousSlide} className="z-20">
            <HiChevronLeft />
          </button>
          <button onClick={nextSlide} className="z-20">
            <HiChevronRight />
          </button>
        </div>
      </div>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slides, index) => (
          <img
            src={slides.img}
            alt=""
            key={index}
            className="min-w-full h-38 md:h-[310px] xl:h-[350px] rounded-xl"
          />
        ))}
      </div>
      <div className="absolute flex gap-2 bottom-0 py-2 px-2 cursor-pointer">
        {slides.map((slides, index) => (
          <div
          onClick={()=> {
            setCurrent(index)
          }}
            key={"circle" + index}
            className={`w-3 h-2 rounded-full ${index==current ? 'bg-hijau' : 'bg-white'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideCaraousel;
