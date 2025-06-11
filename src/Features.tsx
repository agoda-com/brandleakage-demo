import React from "react";

interface FeaturesProps {
  features: string[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div style={{
      display: "inline-block",
    }}
    data-testid="features-list">
      <h2>Features:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} data-testid={`feature-${index}`}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;