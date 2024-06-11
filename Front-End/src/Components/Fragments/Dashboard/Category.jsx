import SurplusPay from "../../Elements/Dashboard/SurpluPay";
import Voucher from "../../Elements/Dashboard/Voucher";
import Category from "../../Elements/Dashboard/Category";
import minuman from "../../../assets/minuman.png"
import makanan from "../../../assets/food.jpg"
import roti from "../../../assets/roti.jpg"
import camilan from "../../../assets/snack.jpg"
import buah from "../../../assets/buah.jpg"
import sayur from "../../../assets/sayur.jpg"
import vegan from "../../../assets/bahan makanan.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BonusCoin from "../../Elements/Dashboard/BonusCoin";

const CategoryMenu = () => {
  const categoryList = [
    {
      name: "Minuman",
      img: minuman,
    },
    {
      name: "Makanan",
      img: makanan,
    },
    {
      name: "Roti",
      img: roti,
    },
    {
      name: "Camilan",
      img: camilan,
    },
    {
      name: "Buah",
      img: buah,
    },
    {
      name: "Sayur",
      img: sayur,
    },
    {
      name: "Makanan Vegan",
      img: vegan,
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#A5A5A5", borderRadius: "100%" ,position: "absolute", top: "40px", margin:"0 20px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:"#A5A5A5",borderRadius: "100%", position: "absolute", top: "40px", margin:"0 20px" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <>
    <div className="h-36 sm:h-48 shadow-sm mx-4 md:mx-16 text-sm border-2 border-grey rounded-xl flex-col items-center sm:justify-between">
      <div className="flex font-roboto font-bold p-4 md:flex md:justify-between text-sm sm:text-xl">
        <h1 className="w-1/2">Top Up & Voucher</h1>
        <h1 className="w-1/2 hidden sm:block">Category</h1>
      </div>
      <div className="h-20 flex gap-3 items-center px-4 ">
        <div className="w-full sm:w-1/2 h-20 sm:h-28  border-2 border-grey rounded-2xl flex justify-center items-center">
          <div className="flex w-full justify-between px-2 md:px-16 font-poppins font-semibold text-abu">
            <SurplusPay />
            <Voucher />
            <BonusCoin/>
          </div>
        </div>
        <div className="hidden sm:block w-1/2 py-2 justify-center items-center h-full gap-3">
        <Slider {...settings}>
        {categoryList.map((item, index)=> (
            <Category key={index} name={item.name} img={item.img} />
        ))}

        </Slider>
    </div>
      </div>
    </div>
    <div className="mx-4 my-2 block sm:hidden">
        <Slider {...settings}>
        {categoryList.map((item, index)=> (
            <Category key={index} name={item.name} img={item.img} />
        ))}

        </Slider>
    </div>
    </>
  );
};

export default CategoryMenu;
