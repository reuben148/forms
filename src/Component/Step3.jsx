import React from "react";
import Button from "./button";

const step3 = () => {
  return (
    <div className="border w-[90%] sm:w-[80%] max-w-[550px] h-auto mx-auto my-10 flex justify-center items-start p-4 sm:p-6 rounded-lg shadow-lg">
      <div className="w-full">
        <p className="font-mono text-2xl sm:text-3xl text-slate-800">
          Pick add-ons
        </p>
        <p className="font-serif text-sm sm:text-base py-3 sm:py-5 text-slate-400">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="space-y-4">
          <div className="border w-full h-[80px] rounded-[10px] flex items-center justify-between px-4 hover:text-blue-500">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="w-5 h-5" />
              <div>
                <p className="font-semibold text-gray-800">Online service</p>
                <p className="text-sm text-gray-500">
                  Access to multiplayer games
                </p>
              </div>
            </div>
            <p className="text-sm text-[#3976f2]">+$1/mo</p>
          </div>

          <div className="border w-full h-[80px] rounded-[10px] flex items-center justify-between px-4 hover:text-blue-500">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="w-5 h-5" />
              <div>
                <p className="font-semibold text-gray-800">Larger storage</p>
                <p className="text-sm text-gray-500">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-sm text-[#3976f2]">+$2/mo</p>
          </div>

          <div className="border w-full h-[80px] rounded-[10px] flex items-center justify-between px-4 hover:text-blue-500">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="w-5 h-5" />
              <div>
                <p className="font-semibold text-gray-800">
                  Customizable Profile
                </p>
                <p className="text-sm text-gray-500">
                  Custom theme on your profile
                </p>
              </div>
            </div>
            <p className="text-sm text-[#3976f2]">+$2/mo</p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default step3;
