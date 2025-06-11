import React from "react";

const ExclusiveComponent: React.FC = () => {
  return (
    <div
      data-testid="exclusive-component"
      style={{
        position: "absolute", // Position the component absolutely
        top: "20px", // Distance from the top of the page
        right: "20px", // Distance from the right of the page
        padding: "10px",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        color: "#000",
        zIndex: 1000, // Ensure it appears above other elements
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for better visibility
      }}
    >
      <h2>Exclusive Feature</h2>
      <p>This feature is only available for Bank A customers.</p>
    </div>
  );
};

export default ExclusiveComponent;