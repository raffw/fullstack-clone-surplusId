import VoucherImg from "../../../assets/voucher.svg"

const Voucher = () => {
    return (
      <a href="" className="flex items-center">
        <img src={VoucherImg} alt="" className="w-8" />
        <div className="p-2">
          <h1>Voucher</h1>
          <h1 className="font-bold text-hijau ">5 Voucher</h1>
        </div>
      </a>
    );
  };
  
  export default Voucher;
  