// Published views supplied by the project owner.
export const TABLEAU_VIEWS = {
  dashboard: {
    title: "Electric Vehicle Market Performance & Insights",
    url: "https://public.tableau.com/views/EV_Market_Performance_Insights_Story_Final/ElectricVehicleMarketPerformanceInsights",
    description:
      "Explore the published interactive dashboard, including market, manufacturer, battery, pricing and range views.",
  },
  story: {
    title: "EV Market Executive Story",
    url: "https://public.tableau.com/views/EV_Market_Performance_Insights_Story_Final/EVMarketExecutiveStory",
    description:
      "Follow the published executive story inside the EV market performance workbook.",
  },
};

// Set VITE_GITHUB_REPO_URL when the project is uploaded to its GitHub repository.
export const GITHUB_REPO_URL = import.meta.env.VITE_GITHUB_REPO_URL || "";
