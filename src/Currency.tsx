import React from "react";

interface CurrencyProps {
  currency: string;
}

const Currency: React.FC<CurrencyProps> = ({ currency }) => {
  return (
    <p style={{
      display: "inline-block",
    }}
    data-testid="currency">Currency: {currency}</p>
  );
};

export default Currency;