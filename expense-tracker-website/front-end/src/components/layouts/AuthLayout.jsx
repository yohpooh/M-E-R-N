import React from "react";
import CARD_TEST from "../../assets/images/TestPhoto.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Ang Tracktos</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-gray-200 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-gray-600 absolute top-[30%] -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-gray-700 absolute -top-12 -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-gray-800 absolute -bottom-5 -right-8" />

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income and Expenses"
            value="500,000"
            color="bg-black"
          />
        </div>

        <img
          src={CARD_TEST}
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-gray-600/15"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-gray-400/10 border border-gray-200/50 z-1">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">₱{value}</span>
      </div>
    </div>
  );
};
