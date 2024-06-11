import { Link } from "react-router-dom";
import MenuList from "./MenuList";

const Menu = () => {
  const resto = [
    {
      name: "Rekomendasi Acak",
    },
    {
      name: "Di Sekitar Kamu",
    },
    {
      name: "Paling Disukai",
    },
  ];

  return (
    <div>
      {resto.map((item) => (
        <div className="flex flex-col px-8 md:px-16 font-roboto my-4  ">
          <div className="flex justify-between">
            <h1 className="font-bold text-sm md:text-xl" >{item.name}</h1>
            <button className="border-2 text-sm md:text-md w-26 px-2 md:px-3 rounded-xl bg-hijau-muda border-hijau-muda text-white font-semibold py-2">
              Semua
            </button>
          </div>
          <div>
            <Link to="/products">
              <MenuList />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
