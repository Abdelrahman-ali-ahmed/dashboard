import React from "react";

interface CardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title?: string;
  value?: string | number;
}

const Card: React.FC<CardProps> = ({ Icon, title, value }) => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow gap-[5px] border-r border-white/50 last:border-r-0">
      <Icon className="text-white text-[18px] relative" />
      {title && <h2 className="text-white text-[16px] font-normal">{title}</h2>}
      {value && <h2 className="text-lime-500 flex gap-[5px]">{value}</h2>}
    </div>
  );
};

export default Card;
