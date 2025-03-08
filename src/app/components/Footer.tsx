import React from "react";
import Address from "./Address";
import ProductCategories from "./ProductCategories";
import Company from "./Company";

const Footer = () => {
  return (
    <div className="P-2 bg-[#ffebeb] md:flex md:justify-between lg:justify-around">
      <Address />
      <ProductCategories />
      <Company />
    </div>
  );
};

export default Footer;
