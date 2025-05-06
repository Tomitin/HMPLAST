import React from "react";

export interface ButtonProps extends React.ComponentProps<'button'> {
  // disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
  // fullWidth?: boolean;
  children?: React.ReactNode;
  buttonType?: "primary" | "secondary";
  size?: "md" | "lg";
  Icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  // disabled = false,
  children,
  onClick,
  className,
  // fullWidth,
  buttonType = "primary",
  size = "md",
  Icon,
  ...props
}) => (
  <button 
    onClick={onClick} 
    
    className={`
        flex
        justify-center items-center 
        ${buttonType === "primary" ? "bg-[#ffffff] hover:bg-[#cacaca] active:bg-[#b8b8b8]" : "hover:bg-[#fff] active:bg-[#b8b8b8]"}
        ${size === "md" ? "px-5 py-2" : "px-6 py-3"}
        rounded-[24px] 
        text-base
        border-2 border-black
        hover:cursor-pointer
        ${buttonType === "primary" ? "text-black" : "text-white hover:text-black"}
        font-bold 
        ${buttonType === "primary" ? "" : ""} ${className}`} 
        {...props}
    >
        {Icon ? <div className="mr-2">{Icon}</div> : <></>}
        {children}
  </button>
);
