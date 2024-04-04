import React from "react";
import IconFree from "../assets/Free.png";
import CheckSuccess from "../assets/check-success.png";

const CardPlan = ({ title, price, features, isSelect }) => {
  return (
    <div
      className={`bg-white rounded-md flex flex-col justify-between items-center pt-16 pb-8 border ${isSelect ? "border-red-500" : "border-gray-300"}`}
    >
      <div className="space-y-5 flex flex-col justify-center items-center">
        <img src={IconFree} alt="Free Plan Icon" className="w-24 h-24" />
        <h3 className="font-bold text-xl">{title}</h3>
        <div className="space-y-2">
          {features.map((val, index) => (
            <div key={index} className="flex flex-row items-center space-x-2">
              <img
                src={CheckSuccess}
                alt="Check Success Icon"
                className="w-3 h-2"
              />
              <div>{val}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-3 font-bold text-xl">
          {price}
          {price !== "Free" && <span className="font-normal">/ mo</span>}
        </div>
        <button
          className={`border rounded-full py-1 px-10 border-red-500 font-bold border-2 ${isSelect ? "bg-red-500 text-white" : "bg-white text-red-500"}`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default CardPlan;
