import React from "react";

interface IBestProductCardProps {
  title: string;
  image: string;
}
const BestProductCard: React.FC<IBestProductCardProps> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={props.image}
        alt={props.title}
        className="w-32 sm:w-48 md:w-64 rounded-md"
      />

      <h3 className="text-center text-[#644040] mt-2 text-md font-semibold">
        {props.title}
      </h3>
    </div>
  );
};

export default BestProductCard;
