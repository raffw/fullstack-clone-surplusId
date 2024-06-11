const Card = ({ cards }) => {
    
  return (
    <div className=" font-poppins text-sm border-2 border-grey rounded-xl h-72 w-38 min-h-64 ">
        <div className="flex justify-center">
        <a href="" >
        <img
          src={cards.imageUrl}
          alt=""
          className="rounded-xl mt-1 h-24 w-28 group-hover: scale-[0.95] hover:!scale-100 duration-300 "
          />
        </a>
        </div>
        <div>
          <div className="p-4 cursor-pointer">
            <h1 className="text-xs text-hijau-muda py-1">5 tersedia</h1>
            <h1 className="font-semibold ">{cards.groupName}</h1>
            <h1 className="text-xs py-2">Ambil hari ini, 21.00-22.00</h1>
            <h1 className="flex gap-1">
              50%<span className="line-through">30.000</span>15.000
            </h1>
          </div>
          <h1 className="flex h-full px-4 text-xs ">
            <img src="../icon/Star 1.svg" alt="" />
            5.0 | 10x Terjual
          </h1>
        </div>
    </div>
  );
};

export default Card;
