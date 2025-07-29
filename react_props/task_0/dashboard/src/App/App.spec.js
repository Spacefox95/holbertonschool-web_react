import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders Header, Login, Footer, and Notifications", () => {
    render(<App />);

    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/login to access/i)).toBeInTheDocument();
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/holberton school main dashboard/i)
    ).toBeInTheDocument();
  });
});
