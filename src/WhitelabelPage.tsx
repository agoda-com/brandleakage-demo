import React from "react";
import { WhitelabelConfig } from "./configs";
import WelcomeMessage from "./WelcomeMessage";
import Features from "./Features";
import Currency from "./Currency";
import ExclusiveComponent from "./ExclusiveComponent";

interface WhitelabelPageProps {
  config: WhitelabelConfig;
  simulateLeakage?: boolean; // Optional prop to simulate brand leakage
}

const WhitelabelPage: React.FC<WhitelabelPageProps> = ({ config, simulateLeakage }) => {
  const currency = simulateLeakage ? "USD" : config.currency;
  const logo = simulateLeakage ? "/logos/bankA.png" : config.logo;
  const showExclusiveComponent = config.name === "Bank A" || simulateLeakage;

  return (
    <div
      style={{
        position: "relative", // Ensure the ExclusiveComponent is positioned relative to this container
        backgroundColor: config.themeColor,
        padding: "20px",
        color: "#fff",
        minHeight: "100vh", // Ensure the container takes up the full height of the page
      }}
    >
      <img data-testid="logo" src={logo} alt={`${config.name} Logo`} style={{ height: "50px" }} /><br></br>
      <WelcomeMessage name={config.name} /><br></br>
      <Features features={config.features} /><br></br>
      <Currency currency={currency} />
      {showExclusiveComponent && <ExclusiveComponent />}
    </div>
  );
};

export default WhitelabelPage;