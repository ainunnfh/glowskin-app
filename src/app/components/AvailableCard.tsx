import React from "react";

interface IAvailableCardProps {
  eCommerceName: string;
}
const AvailableCard: React.FC<IAvailableCardProps> = ({ eCommerceName }) => {
  return (
    <div className="flex flex-col items-center p-3">
      <p className="bg-[#644040] text-white p-2 rounded-md w-40 text-center">
        {eCommerceName}
      </p>
    </div>
  );
};

export default AvailableCard;
