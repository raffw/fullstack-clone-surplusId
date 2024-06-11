import { CiStar } from "react-icons/ci";

const CardItem = () => {
    
    return(
        <>
            <div className="mt-2">
                <h1 className="text-lg font-bold">Nama Product</h1>
                <div className="flex font-sans text-sm space-x-4">
                    <p>Terjual 50+</p>
                    <p>|</p>
                    <div className="flex items-center gap-2 font-roboto">
                    <CiStar />
                        <p>5 (30 Rating)</p>
                    </div>
                </div>
                <div className="my-3">
                    <h1 className="text-3xl font-bold ">Rp134.000</h1>
                    <div className="flex space-x-1 py-2">
                        <p className="font-bold bg-orange-400 rounded-md text-darkGreen px-1">21%</p>
                        <p className="line-through bg-gray-300">Rp169.000</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CardItem;
