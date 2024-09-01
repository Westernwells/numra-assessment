import React from "react";

// export default function PrimaryButton({
//   label,
//   bgClr,
//   height,
//   extraStyles,
//   handleClick,
// }: {
//   label?: String;
//   bgClr?: String;
//   height?: String;
//   extraStyles?: String;
//   handleClick?: () => void;
// }) {
//   return (
//     <div
//       className={`flex h-full w-full items-center justify-center rounded-[5px] text-xs text-white hover:cursor-pointer md:text-sm lg:text-base ${bgClr ? bgClr : "bg-pry"} ${height ? height : "h-[30px] md:h-[40px] lg:h-[50px]"} ${extraStyles ? extraStyles : ""}`}
//     >
//       {label ? label : "Button"}
//     </div>
//   );
// }

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  bgClr?: string;
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  bgClr,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-[30px] w-full items-center justify-center rounded-[5px] text-xs text-white hover:cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 md:h-[40px] md:text-sm lg:h-[50px] lg:text-base ${bgClr ? bgClr : "bg-pry"} ${className}`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
