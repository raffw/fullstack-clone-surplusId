import Co2 from "../../Elements/Dashboard/Co2";
import Loss from "../../Elements/Dashboard/Loss";
import Save from "../../Elements/Dashboard/Save";

const Recycle = () => {
  return (
    <>
      <div className="flex justify-center font-poppins font-bold text-2xl py-4 ">
        <div>
          <h1 className="text-hijau">Dampak yang telah dihasilkan</h1>
          <h1 className="flex justify-center text-xl text-hijau-muda">
            #Surplus Hero
          </h1>
        </div>
      </div>
      <div className="h-34 md:h-72 m-4 flex justify-between px-2 md:px-11 items-center border-2 border-grey rounded-2xl mx-2 md:mx-16">
        <Save/>
        <Co2/>
        <Loss />
      </div>
    </>
  );
};

export default Recycle;
