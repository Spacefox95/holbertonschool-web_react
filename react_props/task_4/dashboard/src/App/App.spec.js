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
    const header = screen.getByText(/school dashboard/i);
    expect(header).toBeInTheDocument();
  });

  test("render login component", () => {
    render(<App isLoggedIn={false} />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test("render footer compoenent", () => {
    const currentYear = new Date().getFullYear();
    const footer = screen.getByText(
      new RegExp(`Copyright\\s+${currentYear}`, "i")
    );
    expect(footer).toBeInTheDocument();
  });
});
