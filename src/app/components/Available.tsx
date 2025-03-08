import React from "react";
import AvailableCard from "./AvailableCard";

const Available = () => {
  return (
    <div className="p-6 lg:px-14">
      <h1 className="text-3xl font-bold text-[#644040] text-center">
        Order Now!
      </h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:flex lg:justify-between">
        <AvailableCard
          eCommerceName="Tokopedia"
          link="https://www.tokopedia.com/"
        />
        <AvailableCard
          eCommerceName="Bukalapak"
          link="https://www.bukalapak.com"
        />
        <AvailableCard
          eCommerceName="Shopee"
          link="https://www.shopee.co.id/"
        />
        <AvailableCard eCommerceName="Blibli" link="https://www.blibli.com" />
        <AvailableCard eCommerceName="Lazada" link="https://www.lazada.co.id" />
      </div>
    </div>
  );
};

export default Available;
