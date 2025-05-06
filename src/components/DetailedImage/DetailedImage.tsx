import React from "react";

export type DetailedImageProps = React.ComponentProps<'img'> & {
  disabled?: boolean;
  src: string;
  // Icon?: React.ReactNode;
  imgTitle?: string;
  // iconPosition?: "bottomRight"
}

export const DetailedImage: React.FC<DetailedImageProps> = ({
  src,
  className,
  // Icon,
  // iconPosition = "bottomRight",
  imgTitle,
  // ...props
}) => (
    <div className="hover:shadow-[0px_10px_15px_1px_rgba(0,_0,_0,_0.1)] hover:cursor-pointer relative inline-block">
        <img 
          src={src} 
          className={className} 
          />
        {/* <div className={`absolute ${iconPosition === "bottomRight" ? "right-2 bottom-2" : ""}`}>{Icon}</div> */}
        {imgTitle && <div className={`absolute h-[30%] w-full bg-[rgba(0,0,0,0.7)] rounded-md flex bottom-0 justify-center items-center`}>
          <h3 className=" text-white text-3xl">{imgTitle}</h3>
        </div>}
    </div>
);
