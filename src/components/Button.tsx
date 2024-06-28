import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export interface ButtonProps {
  onClick: () => void;
  direction: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({ onClick, direction }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "left" ? "left-0" : "right-0"
      } p-2 bg-white-500 text-black rounded-full`}
    >
      <FontAwesomeIcon
        icon={direction === "left" ? faCircleArrowLeft : faCircleArrowRight}
        size="lg"
      />
    </button>
  );
};

export default Button;
