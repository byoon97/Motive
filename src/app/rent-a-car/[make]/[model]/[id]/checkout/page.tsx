import React from "react";
import Header from "@/components/Checkout/Header";

interface PageProps {}

const Checkout: React.FC<PageProps> = () => {
  return (
    <div className="text-black flex flex-col">
      <Header />
    </div>
  );
};

export default Checkout;
