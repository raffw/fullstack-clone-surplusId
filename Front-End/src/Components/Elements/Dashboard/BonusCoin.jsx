import React from 'react'
import coin from "../../../assets/Coin.svg"

const BonusCoin = () => {
  return (
    <a href="" className="flex w-1/3 items-center">
          <img src={coin} alt="" className="w-10" />
          <div className="p-2">
            <h1>Bonus Coin</h1>
            <h1 className="font-bold text-hijau">10 Coin</h1>
          </div>
        </a>
  )
}

export default BonusCoin