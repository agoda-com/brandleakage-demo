export interface WhitelabelConfig {
  currency: any;
  name: string;
  logo: string;
  themeColor: string;
  features: string[];
}

export const bankAConfig: WhitelabelConfig = {
  name: "Bank A",
  logo: "/logos/bankA.png", // Add a logo image in the public/logos folder
  themeColor: "#1E90FF",
  features: ["Loan Calculator", "Savings Tracker"],
  currency: "USD"
};

export const bankBConfig: WhitelabelConfig = {
  name: "Bank B",
  logo: "/logos/bankB.png", // Add a logo image in the public/logos folder
  themeColor: "#32CD32",
  features: ["Investment Planner", "Credit Score Checker"],
  currency: "PHP"
};