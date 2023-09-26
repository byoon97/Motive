import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface PageProps {
  address: string;
}

const ContentFillter: React.FC<PageProps> = ({ address }) => {
  return (
    <>
      {" "}
      <div id="PickUpReturn" className="flex flex-col mt-5">
        <h3 className="font-sans font-bold">Pickup & return location</h3>
        <div className="mb-4 flex flex-row justify-between items-center border-[1px] p-2 cursor:pointer">
          <div className="text-sm font-sans">{address}</div>
          <IoIosArrowDown />
        </div>
        <div className="flex rounded-lg bg-[#F4F4F4] flex-row justify-between items-center border-[1px] px-4 py-3 bg-gray">
          <div className="text-sm font-sans">3+ day discount</div>
          <div className="text-[14px] leading-[12px] font-sans text-[#5FA98E]">
            $28
          </div>
        </div>

        <button className="mt-4 font-sans font-semibold tracking-wide leading-6 border rounded-lg box-border cursor-pointer max-w-full outline-none overflow-hidden relative truncate whitespace-no-wrap transition transform duration-150 border-1 border-solid bg-[#593CFB] text-white  text-base py-2 px-4 min-h-12">
          <span className="relative block my-0 mx-[-4px]">Continue</span>
        </button>
      </div>
      <div className="w-full border-b-[0.25px] mt-6 align-center"></div>
      <div className="mt-6 flex flex-row">
        <div className="text-[#593CFB] mr-4 flex items-center">
          <FiThumbsUp />
        </div>
        <div className="flex flex-col items-start">
          <div className="font-bold font-sans">Free cancellation</div>
          <div className="text-xs font-sans text-[#A3A3A3]">
            Full refund before
          </div>
        </div>
      </div>
      <div className="w-full border-b-[0.25px] mt-6"></div>
      <div className="flex flex-col mt-6">
        <div className="text-xs font-bold font-sans text-[#787879] mb-2">
          INSURANCE & PROTECTION
        </div>
        <div className="flex flex-row">
          <div className="font-sans text-sm font-thin mr-1">
            Insurance via Travelers
          </div>
          <AiOutlineQuestionCircle className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default ContentFillter;
