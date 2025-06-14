
import React from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="group bg-white border border-gray-100 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#F68A1F]/20 font-poppins">
    <div className="flex items-center justify-center mb-6 text-[#F68A1F] text-4xl group-hover:scale-110 transition-transform duration-300 bg-orange-50 rounded-2xl w-16 h-16 mx-auto">
      {icon}
    </div>
    <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#F68A1F] transition-colors text-center">
      {title}
    </h3>
    <p className="text-gray-600 text-base leading-relaxed text-center">
      {description}
    </p>
  </div>
);

export default FeatureCard;
