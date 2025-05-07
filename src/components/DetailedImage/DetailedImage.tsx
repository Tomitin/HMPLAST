import Image from "next/image";
import React from "react";

export type DetailedImageProps = React.ComponentProps<'img'> & {
  disabled?: boolean;
  src: string;
  width: number;
  height: number;
  // Icon?: React.ReactNode;
  imgTitle?: string;
  // iconPosition?: "bottomRight"
}

export const DetailedImage: React.FC<DetailedImageProps> = ({
  src,
  className,
  // Icon,
  width,
  height,
  // iconPosition = "bottomRight",
  imgTitle,
  // ...props
}) => (
    <div className="relative inline-block">
        <Image 
          src={src}
          width={width}
          height={height}
          className={className}
          alt=""
          />
        {/* <div className={`absolute ${iconPosition === "bottomRight" ? "right-2 bottom-2" : ""}`}>{Icon}</div> */}
        {imgTitle && <div className={`absolute h-[30%] w-full bg-[rgba(0,0,0,0.7)] rounded-md flex bottom-0 justify-center items-center`}>
          <h3 className=" text-white text-3xl">{imgTitle}</h3>
        </div>}
    </div>
);
