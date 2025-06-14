
import React from "react";

const HabbitMascot = ({
  size = 140,
  className = "",
  bounce = false,
}: {
  size?: number;
  className?: string;
  bounce?: boolean;
}) => (
  <img
    src="/lovable-uploads/d7c316d5-7095-427e-8379-06ed51218e1c.png"
    width={size}
    height={size}
    alt="Hubbit Mascot"
    className={`${className} ${bounce ? "animate-habbit-bounce" : ""} drop-shadow-xl select-none`}
    draggable={false}
    style={{ display: "inline-block" }}
  />
);

export default HabbitMascot;
