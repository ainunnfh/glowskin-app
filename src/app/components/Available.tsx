import React from "react";
import AvailableCard from "./AvailableCard";

const Available = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#644040] text-center">
        Order Now!
      </h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:flex lg:justify-between">
        <AvailableCard eCommerceName="Tokopedia" />
        <AvailableCard eCommerceName="Bukalapak" />
        <AvailableCard eCommerceName="Shopee" />
        <AvailableCard eCommerceName="Blibli" />
        <AvailableCard eCommerceName="Lazada" />
      </div>
    </div>
  );
};

export default Available;
