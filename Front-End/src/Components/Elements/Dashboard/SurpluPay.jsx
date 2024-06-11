import coin from "../../../assets/Coin.svg"

const SurplusPay = () => {
    return (
        <a href="" className="flex items-center gap-2">
          <img src={coin} alt="" className="w-8" />
          <div className="py-2 text-[14px] ">
            <h1>Surplus Pay</h1>
            <h1 className="text-hijau">Rp 0</h1>
          </div>
        </a>
    )
}

export default SurplusPay