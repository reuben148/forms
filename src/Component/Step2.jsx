import React from "react";

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
          <div className="flex gap-10">
            <button className="font-mono bg-[#2f3dd6] text-[#00040E] px-6 py-3 rounded-[10px] mt-6 text-[#FFFFFF]">
              Go Back
            </button>
            <button className="font-mono bg-[#2f3dd6] text-[#00040E] px-6 py-3 rounded-[10px] mt-6 text-[#FFFFFF]">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default step2;
