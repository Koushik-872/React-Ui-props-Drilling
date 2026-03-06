import React from "react";
import { ArrowUpRight } from "lucide-react";

const Text = () => {
  return (
    <div className="p-20 flex flex-col  h-full">
      <h1 className="text-7xl font-black leading-tight">
        Prospective <br /> Customer <br />
        Segmentation
      </h1>
      <p className="text-large text-gray-700 mt-3 ml-1 leading-relaxed">
        Depending on customer <br />
        satisfaction and access <br />
        to banking products, potential <br />
        target audience can be divided <br />
        into three groups
      </p>
      <div className="mt-auto">
        <ArrowUpRight size={36} color="#000000" />
      </div>
    </div>
  );
};

export default Text;
