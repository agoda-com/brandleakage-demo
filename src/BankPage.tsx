import React from "react";
import { BankConfig } from "./types";
import PremiumServices from "./PremiumServices";
import AccountBalance from "./AccountBalance";

interface BankPageProps {
  config: BankConfig;
}

const BankPage: React.FC<BankPageProps> = ({ config }) => {
  return (
    <div style={{ backgroundColor: config.themeColor, padding: "20px", color: "#fff" }}>
      <img src={config.logo} alt={`${config.name} Logo`} style={{ height: "50px" }} />
      <h1>Welcome to {config.name}</h1>

      {/* Render the shared component */}
      <AccountBalance currency={config.currency} />

      {/* Render the exclusive component only if applicable */}
      {config.hasPremiumServices && <PremiumServices />}
    </div>
  );
};

export default BankPage;