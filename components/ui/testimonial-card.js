"use client";
import { useState, useRef } from "react";
import IconButton from "./icon-button";
import { ArrowUpRight, Pause, Play } from "lucide-react";

const ControlButton = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`absolute z-10 flex items-center justify-center rounded-full text-white ${className}`}
  >
    {children}
  </button>
);

const TestimonialCard = ({ buttonHref, children, videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="border-2 border-[#0649E7] w-full overflow-hidden rounded-3xl bg-primary shadow-lg">
      <div className="w-full overflow-hidden rounded-3xl bg-white shadow-lg p-6 flex flex-col items-center justify-center h-64">
        <button className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full">
          <Play size={28} />
        </button>
      </div>


      <div className="p-6 text-white">
        <p className="text-lg">{children}</p>

        <div className="flex justify-end mt-4">
          <IconButton href={buttonHref}>
            <ArrowUpRight />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
