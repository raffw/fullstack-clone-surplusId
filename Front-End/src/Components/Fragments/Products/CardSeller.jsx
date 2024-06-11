import { CiStar } from "react-icons/ci";

const CardSeller = () => {
    return (
        <>
        <div className=" border-b-2 border-midGreen font-sans">
            <div className="my-3 flex ">
                <div>
                    <img  className="size-12 rounded-full bg-indigo-400" src="/public/image/no-image.png" alt="badge" />
                </div>
                <div class="ml-4">
                    <h2 className="font-bold font-sans">Nama Toko Resmi</h2>
                    <p className="text-midGreen">.Online</p>
                    <div className="flex items-center gap-2 font-roboto ">
                        <CiStar />
                        <p>Rata-rata ulasan</p>
                    </div>
                </div>
                <div className="ml-24">
                <button className="text-green-700 border-2 px-3 py-1 rounded-md font-semibold border-green-700 mt-4 text-md" >
                    Follow
                </button>
                </div>

            </div>
        </div>
        </>
    )
};

export default CardSeller;