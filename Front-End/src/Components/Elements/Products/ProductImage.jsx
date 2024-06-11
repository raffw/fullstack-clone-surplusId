import React from 'react'

const ProductImage = () => {
  return (
    <div className="md:w-1/3 pb-4 pt-2 pr-12">
          <div className="bg-gradient-to-b from-white to-midGreen text-sm flex rounded-md justify-center">
            <img
              className="size-full bg-gray-500 rounded-md "
              src="/image/no-image.png"
              alt="Logo beli"
            />
          </div>
          <div className="md:size-full flex my-2 gap-2 ">
            <div >
              <img
                className="bg-gray-500 rounded-md"
                src="/image/no-image.png"
                alt=""
              />
            </div>
            <div >
              <img
                className="bg-gray-500 rounded-md"
                src="/image/no-image.png"
                alt=""
              />
            </div>
            <div >
              <img
                className="bg-gray-500 rounded-md"
                src="/image/no-image.png"
                alt=""
              />
            </div>
            <div >
              <img
                className="bg-gray-500 rounded-md"
                src="/image/no-image.png"
                alt=""
              />
            </div>
          </div>
        </div>
  )
}

export default ProductImage