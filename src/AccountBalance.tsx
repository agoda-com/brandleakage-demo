import React from "react";

interface AccountBalanceProps {
  currency: string;
}

const AccountBalance: React.FC<AccountBalanceProps> = ({ currency }) => {
  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", backgroundColor: "#fff", color: "#000" }}>
      <h2>Account Balance</h2>
      <p>Your balance is: 1,000 {currency}</p>
    </div>
  );
};

export default AccountBalance;