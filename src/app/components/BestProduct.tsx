import React from "react";
import BestProductCard from "./BestProductCard";

const BestProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#ffebeb] gap-3">
      <h1 className="text-3xl font-bold mb-3 text-[#644040]">Best Product</h1>

      <div className="flex flex-col gap-3 md:flex-row md:justify-around w-full">
        <BestProductCard image="best-product-1.png" title="Best Product 1" />
        <BestProductCard image="best-product-2.png" title="Best Product 2" />
        <BestProductCard image="best-product-3.png" title="Best Product 3" />
      </div>
    </div>
  );
};

export default BestProduct;
