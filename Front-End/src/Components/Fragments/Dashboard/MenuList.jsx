import Card from "../../Elements/Dashboard/Card";
import { getApi } from "../../../Services/Card";
import React, { useRef } from "react";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MenuList() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    Menu();
  }, []);

  const displayedMenu = menu.slice(0, 10);

  const Menu = async () => {
    try {
      const data = await getApi();
      setMenu(data.data.items);
      if (data && data.data && Array.isArray(data.data.items)) {
        setMenu(data.data.items);
      } else {
        console.error("Unexpected data structure:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //   const searchData = async (query) => {
  //     setIsLoading(true);
  //     const data = await searchDataCall(query);
  //     if (data.data.products) {
  //       setIsLoading(false);
  //       setDataProducts(data.data.products);
  //     }
  //   };

  return (
    <div className="flex py-2 gap-1">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
          464: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
      >
        <button onClick={() => Swiper.slideNext()}>
          Slide to the next slide
        </button>
        {displayedMenu.length > 0 ? (
          displayedMenu.map((item, index) => (
            <SwiperSlide key={index}>
              <Card cards={item} />
            </SwiperSlide>
          ))
        ) : (
          <p>No items to display</p>
        )}
      </Swiper>
    </div>
  );
}

export default MenuList;
