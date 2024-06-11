import { FaAngleDown } from "react-icons/fa";

const CardSummary = () => {
    return (
      <>
        <div className="md:mx-4 md:w-2/5">
          <div className="border rounded-lg shadow-md">
            <section>
              <div className=" border-b-4">
                <div className="flex flex-wrap border rounded-md text-center px-2 py-1 mb-4 mx-7 my-4 justify-between ">
                  <div className="mb-2 ml-1 mt-2 font-bold text-sm font-serif">
                    <h1>Ambil Promomu!</h1>
                    <FaAngleDown />
                  </div>
                </div>
             </div>
    
             <div className="border-b mx-2">
                <p className="font-bold pt-3 px-4">Ringkasan Belanja</p>
                <div className="flex justify-between mx-6 mb-3 text-gray-500">
                  <div className="">
                    <p>Total Belanja</p>
                    <p>Total Harga</p>
                    <p>Total Ongkos Kirim</p>
                  </div>
                  <div>
                    <p>Rp20000</p>
                    <p>Rp20000</p>
                    <p>Rp20000</p>
                  </div>
                </div>
             </div>
    
             <div className="border-b mx-2 ">
                <p className="font-bold pt-3 px-4">Biaya Transaksi</p>
                <div className="flex justify-between mx-6 mb-3 text-gray-500">
                  <div className="">
                    <p>Biaya Layanan</p>
                    <p>Biaya Jasa Aplikasi</p>
                  </div>
                  <div>
                    <p>Rp20000</p>
                    <p>Rp20000</p>
                  </div>
                </div>
               </div>
               <div className="flex border-b mx-2 justify-between">
                <p className="font-bold mt-3 mx-4 mb-4">Total Tagihan</p>
                <p className="mt-3 mr-6 text-gray-500">Rp60000</p>
             </div>
    
             <div className="flex border rounded-lg bg-midGreen py-3 mx-4 my-4 justify-center">
                <p className="text-white font-bold">Bayar</p>
             </div>
            
            </section>
          </div>
       </div>
      </>
    )
  }
  
  export default CardSummary;
  
  