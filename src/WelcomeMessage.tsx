import React from "react";

interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
  return (
    <h1 style={{
      display: "inline-block",
    }}
    data-testid="welcome-message">Welcome to {name}</h1>
  );
};

export default WelcomeMessage;