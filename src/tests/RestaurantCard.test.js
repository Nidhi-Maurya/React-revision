import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../components/restaurants/RestaurantCard";

test("should render restaurant card details", () => {
  render(
    <RestaurantCard
      resData={{
        info: {
          name: "Test Kitchen",
          avgRating: 4.4,
          cuisines: ["North Indian", "Snacks"],
          costForTwo: "Rs. 300 for two",
          locality: "Sector 14",
          sla: { deliveryTime: 25 },
        },
      }}
    />,
  );

  expect(screen.getByText("Test Kitchen")).toBeInTheDocument();
  expect(screen.getByText(/North Indian/)).toBeInTheDocument();
});
