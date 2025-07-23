import React from "react";

interface CircularProgressProps {
  value: number | string;
  offset: number;
  color: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value, offset, color }) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute flex text-white">
        <h1>{value}</h1>
        <p>%</p>
      </div>

      <svg
        className="-rotate-90 translate-x-[3px] -translate-y-[4px]"
        width="120"
        height="120"
      >
        <circle
          cx="55"
          cy="55"
          r="50"
          strokeWidth="5"
          fill="transparent"
          className="stroke-[--dm-stroke-clr]"
        />
        <circle
          cx="55"
          cy="55"
          r="50"
          fill="transparent"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={315}
          strokeDashoffset={315}
          style={{
            strokeDashoffset: offset,
            animation: "load 1s ease 1s forwards",
          }}
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
