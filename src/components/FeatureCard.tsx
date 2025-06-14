
import React from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="group bg-white border border-orange-100 shadow-md rounded-xl p-7 transition-transform hover:-translate-y-2 hover:shadow-xl animate-fade-in">
    <div className="flex items-center justify-center mb-4 text-orange-500 text-4xl group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="font-bold text-lg mb-2 text-orange-800">{title}</h3>
    <p className="text-gray-500 text-base">{description}</p>
  </div>
);

export default FeatureCard;
