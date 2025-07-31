import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("render Noitifications component", () => {
    render(<App />);
    const notifications = screen.getByText(/notifications/i);
    expect(notifications).toBeInTheDocument();
  });

  test("renders Header, Login, Footer, and Notifications", () => {
    render(<App />);
    const header = screen.getAllByText(/school dashboard/i);
    expect(header).toBeInTheDocument();
  });

  test("render login component", () => {
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test("render footer compoenent", () => {
    const footer = screen.getByText(/copyright/i);
    expect(footer).toBeInTheDocument();
  });
});
