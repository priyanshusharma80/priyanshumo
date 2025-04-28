import Link from "next/link";
import { Button } from "./button";

const IconButton = ({ children, className, type = "Link", ...props }) => {
  const Component =
    type === "Link" ? Link : type === "Button" ? Button : "button";
  return (
    <Component
      className={`flex items-center justify-center w-12 h-12 bg-white rounded-full text-primary hover:bg-primary hover:text-white hover:border transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
export default IconButton;
