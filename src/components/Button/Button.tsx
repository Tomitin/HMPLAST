// import styled from "@emotion/styled";
// import { Button } from "antd";
// import type { BaseButtonProps } from "antd/lib/button/button";
// import type { FC } from "react";
import { WhatsappIcon } from "@/assets/icons/Whatsapp";
import React from "react";

// import { black, darkGreen, lightGreen, lightGrey2 } from "../../styles/colors";

// const StyledButton = styled(Button)<{ fullWidth: boolean }>`
//   :focus {
//     color: ${lightGreen};
//     background: ${({ disabled }) => (disabled ? undefined : `${darkGreen} !important`)};
//     border: 1px solid ${lightGreen};
//   }
//   :hover {
//     color: ${black};
//     background: ${({ disabled }) => (disabled ? undefined : `${lightGreen} !important`)};
//   }
//   :active {
//     color: ${black};
//     background: ${({ disabled }) => (disabled ? undefined : `${lightGreen} !important`)};
//   }

//   ${(props) => (props.fullWidth ? "width: 100%;" : null)}
//   background: ${({ disabled }) => (disabled ? "#3D3D3D !important" : `${darkGreen}`)};
//   color: ${({ disabled }) => (disabled ? `${lightGrey2} !important` : lightGreen)};
//   border: none;
//   border-radius: 2px;
//   font-weight: 800;
//   text-align: center;
// `;

export interface ButtonProps extends React.ComponentProps<'button'> {
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  children?: React.ReactNode;
  buttonType?: "primary" | "secondary";
  size?: "md" | "lg";
  Icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  children,
  onClick,
  className,
  fullWidth,
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
