import React from "react";

const button = () => {
  return (
    <div>
      <div className="flex gap-10">
        <button className="font-mono bg-[#2f3dd6] text-[#00040E] px-6 py-3 rounded-[10px] mt-6 text-[#FFFFFF]">
          Go Back
        </button>
        <button className="font-mono bg-[#2f3dd6] text-[#00040E] px-6 py-3 rounded-[10px] mt-6 text-[#FFFFFF]">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default button;
