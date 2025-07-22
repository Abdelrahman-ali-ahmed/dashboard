import React from "react";

interface NavProps {
  Icon?: React.ElementType;
  title?: string;
  onClick?: () => void;
  nav:boolean;
}

const Nav: React.FC<NavProps> = ({ Icon, title, onClick,nav }) => {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-[10px] overflow-hidden cursor-pointer transition-colors duration-200 hover:bg-white/20"
      onClick={onClick}
    >
      {Icon && <Icon className="text-[20px]" />}
      {!nav?<h2 className="text-[15px] font-medium  nav-title">
        {title ?? null}
      </h2>:""}
      
    </div>
  );
};

export default Nav;
