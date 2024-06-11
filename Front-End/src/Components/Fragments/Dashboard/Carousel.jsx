import React from 'react'

import SlideCaraousel from '../../Elements/Dashboard/slideCarousel';

const Carousel = () => {
  const slides = [
    {
      img: "https://images.tokopedia.net/img/cache/1200/NXCtjv/2023/10/12/853474a7-85ad-47a9-ae91-de3b27f7652f.jpg.webp",
    },
    {
      img: "https://images.tokopedia.net/img/cache/1190/wmEwCC/2024/3/6/31626822-c1e0-4785-932c-58b8abd86ce9.jpg.webp?ect=4g",
    },
    {
      img: "https://www.tokopedia.com/discovery/dilayani-tokopedia?source=homepage.slider_banner.0.52063"
    }
  ]
  return (
    <>
      <div className='w-full px-4 md:px-16 py-8  '>
        <SlideCaraousel slides={slides} />  
      </div>      
    </>
  )
}

export default Carousel