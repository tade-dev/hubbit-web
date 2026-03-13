import React from "react";
import logoImg from "@/assets/logo.png";

interface HabbitMascotProps {
  size?: number;
  className?: string;
  bounce?: boolean;
}

const HabbitMascot = ({
  size = 140,
  className = "",
  bounce = false,
}: HabbitMascotProps) => (
  <div
    className={`${className} ${bounce ? "animate-habbit-bounce" : ""} relative overflow-hidden rounded-[20%] border-2 border-primary/20 bg-background shadow-xl`}
    style={{
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <img
      src={logoImg}
      alt="Hubbit Logo"
      className="w-full h-full object-cover select-none"
      draggable={false}
    />
  </div>
);

export default HabbitMascot;
