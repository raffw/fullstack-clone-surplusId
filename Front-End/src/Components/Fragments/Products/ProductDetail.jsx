import DetailProduct from "../../Elements/Products/DetailProduct";

const CardSpecification = () => {
  return (
    <>
      <div
        id="pdp_comp-product_detail"
        className="border rounded-lg shadow-md lg:w-full"
      >
        <div className="border-b-2 border-midGreen py-4">
          <p className="font-bold mx-44">Spesifikasi Item</p>
        </div>
        <DetailProduct/>
      </div>
    </>
  );
};

export default CardSpecification;
