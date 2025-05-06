"use client"
import React, { Dispatch, SetStateAction } from "react";


export interface HamburguerProps {
    isHamburguerOpen: boolean;
    setHamburguerOpen: Dispatch<SetStateAction<boolean>>;
}


export const Hamburguer: React.FC<HamburguerProps> = ({ isHamburguerOpen, setHamburguerOpen }) => {
  const handleClick = () => {
    setHamburguerOpen(!isHamburguerOpen)
  }

  return (
    <div onClick={handleClick} className="w-8 h-8 relative flex flex-col justify-center items-center">
      <span
        className={`block absolute w-6 h-0.5 bg-black transform transition duration-300 ease-in-out
          ${isHamburguerOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}
        `}
      />
      <span
        className={`block absolute w-6 h-0.5 bg-black transition-all duration-300 ease-in-out
          ${isHamburguerOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      <span
        className={`block absolute w-6 h-0.5 bg-black transform transition duration-300 ease-in-out
          ${isHamburguerOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}
        `}
      />
    </div>
)};
