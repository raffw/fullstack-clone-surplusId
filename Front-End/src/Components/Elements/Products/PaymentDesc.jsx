import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const PaymentDesc = () => {
  const [count, setCount] = useState(1);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const calculateTotalPrice = (newCount, productIndex) => {
    const product = productData[productIndex];
    const discountedPrice = product.price * (1 - product.discount / 100);
    return newCount * discountedPrice;
  };

  const [totalPrice, setTotalPrice] = useState(
    calculateTotalPrice(1, 0)
  );

  const selectProduct = (index) => {
    setSelectedProductIndex(index);
    calculateTotalPrice(count, index);
  };

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setTotalPrice(calculateTotalPrice(newCount, selectedProductIndex));
      return newCount;
    });

  };

  const decrement = () => {
     if (count > 1) {
      setCount(prevCount => {
        const newCount = prevCount - 1;
        setTotalPrice(calculateTotalPrice(newCount, selectedProductIndex));
        return newCount;
      });
    }
  };

  return (
    <div className="border-b mx-2">
      <p className="font-bold pt-3 px-4">Atur Jumlah Item</p>
      <div className="flex justify-between mx-6 mb-3 text-gray-500">
        <div className="flex mx-2 ">
          <div>
            <div className="flex mt-1 font-serif">
              <div className="text-bold px-1 text-darkGreen rounded-md mr-2 mt-3">
                <div>
                  <p>
                    Disc: <span>10%</span>
                  </p>
                  <p>
                  Subtotal: <span> Rp.{totalPrice.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-3 mb-4 flex">
                <p className="text-sm font-Open font-bold text-darkGreen">
                  Tulis Catatan
                </p>
                <div className="pb-2 mx-4 text-gray-400 ">|</div>
              </div>
              <div className="flex bg-white border border-darkGreen rounded-lg h-10 mt-2">
                <button
                  className="align-middle inline-block mx-1 my-1"
                  onClick={decrement}
                >
                  <FiMinus />
                </button>
                <span className="w-6 ml-4 my-1">{count}</span>

                <button
                  className="mx-1 my-1 align-middle inline-block"
                  onClick={increment}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const productData = [
  {
    name: "Nasi Goreng",
    price: 10000,
    discount: 50,
  },
  {
    name: "Bawang Goreng",
    price: 2000,
    discount:50,
  }
]


export default PaymentDesc;

