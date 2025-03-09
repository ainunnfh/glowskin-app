import React from "react";

const Address = () => {
  return (
    <div className="flex flex-col gap-2 text-[#644040]">
      <div>
        <img src="logo.png" alt="logo" className="w-32" />
      </div>

      <h1 className="font-bold ml-5">Address</h1>

      <div className="ml-5">
        <p>Jl. Arah Pemuda No 78</p>
        <p>Jakarta</p>
        <p>112233</p>
        <p>012345678910</p>
        <p>glowingskin.com</p>
      </div>
    </div>
  );
};

export default Address;
