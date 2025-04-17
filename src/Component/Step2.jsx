import React from "react";
import Button from "./button";

const step2 = () => {
  return (
    <div className="border w-[90%] sm:w-[80%] max-w-[550px] h-auto mx-auto my-10 flex justify-center items-start p-4 sm:p-6 rounded-lg shadow-lg">
      <div className="w-full">
        <p className="font-mono text-2xl sm:text-3xl text-slate-800">
          select your plan
        </p>
        <p className="font-serif text-sm sm:text-base py-3 sm:py-5 text-slate-400">
          You have the option of monthly or yearly billing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:justify-center">
          <div className="border w-[150px] h-[150px] rounded-[10px]">
            <i class="fa-solid fa-gamepad fa-2x text-orange-300 px-2 py-1"></i>
            <div className="mt-[45px]">
              <p className="px-2 text-[#3444e0] text-xl font-mono">Arcade</p>
              <p className="text-slate-300 px-2 font-serif">$9/mo</p>
            </div>
          </div>
          <div className="border w-[150px] h-[150px] rounded-[10px]">
            <i class="fa-solid fa-gamepad fa-2x text-orange-300 px-2 py-1"></i>
            <div className="mt-[45px]">
              <p className="px-2 text-[#3444e0] text-xl font-mono">Advanced</p>
              <p className="text-slate-300 px-2 font-serif">$12/mo</p>
            </div>
          </div>
          <div className="border w-[150px] h-[150px] rounded-[10px]">
            <i class="fa-solid fa-puzzle-piece fa-2x text-orange-300 px-2 py-1"></i>
            <div className="mt-[45px]">
              <p className="px-2 text-[#3444e0] text-xl font-mono">Pro</p>
              <p className="text-slate-300 px-2 font-serif">$15/mo</p>
            </div>
          </div>
        </div>
        <div className="border h-[40px] w-full mt-[20px] rounded-[10px] flex justify-around py-1 sm:px-42 bg-slate-100">
          <p className="text-center font-mono text-blue-700">Monthly</p>
          <input className="py-1" type="checkbox" />
          <p className="text-center font-mono text-blue-200">Yearly</p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default step2;
