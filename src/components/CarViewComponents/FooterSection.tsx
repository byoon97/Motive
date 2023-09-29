import Link from "next/link";
import React from "react";

interface PageProps {
  daysRenting: number;
  ppd: number;
  make: string;
  model: string;
  id: number;
}

const FooterSection: React.FC<PageProps> = ({
  daysRenting,
  ppd,
  make,
  model,
  id,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 w-full z-2 pointer-events-none mb-4">
      <div className="bg-gradient-to-t from-gray-50 to-transparent pointer-events-none h-20 w-full">
        .
      </div>
      <div className="border border-gray-300 bg-white h-[72px] mx-2 rounded-lg shadow-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col font-sans text-left text-black">
            <div className="font-bold text-sm">
              <span className="line-through text-xs mr-1 text-[#9B9B9B] font-thin">
                ${ppd + 15}
              </span>
              ${ppd}/day
            </div>
            <div className="underline text-xs text-gray-500">
              ${daysRenting * ppd} est. total
            </div>
          </div>
          <Link
            href={{
              pathname: `/rent-a-car/${make}/${model}/${id}/checkout`,
            }}
            className="cursor-pointer"
          >
            <button className="font-sans w-[118px] font-semibold tracking-wide leading-6 border rounded-lg box-border cursor-pointer max-w-full outline-none overflow-hidden relative truncate whitespace-no-wrap transition transform duration-150 border-1 border-solid bg-[#593CFB] text-white  text-base py-2 px-4 min-h-12">
              <span className="relative block my-0 mx-[-4px]">Continue</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
