import React from 'react'
import NavBar from '../Components/Fragments/Dashboard/NavBar';
import Footer from '../Components/Fragments/Dashboard/Footer';
import CardItem from '../Components/Fragments/Products/CardItem';
import CardSeller from '../Components/Fragments/Products/CardSeller';
import CardSpecification from '../Components/Fragments/Products/ProductDetail';
import ProductImage from '../Components/Elements/Products/ProductImage';
import Payment from '../Components/Fragments/Products/Payment';

const Products = () => {
  return (
    <>
        <NavBar />
      <div className="container md:flex px-8 xl:px-32 py-8 bg-white">
        {/* <!-- section left begin --> */}
        <ProductImage/>
        {/* <!-- section left end --> */}

        {/* <!-- section middle begin --> */}
        <div className="md:w-2/5 pb-4 pt-2">
          <div className="bg-gradient-to-b from-white to-midGreen text-sm flex rounded-md justify-center">
            <img
              className="w-20 mb-2 mt-4"
              src="/image/beli-sekarang.png"
              alt="Logo beli"
            />
            <p className="mt-8 font-serif">
              Pastikan item pilihanmu sudah benar, yaa! Teliti kembali
              spesifikasi dan detail barangnya, happy shopping.
            </p>
          </div>
          <section id="cardHeader">
            <CardSeller />
            <CardItem />
          </section>
          <section id="payment-card" className="">
            <div className="font-open">
              <CardSpecification />
            </div>
          </section>
        </div>

        {/* <!-- section middle end --> */}

        {/* <!-- section right begin --> */}
        <Payment/>
        {/* <!-- section right end --> */}
      </div>
      
    <Footer />
    </>
  );
};



export default Products