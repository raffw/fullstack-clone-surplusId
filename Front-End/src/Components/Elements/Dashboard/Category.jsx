const Category = ({ name, img }) => {
    return (
      <div className="text-center w-16 sm:w-20 flex flex-col justify-center items-center rounded-sm "> 
        <img src={img} alt="" className="w-16 h-16 sm:w-18 sm:h-18 rounded-lg sm:rounded-xl" />
        <h2 className="text-sm sm:text-md py-1 font-semibold text-hijau">{name}</h2>
      </div>
    );
  };
  
export default Category;