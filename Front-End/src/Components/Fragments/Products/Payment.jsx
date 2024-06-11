import React from 'react'
import PaymentDesc from '../../Elements/Products/PaymentDesc'
import { FaAngleDown } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="mx-4 md:w-64 mt-2">
          <div className="border rounded-lg shadow-md">
            <section>
              <div className=" border-b-2 border-midGreen">
                <div className="xl:flex flex-wrap border rounded-md text-center items-center cursor-pointer px-2 py-1 md:w-48 mb-4 mx-7 my-4 ">
                  <div className="mb-2 ml-1 mt-2 font-bold text-sm font-serif">
                    Ambil Promomu!
                  </div>
                  <div className="mx-3 mt-1 inline-block align-middle ">
                  <FaAngleDown />
                  </div>
                </div>
              </div>
              <PaymentDesc/>
              
              <div className="flex border-2 border-green-700 duration-200 bg-green-700 cursor-pointer hover:bg-green-800  rounded-lg py-3 mx-4 my-4 justify-center">
                <p className="text-white font-bold">+ Keranjang</p>
              </div>
              <div className="flex border-2 border-green-700 cursor-pointer rounded-lg py-3 mx-4 my-4 justify-center">
                <p className="text-green-700 font-bold">Beli Langsung!</p>
              </div>
            </section>
          </div>
        </div>
  )
}

export default Payment