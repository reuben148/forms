import React from "react";

const Step1 = () => {
  return (
    <div className="border w-[90%] sm:w-[80%] max-w-[550px] h-auto mx-auto my-10 flex justify-center items-start p-4 sm:p-6 rounded-lg shadow-lg">
      <div className="w-full">
        <p className="font-mono text-2xl sm:text-3xl text-slate-800">
          Personal info
        </p>
        <p className="font-serif text-sm sm:text-base py-3 sm:py-5 text-slate-400">
          Please provide your name, email address, and phone number.
        </p>

        <div className="w-full">
          <label className="font-mono text-sm sm:text-base block mb-2">
            Name
          </label>
          <input
            className="bg-slate-100 w-full h-[45px] p-4 rounded-lg border border-gray-300 placeholder:text-gray-500"
            type="text"
            placeholder="e.g. Reuben luka"
            required
          />
        </div>

        <div className="w-full py-7">
          <label className="font-mono text-sm sm:text-base block mb-2">
            E-mail Address
          </label>
          <input
            className="bg-slate-100 w-full h-[45px] p-4 rounded-lg border border-gray-300 placeholder:text-gray-500"
            type="text"
            placeholder="e.g. reubendev59@gmail.com"
            required
          />
        </div>

        <div className="w-full">
          <label className="font-mono text-sm sm:text-base block mb-2">
            Phone Number
          </label>
          <input
            className="bg-slate-100 w-full h-[45px] p-4 rounded-lg border border-gray-300 placeholder:text-gray-500"
            type="text"
            placeholder="e.g. +08137893878"
            required
          />
        </div>
        <button className="font-mono bg-[#2f3dd6] text-[#00040E] px-6 py-3 rounded-[10px] mt-6 text-[#FFFFFF]">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step1;
