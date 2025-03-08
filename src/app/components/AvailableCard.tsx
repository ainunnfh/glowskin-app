import React from "react";

interface IAvailableCardProps {
  eCommerceName: string;
  link: string;
}
const AvailableCard: React.FC<IAvailableCardProps> = ({
  eCommerceName,
  link,
}) => {
  return (
    <div className="flex flex-col items-center p-3">
      <p className="bg-[#644040] text-white p-2 rounded-md w-40 text-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {eCommerceName}
        </a>
      </p>
    </div>
  );
};

export default AvailableCard;
