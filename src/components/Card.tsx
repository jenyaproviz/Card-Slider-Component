import React from "react";
import { CardProps } from "../types/index";

const paymentSystemLogos: { [key in CardProps["PaymentSystem"]]: string } = {
  Visa: "https://cdn.iconscout.com/icon/free/png-512/free-visa-3-226460.png?f=webp&w=512",
  MasterCard:
    "https://cdn.iconscout.com/icon/free/png-512/free-mastercard-25-675722.png?f=webp&w=512",
};

const Card: React.FC<CardProps> = ({
  PaymentSystem,
  FirstName,
  LastName,
  CardNumber,
  Role,
  Status,
  Logo,
}) => {
  let background;

  switch (PaymentSystem) {
    case "Visa":
      background = "bg-gradient-to-r from-blue-400 to-blue-900";
      break;
    case "MasterCard":
      background = "bg-gradient-to-r from-gray-400 to-gray-900";
      break;
    default:
      background = "default-gradient";
      break;
  }

  const paymentSystemLogo =
    paymentSystemLogos[PaymentSystem as keyof typeof paymentSystemLogos];

  return (
    <div
      className={`w-full p-4 rounded-lg shadow-md text-white ${background} grid grid-rows-auto gap-4`}
      style={{ width: "10cm", height: "6cm" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center mb-4">
          <span className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 rounded-sm mr-2" />
            <p className="m-0">mrkter.</p>
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span>{Role}</span>
          <span>{Status}</span>
        </div>
      </div>

      <div className="ml-6">
        <p>
          {FirstName} {LastName}
        </p>
      </div>
      <div className="ml-6 text-3xl">
        <p>**** **** **** {CardNumber.slice(-4)}</p>
      </div>

      <div className="flex justify-end items-center">
        {paymentSystemLogo && (
          <img
            src={paymentSystemLogo}
            alt={`${PaymentSystem} logo`}
            className="h-10 w-10 object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
